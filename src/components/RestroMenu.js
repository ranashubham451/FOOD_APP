import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";
import { RestrorentCategories } from "./RestrorentCategories";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  const [showIndex, setshowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const restaurantCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

  const menuCard = resInfo?.cards?.find((card) =>
    card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
      (c) => c?.card?.card?.itemCards
    )
  );

  const itemCards =
    menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  const categories = menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <div className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-orange-500">{name}</h1>
        <p className="text-gray-600 mt-2">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>

      {/*  Categaries Accodian  */}
      {
        categories.map((category, index) => <RestrorentCategories key={category?.card?.card?.title} data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setshowIndex={()=>setshowIndex(index)} />)
      }
    </div>
  );
}
