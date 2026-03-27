import React, { useEffect } from "react";
import Nav from "../../Navbar/Nav";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../Home/Root.css"
import "./fav.css"

function Fav() {

  const contextInfo = useContext(AppContext);
  
    function handleCurrItem(item) {
      contextInfo.setCurrItem(item);
      console.log(item);
      
    }

    function handleFavItem(item) {
      // const data = contextInfo.setFavData;
      const newArray = contextInfo.favData.data.recipes.filter((dataItem) => item.id !== dataItem.id);

      const newData = {
        data: {
          recipes: newArray
        }
      }

      contextInfo.setFavData(newData);
    }

    useEffect(() => {
      console.log(contextInfo.favData);
      
    } , [contextInfo.favData])

  return (
    <div className="Root-Container Fav-Container">
      <Nav />
      {
        contextInfo.favData &&
        contextInfo.favData.data.recipes &&
        contextInfo.favData.data.recipes.length && (
          <div className="cards">
            {contextInfo.favData.data.recipes.map((item, idx) => {
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
                      <Link onClick={() => handleCurrItem(item)} to="/detail" className="btn RecipeButton">
                        View Recipe
                      </Link>
                      <i onClick={() => handleFavItem(item)} className="fa-solid fa-trash favorite-icon favorite-icon-color"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      }
    </div>
  );
}

export default Fav;
