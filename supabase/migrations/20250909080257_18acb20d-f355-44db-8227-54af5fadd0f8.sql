-- Add production-specific columns to portfolio_images table
ALTER TABLE portfolio_images ADD COLUMN production_title TEXT;
ALTER TABLE portfolio_images ADD COLUMN production_type TEXT;

-- Create index for better performance when filtering by production
CREATE INDEX idx_portfolio_images_production ON portfolio_images(production_title, production_type);