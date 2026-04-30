import React from 'react';

const TopTiles = async() => {
    const res = await fetch('https://tiles-gallery-zabedfolio.vercel.app/data/products.json')
    const data = await res.json();
    console.log(data,"data");
    return (
        <div>
            
        </div>
    );
};

export default TopTiles;