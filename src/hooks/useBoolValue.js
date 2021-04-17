import React from "react";

function useBoolValue() {
    const [showModal, setShowModal] = React.useState(false);
    const toggleModal = () => setShowModal(!showModal);

    return [showModal, toggleModal];
}

export default useBoolValue;
