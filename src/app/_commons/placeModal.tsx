'use client';

import useModalStore from '@/app/hooks/useModalStore';
import useSelectedLocationStore from '@/app/hooks/useSelectedLocationStore';

const PlaceModal = () => {
  const { isModalOpen, modalContent, closeModal } = useModalStore();
  const { location } = useSelectedLocationStore();

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  return (
    <>
      {isModalOpen && location && (
        <div
          className="top-0 left-0 absolute w-full h-full bg-transparentWhite-100 z-5 p-3.5 flex flex-col-reverse"
          onClick={handleOutsideClick}
        >
          <div className="mb-2 " onClick={stopPropagation}>
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceModal;
