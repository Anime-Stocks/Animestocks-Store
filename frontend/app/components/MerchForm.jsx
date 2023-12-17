"use client";

import { useState } from "react";
import FormData from "../utils/FormData";
import axios from "axios";
import { ConfirmationPopUp } from "../utils/ConfirmationPopUp";

export default function MerchForm() {
    const [formData, setFormData] = useState({
        name: "",
        link: "",
        cat: "",
        image: "",
        description: "",
        price: "",
    });
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

    function handleChangeFormValues(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function handleSubmitForm(e) {
        e.preventDefault();
        setShowConfirmationPopup(true);
    }

    async function handleConfirmSubmit() {
        setShowConfirmationPopup(false);

        await axios.post("http://localhost:8080/addMerch", formData);
    }

    function handleCancelSubmit() {
        setShowConfirmationPopup(false);
    }

    return (
        <>
            <FormData
                formData={formData}
                handleSubmitForm={handleSubmitForm}
                handleChangeFormValues={handleChangeFormValues}
                productInfo={"Categories:"}
            />
            {showConfirmationPopup && (
                <ConfirmationPopUp
                    message={`Submitting to manga:\nName: "${formData.name}"\nLink: "${formData.link}"\nCategory: "${formData.cat}"\nImage: "${formData.image}"\nDescription: "${formData.description}"\nPrice: "${formData.price}"`}
                    onConfirm={handleConfirmSubmit}
                    onCancel={handleCancelSubmit}
                />
            )}
        </>
    );
}
