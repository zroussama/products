import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BecomeDistributorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Become a Distributor</h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-8">
          Join our network of distributors and bring the finest Moroccan products to your customers. Fill out the form below to start your journey with Qasr Zouina General Trade.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </div>
          <Input type="email" placeholder="Email Address" />
          <Input type="tel" placeholder="Phone Number" />
          <Input type="text" placeholder="Company Name" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Business Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retail">Retail Store</SelectItem>
              <SelectItem value="wholesale">Wholesale</SelectItem>
              <SelectItem value="online">Online Store</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="Country" />
          <Textarea placeholder="Tell us about your business and why you're interested in becoming a distributor" rows={5} />
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </div>
    </div>
  );
}