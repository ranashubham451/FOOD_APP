import React, { useEffect, useState,useContext } from "react";
import RestroCard from "./RestroCard";
import withPromotedLabel from "./withPromotedLabel"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted=withPromotedLabel(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    const restaurantList = json.data.cards.find(
      (cardObj) =>
        cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card.card.gridElements.infoWithStyle.restaurants;

    if (restaurantList) {
      setListOfRestaurant(restaurantList);
      setFilterData(restaurantList);
    }
  };


  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return (
      <h1 className="text-center text-red-600 font-bold text-xl mt-10">
        You're Offline! Please Check Your Internet Connection.
      </h1>
    );
  }
const {loggedInUser,setUserName}=useContext(UserContext);
  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-8 py-6 bg-gray-50 min-h-screen">
      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <button
          className="bg-[#FC8019] hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-[#FC8019] hover:bg-orange-600 text-white px-4 py-2 rounded-md transition"
            onClick={() => {
              const filtered = filterData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* // Curret  data kaise change kare Uska Logic
      //  */}
      {/* <div className="search m-4 p-4 flex items-center">
        <label>
          UserName
        </label>
        <input className="border border-black p-2"
        type="text"
        value={loggedInUser}
         onChange={(e)=>{
              setUserName(e.target.value)
        }}/>
      </div> */}

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
{ListOfRestaurant.map((restaurant) => {
  // console.log(restaurant.info.name, restaurant.info.promoted);
  restaurant.info.promoted=true;

  return (
    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
      {restaurant.info.promoted
        ? <RestaurantCardPromoted resData={restaurant} />
        : <RestroCard resData={restaurant} />}
    </Link>
  );
})}
</div>

    </div>
  );
};

export default Body;
