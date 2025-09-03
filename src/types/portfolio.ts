export interface PortfolioImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  image_path: string;
  category: string;
  order_index: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}