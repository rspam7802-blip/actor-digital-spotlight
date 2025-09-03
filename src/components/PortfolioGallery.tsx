import { useState, useEffect } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import type { PortfolioImage } from '@/types/portfolio';

const PortfolioGallery = () => {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [featuredImages, setFeaturedImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;

      const allImages = data || [];
      setImages(allImages);
      setFeaturedImages(allImages.filter(img => img.is_featured));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Images */}
      {featuredImages.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-foreground">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-elegant transition-dramatic">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="space-y-2">
                        <h4 className="text-foreground font-medium">{image.title}</h4>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{image.category}</Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedImage(image)}
                            className="text-foreground hover:text-primary"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* All Images */}
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-foreground">Gallery</h3>
        {filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {filter === 'all' ? 'No images uploaded yet.' : `No images found in "${filter}" category.`}
            </p>
            <a href="/admin" className="text-primary hover:underline mt-2 inline-block">
              Upload images →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <Card key={image.id} className="group overflow-hidden hover:shadow-elegant transition-dramatic">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-foreground font-medium text-sm truncate">{image.title}</p>
                          <Badge variant="secondary" className="text-xs mt-1">{image.category}</Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedImage(image)}
                          className="text-foreground hover:text-primary p-1"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>{selectedImage.title}</span>
                  <Badge variant="outline">{selectedImage.category}</Badge>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.title}
                  className="w-full max-h-96 object-contain rounded-lg"
                />
                {selectedImage.description && (
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                )}
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedImage.image_url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Full Size
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioGallery;