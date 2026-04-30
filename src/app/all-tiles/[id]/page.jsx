import Image from "next/image";

const TilesDetailsPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch('https://tiles-gallery-zabedfolio.vercel.app/data/products.json');
  const data = await res.json();

  const tile = data.find(item => item.id === id);

  if (!tile) {
    return <p>Tile not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - IMAGE SECTION */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={tile.image}
                alt="tile"
                width={600}
                height={600}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT - DETAILS SECTION */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
              {tile.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tile.title}
            </h1>

            {/* Price */}
            <p className="text-2xl font-semibold text-black mb-4">
              ${tile.price}
            </p>

            {/* Stock */}
            <span className={`inline-block w-fit px-4 py-1 rounded-full text-sm mb-6 ${
              tile.inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}>
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </span>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {tile.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="font-semibold">{tile.dimensions}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Material</p>
                <p className="font-semibold">{tile.material}</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold">{tile.category}</p>
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
            {tile.description}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TilesDetailsPage;