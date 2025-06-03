import { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Галерея наших работ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImage(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={
                  galleryItems.find((item) => item.id === selectedImage)?.image
                }
                alt={
                  galleryItems.find((item) => item.id === selectedImage)?.title
                }
                className="w-full h-auto rounded-lg"
              />
              <div className="text-white mt-4">
                <h3 className="text-xl font-semibold">
                  {
                    galleryItems.find((item) => item.id === selectedImage)?.title
                  }
                </h3>
                <p className="mt-2">
                  {
                    galleryItems.find((item) => item.id === selectedImage)
                      ?.description
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}