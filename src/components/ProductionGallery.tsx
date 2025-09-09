import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Eye, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ProductionImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  order_index: number;
}

interface ProductionGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  productionTitle: string;
  productionType: string;
  productionYear: string;
  productionCompany: string;
  productionLocation: string;
  productionDescription: string;
}

const ProductionGallery = ({
  isOpen,
  onClose,
  productionTitle,
  productionType,
  productionYear,
  productionCompany,
  productionLocation,
  productionDescription,
}: ProductionGalleryProps) => {
  const [images, setImages] = useState<ProductionImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isOpen && productionTitle) {
      fetchProductionImages();
    }
  }, [isOpen, productionTitle]);

  const fetchProductionImages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .eq('production_title', productionTitle)
        .order('order_index', { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching production images:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      {/* Main Gallery Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-cinematic text-foreground">
              {productionTitle}
            </DialogTitle>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                {productionType}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {productionYear}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {productionLocation}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-3">
              {productionDescription}
            </p>
            <p className="text-primary font-medium mt-1">{productionCompany}</p>
          </DialogHeader>

          <div className="flex-1 p-6 pt-4">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : images.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-y-auto">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:shadow-dramatic transition-dramatic"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium truncate">
                        {image.title}
                      </p>
                      {image.description && (
                        <p className="text-white/80 text-xs truncate">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No Images Available
                </h3>
                <p className="text-muted-foreground">
                  Images for this production will be added soon.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-none w-screen h-screen p-0 bg-black/95">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Main Image */}
            {images[currentImageIndex] && (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={images[currentImageIndex].image_url}
                  alt={images[currentImageIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}

            {/* Image Info */}
            {images[currentImageIndex] && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-lg font-medium mb-1">
                  {images[currentImageIndex].title}
                </h3>
                {images[currentImageIndex].description && (
                  <p className="text-white/80 text-sm">
                    {images[currentImageIndex].description}
                  </p>
                )}
                {images.length > 1 && (
                  <p className="text-white/60 text-xs mt-2">
                    {currentImageIndex + 1} of {images.length}
                  </p>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductionGallery;