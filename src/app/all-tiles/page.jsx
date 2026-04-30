import TileCard from "@/components/TileCard";

const AllTilesPage = async() => {

    const res = await fetch('https://tiles-gallery-zabedfolio.vercel.app/data/products.json')
    const data = await res.json();
    // console.log(data,"data")

    return (
        <div className='container mx-auto mt-10'>
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