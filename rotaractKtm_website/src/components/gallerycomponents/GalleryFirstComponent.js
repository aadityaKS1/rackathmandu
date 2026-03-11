import React from 'react'
import galleryImage from '../../assets/gallery.png'
function GalleryFirstComponent() {
  return (
    <section
      className="h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${galleryImage})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Our Gallery</h1>
      </div>
    </section>
  )
}

export default GalleryFirstComponent