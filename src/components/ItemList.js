import React, { useState } from 'react';
import { CDN_LINK } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export const ItemList = ({ items =[]}) => {
    const [addedIds, setAddedIds] = useState([]);
    const [isAdded, setIsAdded] = useState(false);


    const dispatch=useDispatch();


   const handleAddItem=(item)=>{
    // Dispact Action
    dispatch(addItem(item))
   }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            {items?.map((item) => {
                const info = item.card.info;
                const isAdded = addedIds.includes(info.id);

                return (
                    <div
                        key={info.id}
                        className="border p-4 mb-4 rounded-lg shadow-md bg-white flex justify-between items-center"
                    >
                        <div className="w-2/3">
                            <h2 className="text-lg font-bold">{info.name}</h2>
                            <p className="text-sm text-gray-600">{info.description}</p>
                            <p className="text-green-600 font-semibold mt-1">₹{info.price / 100}</p>
                        </div>

                        <div className="w-1/3 relative">
                            <img
                                src={CDN_LINK + info.imageId}
                                alt={info.name}
                                className="w-full h-24 object-cover rounded-md"
                            />
                            <button className="px-3 py-2 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 transition duration-200 shadow-md"
                             onClick={()=>handleAddItem(item)}
                            >
                                Add to Cart
                            </button>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};
