import { useState } from "react";
import Modal from "./Modal";

function ModalContainer() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <h1>Modal</h1>
      <button onClick={() => toggleModal()}>Show Modal</button>
      {showModal ? (
        <Modal toggleModal={toggleModal} showModal={showModal} />
      ) : null}
    </div>
  );
}

export default ModalContainer;
