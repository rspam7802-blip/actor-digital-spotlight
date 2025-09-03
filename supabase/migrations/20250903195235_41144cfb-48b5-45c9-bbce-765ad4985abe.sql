-- Create portfolio_images table
CREATE TABLE public.portfolio_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  image_path TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  order_index INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public viewing
CREATE POLICY "Portfolio images are viewable by everyone" 
ON public.portfolio_images 
FOR SELECT 
USING (true);

-- Create policies for admin management (will need auth later)
CREATE POLICY "Authenticated users can manage portfolio images" 
ON public.portfolio_images 
FOR ALL
USING (true)
WITH CHECK (true);

-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio', 'portfolio', true);

-- Create storage policies
CREATE POLICY "Portfolio images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can upload portfolio images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'portfolio');

CREATE POLICY "Anyone can update portfolio images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can delete portfolio images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'portfolio');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_portfolio_images_updated_at
BEFORE UPDATE ON public.portfolio_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();