import { useState, useEffect } from 'react';
import { Trash2, Edit, Star, StarOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ImageUpload from './ImageUpload';
import type { PortfolioImage } from '@/types/portfolio';

const AdminPanel = () => {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast({
        title: "Error",
        description: "Failed to load images",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('portfolio_images')
        .update({ is_featured: !currentFeatured })
        .eq('id', id);

      if (error) throw error;

      setImages(prev => 
        prev.map(img => 
          img.id === id ? { ...img, is_featured: !currentFeatured } : img
        )
      );

      toast({
        title: "Success",
        description: `Image ${!currentFeatured ? 'featured' : 'unfeatured'}`,
      });
    } catch (error) {
      console.error('Error updating featured status:', error);
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive",
      });
    }
  };

  const deleteImage = async (id: string, imagePath: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('portfolio')
        .remove([imagePath]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('portfolio_images')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      setImages(prev => prev.filter(img => img.id !== id));

      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Admin</h1>
          <p className="text-muted-foreground">Manage your portfolio images</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Upload New Image</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUpload onUploadComplete={fetchImages} />
            </CardContent>
          </Card>

          {/* Images List */}
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Images ({images.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {images.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No images uploaded yet
                  </p>
                ) : (
                  images.map((image) => (
                    <div
                      key={image.id}
                      className="flex items-center space-x-4 p-4 border border-border rounded-lg"
                    >
                      <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {image.title}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{image.category}</Badge>
                          {image.is_featured && (
                            <Badge variant="default">Featured</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFeatured(image.id, image.is_featured)}
                        >
                          {image.is_featured ? (
                            <StarOff className="h-4 w-4" />
                          ) : (
                            <Star className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteImage(image.id, image.image_path)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;