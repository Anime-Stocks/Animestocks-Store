export default function FormData({
    formData: { name, link, cat, image, description, price },
    handleSubmitForm,
    handleChangeFormValues,
    productInfo,
}) {
    return (
        <form onSubmit={handleSubmitForm} className="w-[500px]">
            <div className="flex mt-5">
                <label className="w-[150px] text-start">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeFormValues}
                    className="w-full text-black py-2 px-3"
                />
            </div>

            <div className="flex mt-5">
                <label className="w-[150px] text-start">Link:</label>
                <input
                    type="text"
                    name="link"
                    value={link}
                    onChange={handleChangeFormValues}
                    className="w-full text-black py-2 px-3"
                />
            </div>

            <div className="flex mt-5">
                <label className="w-[150px] text-start">{productInfo}</label>
                <input
                    type="text"
                    name="cat"
                    value={cat}
                    onChange={handleChangeFormValues}
                    className="w-full text-black py-2 px-3"
                />
            </div>

            <div className="flex mt-5">
                <label className="w-[150px] text-start">Image:</label>
                <input
                    type="file"
                    name="image"
                    value={image}
                    onChange={handleChangeFormValues}
                    className="w-full text-black py-2 px-3"
                />
            </div>

            <div className="flex mt-5">
                <label className="w-[150px] text-start">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChangeFormValues}
                    className="w-full text-black py-2 px-3"
                />
            </div>

            <div className="flex mt-5">
                <label className="w-[150px] text-start">Price:</label>
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={handleChangeFormValues}
                    className="w-full text-black py-2 px-3"
                />
            </div>

            <button type="submit" className="py-3 px-10 mt-10 rounded-lg bg-blue-600 hover:bg-red-600">
                Submit Novel
            </button>
        </form>
    );
}
