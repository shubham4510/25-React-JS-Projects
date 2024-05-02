import Modal from "./Modal";
import { useState } from "react";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false)
  }
  return (
    <div className="container">
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <Modal onClose={onClose} body={<div>Customized body </div>} />}
    </div>
  );
};

export default ModalTest;
