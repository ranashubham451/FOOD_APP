import RestroCard from "./RestroCard";

const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded text-xs z-10">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default withPromotedLabel;
