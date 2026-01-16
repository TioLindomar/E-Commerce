import { toast, type ToastOptions, Slide } from "react-toastify";

// Configuramos as opções padrão que se repetem em todos
const defaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  transition: Slide,
};

// Objeto que centraliza as chamadas
export const notify = {
  success: (msg: string) =>
    toast.success(msg, {
      ...defaultOptions,
      className: "toast toast-border-success", // Classe para a borda
      icon: (
        <span
          className="material-symbols-outlined"
          style={{ color: "#2ECC71" }}
        >
          check_circle
        </span>
      ),
    }),

  error: (msg: string) =>
    toast.error(msg, {
      ...defaultOptions,
      className: "toast toast-border-error",
      icon: (
        <span
          className="material-symbols-outlined"
          style={{ color: "#E74C3C" }}
        >
          error
        </span>
      ),
    }),

  info: (msg: string) =>
    toast.info(msg, {
      ...defaultOptions,
      className: "toast",
      icon: (
        <span
          className="material-symbols-outlined"
          style={{ color: "#017cff" }}
        >
          info
        </span>
      ),
    }),
};
