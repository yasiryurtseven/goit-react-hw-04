import { useContext } from "react";
import { imageContext } from "../../imageContext.js";
import css from "./ImageCard.module.css"

function ImageCard( { image }) {
    const { handleImageClick } = useContext(imageContext);

    return (
        <div onClick={() => handleImageClick(image)} className={css.ImageCard}>
            <img 
            src= {image.urls.small}
            alt={image.alt_description}
            />
        </div>
    )
}
export default ImageCard; 