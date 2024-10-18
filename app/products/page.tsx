import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Input type="text" placeholder="Search products..." />
        </div>
        <div className="w-full md:w-1/3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="bodycare">Body Care</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ProductList />

      <div className="mt-8 flex justify-center">
        <Button>Load More</Button>
      </div>
    </div>
  );
}