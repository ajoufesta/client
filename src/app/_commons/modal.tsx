"use client";

import useModalStore from "@/app/hooks/useModalStore";

const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useModalStore();

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div
          className="absolute w-full h-full flex justify-center items-center bg-transparentWhite-100 z-50"
          onClick={handleOutsideClick}
        >
          <div className="w-auto h-auto" onClick={stopPropagation}>
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
