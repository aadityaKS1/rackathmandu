import React from 'react'
import Navbar from '../components/navbar/Navbar'
import GalleryBanner from '../components/galleryComponents/galleryBanner';
import GallerySection from '../components/galleryComponents/GallerySection';
import Footer from '../components/footer/Footer';


const Gallery = () => {
    return (
        <div>
            <Navbar />
            <GalleryBanner />
            <GallerySection />
            <Footer />
        </div>
    )
}

export default Gallery
