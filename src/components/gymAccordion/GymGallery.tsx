import { MoveRight } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  title: string;
  description: string;
  image: string;
  overlay?: string;
  visitLink?: boolean;
}

interface GymGalleryProps {
  items: GalleryItem[];
}

const GymGallery = ({ items }: GymGalleryProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 font-montserrat">
      {items.map((item: GalleryItem, index: number) => (
        <div key={index}>
          {/* Image */}
          <div className="relative group mb-6 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={256}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.overlay && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h3 className="text-white text-center text-xl md:text-2xl font-bold tracking-wider uppercase">
                  {item.overlay}
                </h3>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-wide">{item.title}</h2>

            <p className="text-sm md:text-base leading-relaxed">
              {item.description}
            </p>

            {item.visitLink && (
              <div className="pt-2 group inline-block">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://wa.me/+919145379014?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(
                    item.title
                  )}`}
                  className="flex items-center font-medium"
                >
                  <span className="mr-2 uppercase text-sm">Learn More</span>
                  <MoveRight className="h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GymGallery;
