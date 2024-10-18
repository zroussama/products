import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Qasr Zouina General Trade</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Moroccan Products"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg mb-4">
            Founded in October 2024, Qasr Zouina General Trade is a young and ambitious company dedicated to bringing the best of Morocco to the United Arab Emirates. Our focus is on providing high-quality, traditional Moroccan products to our discerning customers in Dubai and beyond.
          </p>
          <p className="text-lg mb-4">
            We started with a passion for Moroccan culture and a vision to share its rich heritage with the world. Our initial product line features the renowned Flamingo traditional soaps, known for their natural ingredients and skin-nourishing properties.
          </p>
          <p className="text-lg">
            As we grow, we plan to expand our offerings to include a wide range of Moroccan goods and eventually source products from other parts of the world, always maintaining our commitment to quality and authenticity.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At Qasr Zouina General Trade, our mission is to:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Provide authentic, high-quality Moroccan products to our customers in the UAE</li>
          <li>Promote Moroccan culture and traditions through our product offerings</li>
          <li>Offer exceptional customer service and build lasting relationships with our clients</li>
          <li>Continuously expand our product range to meet the diverse needs of our customers</li>
          <li>Support sustainable and ethical business practices in all our operations</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
        <p className="text-lg mb-4">
          As we embark on this exciting journey, we look forward to:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Expanding our product line to include more Moroccan specialties</li>
          <li>Introducing products from other countries, starting with Turkey</li>
          <li>Establishing partnerships with local businesses and artisans</li>
          <li>Creating a strong distribution network across the UAE</li>
          <li>Developing an e-commerce platform for easier access to our products</li>
        </ul>
      </div>
    </div>
  );
}