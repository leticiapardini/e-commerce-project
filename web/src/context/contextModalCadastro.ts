import { createContext} from "react";


interface ContextData {
  modal: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
  modalCad: boolean;
  handleModalOpenCad: () => void;
  handleModalCloseCad: () => void;
  logado: boolean;
  estaLogado: () => void;
}

export const useContextModal = createContext<ContextData>({
  modal: false,
  handleModalOpen: () => false,
  handleModalClose: () => true,
  logado: false,
  estaLogado: () => false,
  modalCad: false,
  handleModalOpenCad: () => false,
  handleModalCloseCad: () => true,

});
