import React, {useState, useCallback} from "react";
import useAxios from 'axios-hooks'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function Portfolio() {
    const [{ data, loading, error }] = useAxios(
        "/assets/data/images.json"
      );
      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setToggleViewer] = useState(false);
    
      const openLightbox = useCallback((event, { photo, index }) => {
        event.preventDefault();
        setCurrentImage(index);
        setToggleViewer(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setToggleViewer(false);
      };
    
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>
    
      const photos = data.data || [];
      if (photos.length === 0)
        return <p>Loading...</p>
    
       return (
        <div>
          <Gallery photos={photos} onClick={openLightbox}  />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
       );
}