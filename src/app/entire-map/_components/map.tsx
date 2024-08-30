'use client';
import React, { useRef, useEffect, useMemo, useState } from 'react';
import pins from '../_resources/pins.json';
import useModalStore from '@/app/hooks/useModalStore';
import ClubInfo from '@/app/_commons/clubInfo';
import useSelectedLocationStore from '@/app/hooks/useSelectedLocationStore';
import PlaceNavigator from '@/app/_commons/placeNavigator';

const INITIAL_POSITION = { x: 650, y: 550 };
const MAP_SIZE = 1200;
const ORIGIN_MAP_WIDTH = 2336;
const ORIGIN_MAP_HEIGHT = 2481;
const PAN_SENSITIVITY = 2.5;

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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  var clikcedBooth = 0;

  const [containerSize, setContainerSize] = useState({
    width: 600,
    height: 1000,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const viewPosRef = useRef(INITIAL_POSITION);
  const isPanningRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const canvasSizeRef = useRef<number>(0);
  useEffect(() => {
    const updateContainerSize = () => {
      if (mapContainerRef.current) {
        setContainerSize({
          width: mapContainerRef.current.clientWidth,
          height: mapContainerRef.current.clientHeight,
        });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

  const { width: containerWidth, height: containerHeight } = containerSize;

  const screenRatio = useMemo(
    () => containerHeight / containerWidth,
    [containerHeight, containerWidth]
  );

  const maxViewPosX = useMemo(() => ORIGIN_MAP_WIDTH - MAP_SIZE, []);
  const maxViewPosY = useMemo(
    () => ORIGIN_MAP_HEIGHT - MAP_SIZE * screenRatio,
    [screenRatio]
  );

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvasSizeRef.current = containerWidth;
        canvas.width = containerWidth;
        canvas.height = containerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerHeight, containerWidth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const mapImage = new Image();

    mapImage.src = 'assets/map/map.png'; // 지도 이미지
    const pinImages = pins.reduce(
      (acc, pin) => {
        const img = new Image();
        img.src = `assets/map/${pin.pinName}.png`; // 핀 이미지 로드
        acc[pin.pinName] = img;
        return acc;
      },
      {} as Record<string, HTMLImageElement>
    );

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // render map in canvas
      ctx.drawImage(
        mapImage,
        viewPosRef.current.x,
        viewPosRef.current.y,
        MAP_SIZE,
        MAP_SIZE * screenRatio,
        0,
        0,
        containerWidth,
        containerHeight
      );

      // render pins in canvas
      pins.forEach((pin: Pin) => {
        const relativePinX =
          (pin.x - viewPosRef.current.x) * (canvasSizeRef.current / MAP_SIZE);
        const relativePinY =
          (pin.y - viewPosRef.current.y) * (canvasSizeRef.current / MAP_SIZE);

        if (
          relativePinX >= 0 &&
          relativePinX <= canvasSizeRef.current &&
          relativePinY >= 0 &&
          relativePinY <= canvasSizeRef.current * screenRatio
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
          clikcedBooth = pin.boothId!;
        }
      });
    };

    const handleMove = (clientX: number, clientY: number) => {
      if (!isPanningRef.current) return;

      const deltaX = (clientX - startPosRef.current.x) * PAN_SENSITIVITY;
      const deltaY = (clientY - startPosRef.current.y) * PAN_SENSITIVITY;

      startPosRef.current = { x: clientX, y: clientY };

      const newViewPosX = viewPosRef.current.x - deltaX;
      const newViewPosY = viewPosRef.current.y - deltaY;

      const limitedViewPosX = Math.max(Math.min(newViewPosX, maxViewPosX), 0);
      const limitedViewPosY = Math.max(Math.min(newViewPosY, maxViewPosY), 0);

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
          mouseY <= pinBottom &&
          clikcedBooth == pin.boothId
        ) {
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
  }, [
    containerHeight,
    containerWidth,
    maxViewPosX,
    maxViewPosY,
    openModal,
    screenRatio,
    setLocation,
    setModalContent,
  ]);
  const fetchAndRenderData = () => {
    return (
      <div
        ref={mapContainerRef}
        className="flex mt-2 w-[33.5rem] h-[49.9rem] flex-col items-center border-2 border-brown-500 rounded-3xl overflow-hidden relative shadow-md"
      >
        <canvas ref={canvasRef} />
        <PlaceNavigator />
      </div>
    );
  };

  return fetchAndRenderData();
}

export default MapWithPin;
