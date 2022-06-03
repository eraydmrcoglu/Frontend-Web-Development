import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

const ProductsProvider = (props) => {
  const getLocalData = (value, type) => {
    let data = JSON.parse(localStorage.getItem(value));
    return data !== null ? data : type;
  };

  const [products, setProducts] = useState(() => {
    let data = require("../data/products.json");
    return data.product;
  });

  const [favorites, setFavorites] = useState(getLocalData("favorites", []));

  const [basket, setBudget] = useState(getLocalData("basket", []));

  const [totalCount, setTotalCount] = useState(getLocalData("totalCount", 0));

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("totalCount", JSON.stringify(totalCount));
  }, [totalCount]);

  const addBasket = (product) => {
    setBudget((prevState) => [...prevState, product]);
    setTotalCount((prevCount) => (prevCount += product.price));
    setIsOpen(false);
  };

  const deleteBasket = (id, price) => {
    setTotalCount((prevCount) => (prevCount -= price));
    setBudget((prevBasket) =>
      prevBasket.filter((element) => element.id !== id)
    );
  };

  const addFavorite = (product) => {
    setFavorites((prevState) => [...prevState, product]);
  };

  const deleteFavorite = (id) => {
    setFavorites((prevState) =>
      prevState.filter((element) => element.id !== id)
    );
  };

  const filterProducts = (value) => {
    value === "lowest"
      ? setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) => a.price - b.price)
        )
      : setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) => b.price - a.price)
        );
  };

  const togglerDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <Context.Provider
      value={{
        products,
        basket,
        favorites,
        totalCount,
        isOpen,
        addBasket,
        deleteBasket,
        addFavorite,
        deleteFavorite,
        filterProducts,
        togglerDrawer,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ProductsProvider;
