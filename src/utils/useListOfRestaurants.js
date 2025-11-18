import { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9939595&lng=80.1706653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    let restaurants = [];
    json?.data?.cards.forEach((card) => {
      const resList =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (resList) {
        restaurants = restaurants.concat(resList);
      }
    });

    // ✅ remove duplicates by restaurant id
    const uniqueRestaurants = Array.from(
      new Map(restaurants.map((r) => [r.info.id, r])).values()
    );

    setListOfRestaurants(uniqueRestaurants);
    setFilteredRestaurant(uniqueRestaurants);
  }
  return {
    listOfRestaurants,
    filteredRestaurant,
    searchText,
    setSearchText,
    setFilteredRestaurant,
  };
}

export default useListOfRestaurants;