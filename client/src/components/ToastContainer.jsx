function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded-xl text-sm text-white shadow-lg 
            ${toast.type === "error" && "bg-red-500/90"}
            ${toast.type === "success" && "bg-emerald-500/90"}
            ${toast.type === "info" && "bg-sky-500/90"}
          `}
        >
          <div className="flex justify-between items-center gap-4">
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;