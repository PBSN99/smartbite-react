import {CDN_URL} from "../utils/constants";
const RestroCard = ({resData}) => {
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
  } = resData?.info;

  return (
    <div className="m-3 p-3 w-[185px] bg-amber-100 rounded-lg hover:bg-amber-200">
      <img
        className="rounded-sm"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-md">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestroCard;