import { XIcon } from "lucide-react";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ closeModal, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-[70%] max-h-[80%] w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-2 rounded-full"
          onClick={closeModal}
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
