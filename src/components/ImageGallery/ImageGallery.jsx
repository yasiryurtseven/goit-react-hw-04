import ImageCard from "../ImageCard/ImageCard.jsx"
import css from "./ImageGallery.module.css"

function ImageGallery( { images } ) {
    return (
        <ul className={css.ImageGallery}>
            {images.map ((image) => (
                <li key={image.id} className={css.ImageGalleryItem}>
                    <ImageCard image={image} />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;