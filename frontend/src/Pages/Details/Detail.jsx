import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Details.css";
import Nav from "../../Navbar/Nav";

function Detail() {
  const { currItem, Loading, setLoading } = useContext(AppContext);
  const [itemDetails, setItemDetails] = useState(null);
  async function getCurrItemDetails() {
    try {
      setLoading(true);

      const res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes/${currItem.id}`,
      );
      const jsonRes = await res.json();
      setItemDetails(jsonRes);
      console.log(jsonRes.data.recipe);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error Ocured: " + e);
    }
  }

  useEffect(() => {
    if (currItem) {
      (() => getCurrItemDetails())();
    }
  }, [currItem]);

  return (
    <div>
      <Nav />
      <div className="RecipeContainer">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="ItemImageCol">
                <img
                  className="ItemImage"
                  src={currItem.image_url}
                  alt="Image"
                />
                {/* <p>Publisher: {currItem.publisher}</p> */}
              </div>
            </div>
            <div className="col-7">
              <div className="Recipe">
                <p className="Recipe-Title">{currItem.title}</p>
                <p className="Recipe-Pub">~ {currItem.publisher}</p>
                <button className="Fav-Btn">Add to Favourite</button>

                <p className="Recipe-Ing">Ingredients:</p>
                {currItem && itemDetails && itemDetails.data.recipe.ingredients.map((ing, idx) => {
                  return (
                    <div key={idx}>
                      <p className="recipe-Content">
                        {ing.quantity} {ing.unit} of {ing.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
