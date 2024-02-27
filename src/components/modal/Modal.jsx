import "./styles.css";
import useOnOutsideClick from "../useOnOutsideClick";

function Modal({ toggleModal, showModal }) {
  const modalRef = useOnOutsideClick(toggleModal);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <dialog className="modal" open={showModal} onClick={handleModalClick}>
      <div className="modal-content" ref={modalRef}>
        <div className="modal-title">
          <div className="modal-title-text">Modal Header</div>
          <button className="modal-close" onClick={toggleModal}>
            X
          </button>
        </div>
        <div>Modal body</div>
        <div>Modal footer</div>
      </div>
    </dialog>
  );
}

export default Modal;
