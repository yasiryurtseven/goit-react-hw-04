import { useState, useEffect} from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import SearchBar from "./components/SearchBar/Searchbar.jsx"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx"
import Loader from "./components/Loader/Loader.jsx"
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import { fetchImages } from './api.js';
import { imageContext } from './imageContext.js';
import css from "./App.module.css"

function App() {
  const [query, setQuery] = useState(""); // API'ye gidecek kesin kelime
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query === "") return;
    async function getImages() {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
      }
      catch (error) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page])


  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    // Burada ileride API isteğini tetikleyeceğiz
    setPage(1);
    setImages([]);
  };
  
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleShowModal = () => {
    setShowModal(false);
    setSelectedImage(null);

  }

  return (
    <imageContext.Provider value={{ handleImageClick}}>
      <div className={css.App}>
      <SearchBar onSubmit={handleSearch} />
      
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && !error && <LoadMoreBtn onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

    </div>

    <ImageModal
      isOpen={showModal}
      onClose={handleShowModal}
      image={selectedImage}
    />

    </imageContext.Provider>
    
  );
}

export default App;