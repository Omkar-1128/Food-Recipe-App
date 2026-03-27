import React, { useContext } from "react";
import Nav from "../../Navbar/Nav";
import "./Root.css";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";

function Root() {
  const contextInfo = useContext(AppContext);

  function handleCurrItem(item) {
    contextInfo.setCurrItem(item);
    console.log(item);
  }

  function isFav(item) {
    return contextInfo.favData?.data?.recipes?.some(
      (favItem) => favItem.id === item.id,
    );
  }

  function handleFavouriteData(item) {
    if (isFav(item)) {
      const newArray = contextInfo.favData.data.recipes.filter(
        (dataItem) => item.id !== dataItem.id,
      );

      const newData = {
        data: {
          recipes: newArray,
        },
      };

      contextInfo.setFavData(newData);
    } else {
      const oldFavData = contextInfo.favData.data.recipes
        ? contextInfo.favData.data.recipes
        : null;
      const newArray = [...oldFavData, item];

      contextInfo.setFavData({
        data: {
          recipes: newArray,
        },
      });
    }
  }

  return (
    <div className="Root-Container">
      <Nav />
      {contextInfo.Loading ? (
        <h1 className="Root-Heading">Loading Please Wait...</h1>
      ) : contextInfo.flag ? (
        <h1 className="Root-Heading">
          Nothing To Show, Please Search Something
        </h1>
      ) : (
        contextInfo.data &&
        contextInfo.data.data.recipes &&
        contextInfo.data.data.recipes.length && (
          <div className="cards">
            {contextInfo.data.data.recipes.map((item, idx) => {
              return (
                <div className="card" key={idx} style={{ width: "18rem" }}>
                  <img
                    src={item.image_url}
                    className="card-img-top cardImage"
                    alt="Item Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {/* <p className="card-text">publisher: {item.publisher}</p> */}

                    <div className="card-actions">
                      <Link
                        onClick={() => handleCurrItem(item)}
                        to="/detail"
                        className="btn RecipeButton"
                      >
                        View Recipe
                      </Link>
                      <i
                        className={`fa-heart favorite-icon ${
                          isFav(item) ? "fa-solid active" : "fa-regular"
                        }`}
                        onClick={() => handleFavouriteData(item)}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

export default Root;
