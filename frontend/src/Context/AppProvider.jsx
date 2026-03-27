import { useState } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [flag, setFlag] = useState(true);
  const [currItem, setCurrItem] = useState({ title: "Lightning Ace" });
  const [favData, setFavData] = useState({
    data: {
      recipes: [
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/100111309d9.jpg",
          title: "Double Crust Stuffed Pizza",
          id: "664c8f193e7aa067e94e8297",
        },
        {
          publisher: "What's Gaby Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/PepperoniPizzaMonkeyBread8cd5.jpg",
          title: "Pepperoni Pizza Monkey Bread",
          id: "664c8f193e7aa067e94e8433",
        },
        {
          publisher: "Real Simple",
          image_url:
            "http://forkify-api.herokuapp.com/images/strawberryicecream_3003cf12bb8.jpg",
          title: "Strawberry Ice Cream Cake",
          id: "664c8f193e7aa067e94e85aa",
        },
      ],
    },
  });
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        query,
        favData,
        setFavData,
        setQuery,
        currItem,
        setCurrItem,
        flag,
        setFlag,
        Loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
