function Button({ children, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="place-self-center size-fit bg-gray-900 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-gray-900 rounded"
    >
      {children}
    </button>
  );
}
export default Button;
