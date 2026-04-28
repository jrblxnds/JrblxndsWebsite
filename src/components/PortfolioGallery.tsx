import { motion } from "motion/react";

const GALLERY_IMAGES = [
  { id: 1, src: "https://i.postimg.cc/nhf5tz2w/8389E7A0-F355-481A-8E53-4448B21BD6E8.png", alt: "Barber Work 1" },
  { id: 2, src: "https://i.postimg.cc/L6kd5LJP/6D7EF008-D459-4C4B-BE94-2C5A8030A009.png", alt: "Barber Work 2" },
  { id: 3, src: "https://i.postimg.cc/Hs626kKJ/F76D0225-A298-4E10-9F31-3B257D39FC4F.png", alt: "Barber Work 3" },
  { id: 4, src: "https://i.postimg.cc/4y6JXMCJ/0E73EE48-2DAC-4861-8128-D047343C90CF.png", alt: "Barber Work 4" },
  { id: 5, src: "https://i.postimg.cc/BbX6sNS2/21DED3F5-7359-4B1D-A951-7E6F50EA4424.png", alt: "Barber Work 5" },
  { id: 6, src: "https://i.postimg.cc/bY9cN1Dp/081D6B82-FD30-4EC3-9C7E-0E04CF0C14AD.png", alt: "Barber Work 6" },
];

export default function PortfolioGallery() {
  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">My Work</h2>
          <div className="h-1 w-24 bg-red-600 mb-8" />
          <p className="text-gray-400 max-w-md text-lg">
            A showcase of precision cuts and premium grooming. Custom styles tailored to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-square relative overflow-hidden group border border-white/5"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* 
                REPLACE PHOTOS HERE:
                Change the 'src' in the GALLERY_IMAGES array at the top of this file 
                to your own photo file paths or image URLs.
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
