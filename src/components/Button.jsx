export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="font-semibold px-4 py-2 uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
    >
      {children}
    </button>
  );
}
