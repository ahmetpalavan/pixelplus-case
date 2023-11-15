import { create } from "zustand";

export type ModalType = 'createUserModal';

interface ModalState {
  type: ModalType | null;
  isModalOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  type: null,
  isModalOpen: false,
  onOpen: (type) => set({ type, isModalOpen: true }),
  onClose: () => set({ type: null, isModalOpen: false }),
}));