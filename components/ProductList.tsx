import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    title: "Aker Fassi Collection",
    photo: "https://jardin-flamingo.com/cdn/shop/files/12345.jpg?v=1718800163&width=533",
    price: "د.إ.‏300.00AED",
    description: "Discover the luxurious Aker Fassi Collection, a perfect blend of traditional Moroccan beauty secrets and modern skincare. Enriched with rich oils and natural extracts, this collection rejuvenates your skin, leaving it radiant and youthful. Indulge in a full spa experience at home!"
  },
  {
    id: 2,
    title: "Argan Oil Collection",
    photo: "https://jardin-flamingo.com/cdn/shop/files/Untitled-3_ac771a44-5919-43d1-8ac0-571269073bc4.jpg?v=1718107845&width=533",
    price: "د.إ.‏250.00AED",
    description: "Elevate your skincare routine with our Argan Oil Collection. Packed with antioxidants and essential fatty acids, this collection deeply nourishes and hydrates your skin and hair. Experience the transformative power of argan oil for a healthier, more vibrant you!"
  },
  {
    id: 3,
    title: "Bath Salt",
    photo: "https://jardin-flamingo.com/cdn/shop/products/1-01_7e276b13-98f6-4fec-aa97-771ae0c3b820.jpg?v=1668748734&width=533",
    price: "د.إ.‏55.00AED",
    description: "Unwind after a long day with our rejuvenating Bath Salt. Infused with essential oils, it soothes tired muscles and promotes relaxation. Transform your bath into a tranquil retreat and emerge refreshed and revitalized."
  },
  {
    id: 4,
    title: "Body Lotion 500 ml",
    photo: "https://jardin-flamingo.com/cdn/shop/products/AkerFassi-01_57aaecdf-2d3a-4e6f-867e-4305d8a82e1e.jpg?v=1668489641&width=533",
    price: "د.إ.‏50.00AED",
    description: "Keep your skin soft and hydrated with our luxurious Body Lotion. Formulated with nourishing ingredients, it absorbs quickly and leaves your skin feeling silky smooth. Perfect for daily use, this lotion will become your skin’s best friend!"
  },
  {
    id: 5,
    title: "Body Wash 500ml",
    photo: "https://jardin-flamingo.com/cdn/shop/products/1-04-01_65d53eef-8072-4d1c-9f36-d70341c7a073.jpg?v=1664523234&width=533",
    price: "د.إ.‏50.00AED",
    description: "Refresh your senses with our invigorating Body Wash. This gentle formula cleanses and hydrates your skin, leaving it feeling fresh and rejuvenated. Elevate your shower experience with a burst of delightful fragrance!"
  },
  {
    id: 6,
    title: "Face Body Scrub 400g",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Mango-01.jpg?v=1660032874&width=533",
    price: "د.إ.‏45.00AED",
    description: "Reveal your skin’s natural glow with our Face Body Scrub. This exfoliating formula removes dead skin cells and impurities, promoting a smoother and brighter complexion. Pamper yourself with a spa-like treatment at home!"
  },
  {
    id: 7,
    title: "Face Mask 500g",
    photo: "https://jardin-flamingo.com/cdn/shop/products/akerfassi-01.jpg?v=1660028585&width=533",
    price: "د.إ.‏60.00AED",
    description: "Treat your skin to our revitalizing Face Mask. Designed to nourish and hydrate, this mask helps to reduce the appearance of fine lines and leaves your skin looking youthful and radiant. Perfect for a weekly pampering session!"
  },
  {
    id: 8,
    title: "Face Mud Mask 400g",
    photo: "https://jardin-flamingo.com/cdn/shop/files/ebsite-01.jpg?v=1699859680&width=533",
    price: "د.إ.‏40.00AED",
    description: "Experience the purifying benefits of our Face Mud Mask. Rich in minerals, it detoxifies and rejuvenates your skin, drawing out impurities while delivering essential nutrients. Achieve a fresh , glowing complexion effortlessly!"
  },
  {
    id: 9,
    title: "Fragrance Mist 250ml",
    photo: "https://jardin-flamingo.com/cdn/shop/products/WhatsAppImage2023-02-02at3.58.45PM_2.jpg?v=1678039534&width=533",
    price: "د.إ.‏50.00AED",
    description: "Surround yourself with the captivating scent of our Fragrance Mist. This refreshing spray uplifts and invigorates, perfect for a quick pick-me-up or as a finishing touch to your daily routine. Indulge in the essence of luxury!"
  },
  {
    id: 10,
    title: "Juicy Shampoo 450ML",
    photo: "https://jardin-flamingo.com/cdn/shop/files/shampoo.jpg?v=1718109321&width=533",
    price: "د.إ.‏49.00AED",
    description: "Give your hair the TLC it deserves with our nourishing Juicy Shampoo. Formulated with natural ingredients, it gently cleanses and moisturizes, leaving your locks soft, silky, and full of life!"
  },
  {
    id: 11,
    title: "Lip Scrub 50g",
    photo: "https://jardin-flamingo.com/cdn/shop/products/lipscrub-01.jpg?v=1664263211&width=533",
    price: "د.إ.‏65.00AED",
    description: "Treat your lips to our indulgent Lip Scrub. This gentle exfoliant removes dead skin cells, revealing smooth, soft lips that are perfect for kissing! Enjoy the sweet taste of pampering!"
  },
  {
    id: 12,
    title: "Magical Sparkling Powder for Foot Care",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Untitled-3ddddd.gif?v=1681375997&width=533",
    price: "د.إ.‏80.00AED",
    description: "Give your feet the royal treatment with our Magical Sparkling Powder. This luxurious formula gently exfoliates and nourishes, leaving your feet feeling soft, smooth, and pampered. Experience the magic of sparkling beauty!"
  },
  {
    id: 13,
    title: "Moisturizing Cream Rosy Foot Cracks Treatment (Aker Fassi & Vitamin C) 200g",
    photo: "https://jardin-flamingo.com/cdn/shop/products/12-01-01-01.jpg?v=1664262044&width=533",
    price: "د.إ.‏25.00AED",
    description: "Say goodbye to dry, cracked heels with our Moisturizing Cream. Enriched with Aker Fassi and Vitamin C, this rich formula deeply nourishes and hydrates, leaving your feet feeling soft, smooth, and revitalized. Perfect for daily use!"
  },
  {
    id: 14,
    title: "Moroccan Soap 500g",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Argan_oil-01.jpg?v=1661151949&width=533",
    price: "د.إ.‏45.00AED",
    description: "Experience the authentic charm of our Moroccan Soap. Handcrafted with love, this soap gently cleanses and nourishes your skin, leaving it feeling soft, smooth, and refreshed. A true Moroccan delight!"
  },
  {
    id: 15,
    title: "Moroccan Soap Liquid With Loofah 500ml",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Morocosoapliquid-01.jpg?v=1661150876&width=533",
    price: "د.إ.‏50.00AED",
    description: "Indulge in the luxurious experience of our Moroccan Soap Liquid With Loofah. This gentle, non-stripping formula cleanses and nourishes your skin, while the loofah exfoliates and smooths. Treat yourself to a spa-like experience at home!"
  },
  {
    id: 16,
    title: "Moroccan Sokla 500G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/AkerFassi-01_6f17f306-3983-402e-b231-e873de2526b5.jpg?v=1660030177&width=533",
    price: "د.إ.‏59.00AED",
    description: "Discover the ancient secrets of our Moroccan Sokla. This traditional formula deeply nourishes and hydrates your skin, leaving it feeling soft, smooth, and revitalized. Experience the authentic charm of Moroccan beauty!"
  },
  {
    id: 17,
    title: "Neela Blue Collection ",
    photo: "https://jardin-flamingo.com/cdn/shop/files/123456.jpg?v=1718800163&width=533",
    price: "د.إ.‏300.00AED",
    description: "Unveil the mystique of our Neela Blue Collection. Inspired by ancient traditions, this collection combines the finest ingredients to create a truly unique skincare experience. Indulge in the luxury of Neela Blue!"
  },
  {
    id: 18,
    title: "Neela Blue Powder 200G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Neela-01_16ee4255-f2a0-4572-a21d-bc41a9accc46.jpg?v=1660030542&width=533",
    price: "د.إ.‏35.00AED",
    description: "Experience the gentle, nourishing power of our Neela Blue Powder. This finely milled powder absorbs excess oil and impurities, leaving your skin feeling smooth, soft, and refreshed. Perfect for daily use!"
  },
  {
    id: 19,
    title: "Rose Water 250ml",
    photo: "https://jardin-flamingo.com/cdn/shop/products/1-04-02-01.jpg?v=1661147105&width=533",
    price: "",
    description: "Indulge in the soothing, calming benefits of our Rose Water. This gentle toner balances your skin’s pH, reduces inflammation, and leaves your skin feeling refreshed and revitalized. A true beauty essential!"
  },
  {
    id: 20,
    title: "Salt Scrub 800G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Argan-01_83115295-f60a-4402-a025-539ba0b4db77.jpg?v=1660027929&width=533",
    price: "د.إ.‏50.00AED",
    description: "Reveal your skin’s natural glow with our Salt Scrub. This gentle exfoliant removes dead skin cells and impurities, promoting a smoother and brighter complexion. Pamper yourself with a spa-like treatment at home!"
  },
  {
    id: 21,
    title: "Slim Gummy Sugar Scrub 600G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/3-01.png?v=1662613366&width=533",
    price: "د.إ.‏55.00AED",
    description: "Treat your skin to our indulgent Slim Gummy Sugar Scrub. This sweet treat gently exfoliates and nourishes, leaving your skin feeling soft, smooth, and pampered. Experience the delight of sugar scrubbing!"
  },
  {
    id: 22,
    title: "Sugar Scrub 600G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/ArganLavender-01_74b2d81c-4f45-4705-8e88-645692a9f592.jpg?v=1660022605&width=533",
    price: "د.إ.‏60.00AED",
    description: "Indulge in the luxurious experience of our Sugar Scrub. This gentle exfoliant removes dead skin cells and impurities, promoting a smoother and brighter complexion. Pamper yourself with a spa-like treatment at home!"
  },
  {
    id: 23,
    title: "Sultana Face Mask 500G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/1-01_a4d7966a-3415-478f-b6ec-93d7a423affc.jpg?v=1661496164&width=533",
    price: "د.إ.‏65.00AED",
    description: "Treat your skin to our revitalizing Sultana Face Mask. Designed to nourish and hydrate, this mask helps to reduce the appearance of fine lines and leaves your skin looking youthful and radiant. Perfect for a weekly pampering session!"
  },
  {
    id: 24,
    title: "Sultana Moroccan Sokla 500G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/Sokal-01.jpg?v=1661152151&width=533",
    price: "د.إ.‏60.00AED",
    description: "Experience the authentic charm of our Sultana Moroccan Sokla. This traditional formula deeply nourishes and hydrates your skin, leaving it feeling soft, smooth, and revitalized. Discover the secrets of Moroccan beauty!"
 },
  {
    id: 25,
    title: "Sultana Salt Scrub 800G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/1-01_bde7b60b-f4f5-454a-b34b-43aa4624bc79.jpg?v=1661155120&width=533",
    price: "د.إ.‏65.00AED",
    description: "Reveal your skin’s natural glow with our Sultana Salt Scrub. This gentle exfoliant removes dead skin cells and impurities, promoting a smoother and brighter complexion. Pamper yourself with a spa-like treatment at home!"
  },
  {
    id: 26,
    title: "Sultana Sugar Scrub 600G",
    photo: "https://jardin-flamingo.com/cdn/shop/products/1-01.jpg?v=1661153058&width=533",
    price: "د.إ.‏70.00AED",
    description: "Indulge in the luxurious experience of our Sultana Sugar Scrub. This gentle exfoliant removes dead skin cells and impurities, promoting a smoother and brighter complexion. Pamper yourself with a spa-like treatment at home!"
  },
  {
    id: 27,
    title: "The J Tan Oil 200ML",
    photo: "https://jardin-flamingo.com/cdn/shop/files/Untitled-1.png?v=1719297810&width=533",
    price: "د.إ.‏149.00AED",
    description: "Experience the transformative power of our The J Tan Oil. This luxurious formula deeply nourishes and hydrates your skin, leaving it feeling soft, smooth, and revitalized. Perfect for a weekly pampering session!"
  },
  {
    id: 28,
    title: "TWOPHASE CONDITIONER",
    photo: "https://jardin-flamingo.com/cdn/shop /files /1-05-05-01.jpg?v=1686308302&width=533",
    price: "د.إ.‏55.00AED",
    description: "Give your hair the TLC it deserves with our TWOPHASE CONDITIONER. This nourishing formula deeply moisturizes and repairs, leaving your locks soft, silky, and full of life!"
  }
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
          <CardContent className="p-4">
            <div className="moroccan-pattern p-2 rounded-lg mb-4">
              <Image
                src={product.photo}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-md transform transition-transform hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-primary">{product.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
            <p className="text-lg font-bold text-accent">{product.price}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;