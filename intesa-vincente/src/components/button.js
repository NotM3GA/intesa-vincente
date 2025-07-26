// https://preline.co/docs/buttons.html#pilled-button

export default function Buttons() {
  return (
    <div>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Button
      </button>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        Button
      </button>
    </div>
  );
}
