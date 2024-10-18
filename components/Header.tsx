import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Qasr Zouina
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-accent-foreground transition-colors">Home</Link>
          <Link href="/products" className="hover:text-accent-foreground transition-colors">Products</Link>
          <Link href="/about" className="hover:text-accent-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-accent-foreground transition-colors">Contact</Link>
          <Link href="/become-distributor" className="hover:text-accent-foreground transition-colors">Become a Distributor</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/products">
            <Button variant="secondary" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through our website
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="text-foreground hover:text-accent transition-colors">Home</Link>
                <Link href="/products" className="text-foreground hover:text-accent transition-colors">Products</Link>
                <Link href="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
                <Link href="/contact" className="text-foreground hover:text-accent transition-colors">Contact</Link>
                <Link href="/become-distributor" className="text-foreground hover:text-accent transition-colors">Become a Distributor</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;