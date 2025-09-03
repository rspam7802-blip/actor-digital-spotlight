import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const uploadImage = async (file: File, metadata: {
    title: string;
    description?: string;
    category: string;
    is_featured?: boolean;
  }) => {
    try {
      setUploading(true);

      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `portfolio/${fileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('portfolio')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio')
        .getPublicUrl(filePath);

      // Insert metadata into database
      const { data, error: dbError } = await supabase
        .from('portfolio_images')
        .insert({
          title: metadata.title,
          description: metadata.description,
          image_url: publicUrl,
          image_path: filePath,
          category: metadata.category,
          is_featured: metadata.is_featured || false,
        })
        .select()
        .single();

      if (dbError) throw dbError;

      toast({
        title: "Success",
        description: "Image uploaded successfully!",
      });

      return data;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (id: string, imagePath: string) => {
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

      toast({
        title: "Success",
        description: "Image deleted successfully!",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return {
    uploadImage,
    deleteImage,
    uploading
  };
};