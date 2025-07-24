import { CDN_LINK } from "../utils/constant";

const RestroCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
  } = resData.info||{};

  return (
    <div className="w-80 bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-orange-300">
      <img
        className="w-full h-48 object-cover"
        src={CDN_LINK + cloudinaryImageId}
        alt={name}
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 truncate">{name}</h2>

        <p className="flex items-center text-sm text-yellow-600 font-medium mb-1">
          <img
            src="https://media.lordicon.com/icons/wired/lineal/237-star-rating.svg"
            alt="rating"
            className="w-4 h-4 mr-1"
          />
          {avgRating} Stars
        </p>

        <p className="text-gray-600 text-sm mb-1 truncate">
          {cuisines.join(", ")}
        </p>

        <p className="text-gray-700 text-sm">{sla?.deliveryTime} mins</p>
      </div>
    </div>
  );
};


//Higher Order Function

//input -Restrocard ---> Restrocard Promoted


export default RestroCard;
