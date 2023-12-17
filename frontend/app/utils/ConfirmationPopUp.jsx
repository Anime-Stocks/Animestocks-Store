export function ConfirmationPopUp({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-gray-200 bg-opacity-40 whitespace-pre-line">
            <div className="flex flex-col gap-10 rounded-xl border border-emerald-100 bg-white py-10 px-16 shadow-lg transform scale-100 transition-transform ease-in-out duration-300">
                <p className="font-bold text-xl text-red-800">Are you sure?</p>

                <p className="text-gray-500 w-[700px]">{message}</p>

                <div className="flex-col">
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="w-full rounded-lg px-5 py-3 text-center text-sm font-semibold bg-green-400 hover:bg-green-600 text-white"
                    >
                        Confirm
                    </button>

                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full rounded-lg px-5 py-3 mt-5 text-center text-sm font-semibold bg-gray-200 hover:bg-gray-400 text-gray-700"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
