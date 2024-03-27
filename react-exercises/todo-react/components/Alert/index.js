import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const alertMessage = {
  info: (text) => toast.info(text),
  success: (text) => toast.success(text),
  warning: (text) => toast.warning(text),
  error: (text) => toast.error(text),
  default: (text) => toast.default(text),
};

const Alert = () => {
  return (
    <ToastContainer
      position="top-left"
      autoClose={3000}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      theme="light"
    />
  );
};

export { Alert, alertMessage };
