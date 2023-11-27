const Modal = ({ isOpenModal, closeModal, modalContent }) => {
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) {
          closeModal();
        }
      };

  return (
    <div onClick={handleOutsideClick} className={`modal ${isOpenModal ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 z-50 sm:my-12 sm:mx-5 md:my-16 md:mx-7`}>
      <div className="modal-content bg-[#232a3f] opacity-90 w-full h-full lg:w-3/5 lg:h-4/5 mx-auto rounded-lg lg:mt-20 p-10 overflow-y-auto">
        <button onClick={closeModal} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 px-2 rounded-md hover:from-pink-600 hover:to-orange-500 float-right">X</button>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;