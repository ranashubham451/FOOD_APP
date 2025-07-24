import React, { useState } from 'react';
import { ItemList } from './ItemList';

export const RestrorentCategories = ({ data,showItems,setshowIndex }) => {
    // console.log(data);
   const handleClick=()=>{
    setshowIndex();
   }
   
    return (
        <div>
     {/* Acodian Header */}
    <div className='w-6/12 mx-auto  my-4 -bg-grey-50 shadow-lg p-4 '>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
         {/* Acodian Body */}
       {showItems && <ItemList items={data.itemCards}/>}
        
    </div>
      
     
</div>
    )
}
