// store.js - zustand 스토어 설정
import { create } from 'zustand';
import { ReactNode } from 'react'; // ReactNode를 사용하여 모든 JSX 요소를 포함할 수 있도록 설정

type ModalStore = {
  isModalOpen: boolean;
  modalContent: ReactNode; // JSX.Element와 유사하게 작동합니다.
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: ReactNode) => void; // ReactNode로 타입 설정
};

const useModalStore = create<ModalStore>()((set) => ({
  isModalOpen: false,
  modalContent: null,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalContent: (content) => set({ modalContent: content }),
}));

export default useModalStore;
