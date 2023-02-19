import React from "react";
import { MdLocationOn, MdSearch, MdCategory } from "react-icons/md";
import { FaHome, FaRupeeSign } from "react-icons/fa";
import { useFilterContext } from "../../Context/Filter_Context";
import { Link } from "react-router-dom";

const Search = () => {
  const { all_products, updateFilterValue } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = [];

    data.forEach((curElem) => {
      newVal = newVal.concat(curElem[property]);
    });

    return [...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(all_products, "Category");
  const cityOnlyData = getUniqueData(all_products, "city");
  const propertyOnlyData = getUniqueData(all_products, "property_type");

  return (
    <>
      <div className="bodys d-flex flex-column">
      
        <div className="welcome-marble d-flex justify-content-center gap-3 text-white">
          <h1 className="welcome font-weight-light">WELCOME TO</h1>
          <h1 className="marble"> MARBLEGRAM</h1>
        </div>

        <div className="search d-flex justify-content-center">
        {/* <div className="d-flex align-items-center"> */}
          <div className="d-flex">
            <div className="mx-2">
              <MdLocationOn />
            </div>
            <div>
              <select
                className="property text-muted"
                placeholder="op"
                onChange={updateFilterValue}
                name="city"
                id="mySelect1"
              >
                <option
                  className=""
                  style={{ display: "none" }}
                  value="default"
                >
                  Enter City, Locaity
                </option>
                {cityOnlyData.map((curElem, index) => {
                  return (
                    <option
                      key={index}
                      type="button"
                      name="city"
                      value={curElem}
                    >
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="d-flex">
            <div className="mx-2">
              <FaHome />
            </div>
            <div className="propdiv ">
              <select
                className="property text-muted"
                placeholder="op"
                onChange={updateFilterValue}
                name="property_type"
                id="mySelect2"
              >
                <option
                  className=""
                  style={{ display: "none" }}
                  value="default"
                >
                  Property Type
                </option>
                {propertyOnlyData.map((curElem, index) => {
                  return (
                    <option
                      key={index}
                      type="button"
                      name="property_type"
                      value={curElem}
                    >
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="d-flex">
            <div className="mx-2">
              <MdCategory />
            </div>
            <div>
              <select
                className="category text-muted"
                onChange={updateFilterValue}
                name="Category"
                id="mySelect3"
              >
                <option style={{ display: "none" }} value="default">
                  Category
                </option>
                {categoryOnlyData.map((curElem, index) => {
                  return (
                    <option
                      key={index}
                      type="button"
                      name="Category"
                      value={curElem}
                    >
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="d-flex">
            <div className="mx-2">
              <FaRupeeSign />
            </div>
            <div>
              <select
                className="budget text-muted"
                name="price"
                onChange={updateFilterValue}
                id="mySelect4"
              >
                <optgroup label="Max. Price">
                  <option style={{ display: "none" }} value="default">
                    Budget
                  </option>
                  <option value="1">1200</option>
                  <option>1400</option>
                  <option>1600</option>
                  <option>1800</option>
                  <option>2000</option>
                  <option>2200</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="d-flex mx-2">
            <Link to="/products">
              <button type="button" className="sbtn d-flex btn text-white">
                <div className="me-2 my-1">
                  <MdSearch />
                </div>
                <div className="me-1 my-1">Search</div>
              </button>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Search;
