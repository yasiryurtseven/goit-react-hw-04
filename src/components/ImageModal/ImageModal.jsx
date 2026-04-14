import Modal from "react-modal";
import css from "./ImageModal.module.css"

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image}) => {
    if (!image) return null;

    return (
        <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // ESC veya dışarı tıklayınca kapanması için
      contentLabel="Image Modal"
      overlayClassName={css.Overlay}
      className={css.Modal}
    >
      <div >
        <img 
        className={css.ModalImage}
        src={image.urls.regular} 
        alt={image.alt_description}/>
        <div className={css.ModalInfo}>
        <p>{image.description || "No description available"}</p>
        <p>Author: {image.user.name}</p>
        </div>
        
      </div>
    </Modal>
  );
    
}

export default ImageModal;