/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./ProductList.css";
import styled from "styled-components";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import UpperAnnouncement from "../components/UpperAnnouncement";
import Footer from "../components/Footer";

//multi range slide comp
import Products from "../components/Products";
import { large } from "../responsive";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

//styled components
const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const OuterContainer = styled.div`
  margin: 2rem 8rem;
  display: flex;
  flex-direction: column;
  ${large({ margin: "2rem 0" })}
`;

const FilterContainer = styled.div`
  width: 20rem;
  min-width: 10rem;
  padding: 15px;

  position: sticky;
  align-self: flex-start;
  top: 50px;
  height: 100vh;
  overflow-y: auto;
`;

const SortBy = styled.div``;

const BrandContainer = styled.div``;

const CheckboxContainer = styled.div``;

const ProductsContainer = styled.div``;

const AllProductList = () => {
  const search = useSelector((state) => state.search);

  const location = useLocation();

  //initial filter

  const [filter, setFilter] = useState({
    brand: [],
    product_type: [],
    price: "",
    sort: "",
    name: "",
  });

  //initial brand check box values;

  const [brand, setBrand] = useState({
    nyx: false,
    clinique: false,
    maybelline: false,
    covergirl: false,
    loreal: false,
    colourpop: false,
  });

  //initaial product type checkbox values
  const [product_type, setProductType] = useState({
    lipstick: false,
    foundation: false,
    mascara: false,
    eyeliner: false,
    bronzer: false,
    blush: false,
  });

  //for slider values
  const [minValue, set_minValue] = useState(10);
  const [maxValue, set_maxValue] = useState(20);

  let tempMin, tempMax;

  //initial sort
  const [sort, setSort] = useState("");

  let tempSort = "";

  //handle filter

  const handleFilter = (type) => {
    if (type === "brand") {
      let trueItems = [];
      for (let key in brand) {
        console.log(key, brand[key]);
        if (brand[key]) trueItems.push(key);
        console.log(trueItems);
      }
      setFilter({ ...filter, brand: trueItems });
    } else if (type === "product_type") {
      console.log("in product type");
      let trueItems = [];
      for (let key in product_type) {
        if (product_type[key]) trueItems.push(key);
      }
      console.log(trueItems);
      setFilter({ ...filter, product_type: trueItems });
    } else if (type === "sort") {
      console.log(tempSort);

      setFilter({ ...filter, sort: tempSort });
      console.log(sort);
      console.log(filter);
    } else if (type === "price") {
      let price = `${tempMin},${tempMax}`;
      // console.log(price)
      setFilter({ ...filter, price: price });
      // console.log(filter)
    } else if (type === "name") {
      setFilter({ ...filter, name: search.searchValue });
    }
  };

  //handle brand
  const handleBrand = ({ target: { name, checked } }) => {
    brand[name] = checked;
    setBrand({ ...brand });
    handleFilter("brand");
  };

  //handle product_type
  const handleProductType = ({ target: { name, checked } }) => {
    product_type[name] = checked;
    setProductType({ ...product_type });
    handleFilter("product_type");
  };

  //handle sort
  const handleSort = ({ target: { value } }) => {
    console.log("in", value);
    setSort(value);
    tempSort = value;
    handleFilter("sort");
  };

  //handle input
  const handleInput = (e) => {
    set_minValue(e.minValue);
    tempMin = e.minValue;
    set_maxValue(e.maxValue);
    tempMax = e.maxValue;
    handleFilter("price");
  };

  useEffect(() => {
    console.log("url location", location);
    const temp = location.pathname.split("/");
    console.log(temp);
    if (temp[2] === "brand" || temp[2] === "product_type") {
      console.log("in product mounted");
      let event = {
        target: {
          name: temp[3],
          checked: true,
        },
      };
      console.log(temp[2]);
      // url path is same with brand or product type:
      temp[2] === "brand" ? handleBrand(event) : handleProductType(event);
    } else if (temp[2] && temp[2] === "name") {
      console.log("in", temp[2]);
      handleFilter("name");
    } else {
      setFilter({ ...filter, name: "" });
    }
  }, [location]);

  console.log("filtered data:", filter);

  return (
    <MainContainer>
      {/* common for top navigation */}
      <UpperAnnouncement />
      <Navbar />
      <LowerAnnouncement />
      <Slider />

      <OuterContainer>
        
        <ProductsContainer>
          <Products filters={filter} />
        </ProductsContainer>
      </OuterContainer>
     
      <Footer />
    </MainContainer>
  );
};

export default AllProductList;
