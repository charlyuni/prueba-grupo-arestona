import { toast, ToastOptions } from 'react-toastify';

const successAlert = (message: string, options?: ToastOptions) => {
  toast.success(message, options);
};

const errorAlert = (message: string, options?: ToastOptions) => {
  toast.error(message, options);
};

const infoAlert = (message: string, options?: ToastOptions) => {
  toast.info(message, options);
};

const warnAlert = (message: string, options?: ToastOptions) => {
  toast.warn(message, options);
};

export { errorAlert, infoAlert, successAlert, warnAlert };
