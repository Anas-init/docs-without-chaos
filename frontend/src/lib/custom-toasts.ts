import { toast } from "sonner";

type ToastArgs = {
  message: string;
  description?: string;
};

const baseStyles = {
  borderRadius: "0px",
  border: "1px solid",
  padding: "12px 16px",
  fontSize: "14px",
  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
};

export const toastSuccess = ({ message, description }: ToastArgs) => {
  toast.success(message, {
    description,
    style: {
      ...baseStyles,
      borderColor: "rgb(34 197 94 / 0.3)",
      backgroundColor: "rgb(34 197 94 / 0.1)",
      color: "rgb(74 222 128)",
    },
    classNames: {
      title: "text-green-400 font-medium",
      description: "text-green-300/80",
    },
  });
};

export const toastError = ({ message, description }: ToastArgs) => {
  toast.error(message, {
    description,
    style: {
      ...baseStyles,
      borderColor: "rgb(239 68 68 / 0.3)",
      backgroundColor: "rgb(239 68 68 / 0.1)",
      color: "rgb(248 113 113)",
    },
    classNames: {
      title: "text-red-400 font-medium",
      description: "text-red-300/80",
    },
  });
};

export const toastInfo = ({ message, description }: ToastArgs) => {
  toast.info(message, {
    description,
    style: {
      ...baseStyles,
      borderColor: "rgb(59 130 246 / 0.3)",
      backgroundColor: "rgb(59 130 246 / 0.1)",
      color: "rgb(96 165 250)",
    },
    classNames: {
      title: "text-blue-400 font-medium",
      description: "text-blue-300/80",
    },
  });
};
