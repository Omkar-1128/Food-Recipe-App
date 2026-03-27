import React, { useEffect } from "react";
import "./Nav.css"
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Search() {
    const { setLoading , query, setQuery , setData , setFlag } = useContext(AppContext);
    // api -> https://forkify-api.jonas.io/api/v2/recipes?search={Search-Query}

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${query}`);
            const jsonRes = await res.json();
            console.log(jsonRes);
            setData(jsonRes);
            setLoading(false);
        } catch(e) {
            setLoading(false);
            console.log("Error Occured: " + e);
        }
    }

    useEffect(() => {
      if(query.length == 0) {
        // setFlag(true);
      } else {
        setFlag(false);
      }
    } , [query , setFlag])

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control me-2 searchInput"
          type="search"
          placeholder="Search With Item Name..."
          aria-label="Search"
          onChange={(e) => {setQuery(e.target.value)}}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
