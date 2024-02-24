import { create } from "zustand";

type ModalStore = {
  isModalOpen: boolean;
  modalContent: JSX.Element;
  openModal: () => void;
  closeModal: () => void;
  setModalContent: (content: JSX.Element) => void;
};

const useModalStore = create<ModalStore>()((set) => ({
  isModalOpen: false,
  modalContent: <></>,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalContent: (content) => set({ modalContent: content }),
}));

export default useModalStore;
