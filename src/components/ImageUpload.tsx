import { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useImageUpload } from '@/hooks/useImageUpload';

interface ImageUploadProps {
  onUploadComplete?: () => void;
}

const ImageUpload = ({ onUploadComplete }: ImageUploadProps) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('general');
  const [isFeatured, setIsFeatured] = useState(false);

  const { uploadImage, uploading } = useImageUpload();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      setSelectedFile(imageFile);
      setPreview(URL.createObjectURL(imageFile));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim()) return;

    try {
      await uploadImage(selectedFile, {
        title: title.trim(),
        description: description.trim() || undefined,
        category,
        is_featured: isFeatured,
      });

      // Reset form
      setSelectedFile(null);
      setPreview(null);
      setTitle('');
      setDescription('');
      setCategory('general');
      setIsFeatured(false);

      onUploadComplete?.();
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragOver
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
      >
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-64 mx-auto rounded-lg"
            />
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={clearSelection}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium">Drop your image here</p>
              <p className="text-muted-foreground">or click to browse files</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <Button asChild variant="outline">
              <label htmlFor="file-upload" className="cursor-pointer">
                <ImageIcon className="h-4 w-4 mr-2" />
                Choose Image
              </label>
            </Button>
          </div>
        )}
      </div>

      {/* Form Fields */}
      {selectedFile && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter image title"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter image description (optional)"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="theater">Theater</SelectItem>
                <SelectItem value="film">Film</SelectItem>
                <SelectItem value="headshots">Headshots</SelectItem>
                <SelectItem value="behind-scenes">Behind the Scenes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={isFeatured}
              onCheckedChange={setIsFeatured}
            />
            <Label htmlFor="featured">Featured Image</Label>
          </div>

          <Button
            onClick={handleUpload}
            disabled={uploading || !title.trim()}
            className="w-full"
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;