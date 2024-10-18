import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16 moroccan-border p-8 bg-secondary rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to Qasr Zouina General Trade</h1>
        <p className="text-xl mb-8 text-muted-foreground">Discover the Finest Moroccan Products in Dubai</p>
        <div className="flex justify-center space-x-4">
          <Link href="/products">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </Link>
          <Link href="https://wa.me/+971XXXXXXXXX">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="moroccan-pattern rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Moroccan Products"
            width={500}
            height={300}
            className="rounded-lg transform transition-transform hover:scale-105"
          />
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Story</h2>
          <p className="text-lg mb-4 text-card-foreground">
            Qasr Zouina General Trade is a new venture born in October 2024, bringing the essence of Morocco to Dubai. We specialize in importing and distributing high-quality Moroccan products, with a focus on traditional soaps and beauty items.
          </p>
          <p className="text-lg text-card-foreground">
            Our mission is to satisfy our clients in Dubai by providing authentic Moroccan goods and expanding our offerings to include products from around the world.
          </p>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add featured product cards here */}
        </div>
        <Link href="/products" className="mt-8 inline-block">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">View All Products</Button>
        </Link>
      </section>
    </div>
  );
}