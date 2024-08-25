'use client';
import React, { useRef, useEffect } from 'react';
import pins from '../_resources/pins.json';
import useModalStore from '@/app/hooks/useModalStore';
import ClubInfo from '@/app/_commons/clubInfo';
import useSelectedLocationStore from '@/app/hooks/useSelectedLocationStore';

const INITIAL_POSITION = { x: 0, y: 0 };
const MAP_SIZE = 1000;
const PAN_SENSITIVITY = 2.5;
const MAP_WIDTH_LIMIT = 1300;
const MAP_HEIGHT_LIMIT = 1100;

interface Pin {
  x: number;
  y: number;
  width: number;
  height: number;
  type: string;
  pinName: string;
}

function MapWithPin() {
  const { openModal, setModalContent } = useModalStore();
  const { setLocation } = useSelectedLocationStore();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const viewPosRef = useRef(INITIAL_POSITION);
  const isPanningRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const canvasSizeRef = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const canvasSize = window.innerWidth - 40;
        canvasSizeRef.current = canvasSize;
        canvas.width = canvasSize;
        canvas.height = canvasSize * 1.48;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const mapImage = new Image();

    mapImage.src = 'asset/map.png'; // 지도 이미지
    const pinImages = pins.reduce(
      (acc, pin) => {
        const img = new Image();
        img.src = `asset/${pin.pinName}.png`; // 핀 이미지 로드
        acc[pin.pinName] = img;
        return acc;
      },
      {} as Record<string, HTMLImageElement>
    );

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(
        mapImage,
        viewPosRef.current.x,
        viewPosRef.current.y,
        MAP_SIZE,
        MAP_SIZE * 1.48,
        0,
        0,
        canvasSizeRef.current,
        canvasSizeRef.current * 1.48
      );

      pins.forEach((pin: Pin) => {
        const relativePinX =
          (pin.x - viewPosRef.current.x) * (canvasSizeRef.current / MAP_SIZE);
        const relativePinY =
          (pin.y - viewPosRef.current.y) * (canvasSizeRef.current / MAP_SIZE);

        if (
          relativePinX >= 0 &&
          relativePinX <= canvasSizeRef.current &&
          relativePinY >= 0 &&
          relativePinY <= canvasSizeRef.current * 1.48
        ) {
          const img = pinImages[pin.pinName];
          if (img.complete) {
            ctx.drawImage(
              img,
              relativePinX - pin.width / 2,
              relativePinY - pin.height / 2,
              pin.width,
              pin.height
            );
          } else {
            img.onload = () => {
              ctx.drawImage(
                img,
                relativePinX - pin.width / 2,
                relativePinY - pin.height / 2,
                pin.width,
                pin.height
              );
            };
          }
        }
      });
    };

    mapImage.onload = () => draw();

    const handleStart = (clientX: number, clientY: number) => {
      isPanningRef.current = true;
      startPosRef.current = { x: clientX, y: clientY };
    };

    const handleMove = (clientX: number, clientY: number) => {
      if (!isPanningRef.current) return;

      const deltaX = (clientX - startPosRef.current.x) * PAN_SENSITIVITY;
      const deltaY = (clientY - startPosRef.current.y) * PAN_SENSITIVITY;

      startPosRef.current = { x: clientX, y: clientY };

      const newViewPosX = viewPosRef.current.x - deltaX;
      const newViewPosY = viewPosRef.current.y - deltaY;

      const limitedViewPosX = Math.max(
        Math.min(newViewPosX, MAP_WIDTH_LIMIT),
        0
      );
      const limitedViewPosY = Math.max(
        Math.min(newViewPosY, MAP_HEIGHT_LIMIT),
        0
      );
      viewPosRef.current = { x: limitedViewPosX, y: limitedViewPosY };
      draw();
    };

    const handleEnd = () => {
      isPanningRef.current = false;
    };

    const handleInteraction = (clientX: number, clientY: number) => {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      pins.forEach((pin) => {
        const relativePinX =
          (pin.x - viewPosRef.current.x) * (canvasSizeRef.current / MAP_SIZE);
        const relativePinY =
          (pin.y - viewPosRef.current.y) * (canvasSizeRef.current / MAP_SIZE);

        const pinLeft = relativePinX - pin.width / 3;
        const pinRight = relativePinX + pin.width / 3;
        const pinTop = relativePinY - pin.height / 3;
        const pinBottom = relativePinY + pin.height / 3;

        if (
          mouseX >= pinLeft &&
          mouseX <= pinRight &&
          mouseY >= pinTop &&
          mouseY <= pinBottom
        ) {
          console.log('clientX', clientX, clientY);

          setLocation({ location: '1', x: pin.x, y: pin.y });
          setModalContent(<ClubInfo boothId={pin.boothId || 0} />);
          openModal();
        }
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      handleStart(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      handleInteraction(touch.clientX, touch.clientY);
    };

    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseup', handleEnd);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);

      canvas.addEventListener('touchstart', handleTouchStart);
      canvas.addEventListener('touchend', handleEnd);
      canvas.addEventListener('touchmove', handleTouchMove);
      canvas.addEventListener('touchend', handleTouch);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleEnd);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);

        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchend', handleEnd);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouch);
      }
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default MapWithPin;
