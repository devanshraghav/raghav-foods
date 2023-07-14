import ResShimmer from "./ResShimmer";

const RestaurantShimmer = () => {
  return (
    <div className="m-8 flex flex-wrap">
      {/* creating random array */}
      {Array(10)
        .fill("")
        .map((e,index) => (
          <ResShimmer key={index}/>
        ))}
    </div>
  );
};

export default RestaurantShimmer;
