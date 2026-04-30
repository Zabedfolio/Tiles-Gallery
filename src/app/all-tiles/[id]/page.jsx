import Image from "next/image";

const TilesDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - IMAGE SECTION */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800"
                alt="tile"
                width={600}
                height={600}
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Thumbnails (static) */}
            <div className="flex gap-4 mt-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-24 h-24 rounded-xl overflow-hidden border cursor-pointer hover:scale-105 transition"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=200"
                    alt="thumb"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - DETAILS SECTION */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
              Marble Tile
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              White Marble Elegance Tile
            </h1>

            {/* Price */}
            <p className="text-2xl font-semibold text-black mb-4">
              $89.50
            </p>

            {/* Stock */}
            <span className="inline-block w-fit px-4 py-1 rounded-full text-sm bg-green-100 text-green-600 mb-6">
              In Stock
            </span>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Premium white marble tile with natural vein texture. Perfect for
              luxury interiors, kitchens, and bathroom designs with a modern
              aesthetic.
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="font-semibold">60x60 cm</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Material</p>
                <p className="font-semibold">Marble</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold">Luxury</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Finish</p>
                <p className="font-semibold">Glossy</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                Add to Cart
              </button>

              <button className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-gray-600 leading-relaxed">
            This tile is crafted using high-quality marble, ensuring durability
            and elegance. Ideal for both residential and commercial use, it
            enhances spaces with its timeless design and premium finish.
          </div>
        </div>

      </div>
    </div>
  );
};

export default TilesDetailsPage;