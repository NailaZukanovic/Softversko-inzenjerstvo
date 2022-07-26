import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const Modal = (props) => {
  const dispatch = useDispatch();
  const modalContent = useSelector(state => state.modalContent);

  useEffect(() => {
    if (modalContent) {
      document.body.classList.add("modal-opened"); // js
    } else {
      document.body.classList.remove("modal-opened"); // js
    }
  }, [modalContent]);

  return (
    <div className="modal-overlay">
      <div className="modal-panel">
        <div className="close" onClick={(e) => {
          dispatch({
            type: 'MODAL_CLOSE'
          })
        }}>&times;</div>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
