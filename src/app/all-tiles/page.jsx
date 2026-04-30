import TileCard from "@/components/TileCard";

const AllTilesPage = async () => {

    const res = await fetch('https://tiles-gallery-zabedfolio.vercel.app/data/products.json')
    const data = await res.json();
    // console.log(data,"data")

    return (
        <div className='container mx-auto mt-10'>


            <div className="sticky top-0 z-50 bg-white">
                <div className="container mx-auto px-4 py-4">
                    <input
                        type="text"
                        placeholder="Search tiles..."
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                    />
                </div>
            </div>

            <h1 className="text-center font-bold text-4xl">All Tiles</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto mt-10'>
                {
                    data.map(tile =>
                        <TileCard key={tile.id} tile={tile}></TileCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllTilesPage;