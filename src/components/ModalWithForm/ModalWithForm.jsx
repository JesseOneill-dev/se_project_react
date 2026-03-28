import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  closeActiveModal,
  handleKeyDown,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal__opened" : ""}`}
      onClick={() => {
        closeActiveModal();
      }}
    >
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={() => {
            closeActiveModal();
          }}
          onKeyDown={handleKeyDown}
          type="button"
          className="modal__close modal__close_dark"
        ></button>
        <form action="" className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {" "}
            {buttonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
