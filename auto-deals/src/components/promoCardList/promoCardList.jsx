import React, { useState, useEffect, useContext } from "react";
import "./promoCardList.css";
import PromoCard from "../promoCard/promoCard";
import AutoDealContext from "../../store/context/AutodealContext";

const PromoCardList = () => {
  const cardPromos = [
    {
      key: 1,
      promotype: "tire",
      provider: "Pepboys",
      offertype: "b2g2",
      brand: "cooper",
      price: "$130.00",
    },
    {
      key: 2,
      promotype: "tire",
      provider: "discounttire",
      offertype: "b2g1",
      brand: "kumho",
      price: "$90.00",
    },
    {
      key: 3,
      promotype: "tire",
      provider: "firestone",
      offertype: "percent",
      brand: "goodyear",
      price: "$120.00",
    },
    {
      key: 4,
      promotype: "tire",
      provider: "Pepboys",
      offertype: "b2g1",
      brand: "goodyear",
      price: "$92.10",
    },
    {
      key: 5,
      promotype: "tire",
      provider: "monro",
      offertype: "percent",
      brand: "cooper",
      price: "$80.00",
    },
  ];
  const [count, setCount] = useState(0);
  const [currBrand, setBrand] = useState();
  const [list, setList] = useState(cardPromos);
  const [newItem, setNewItem] = useState("");

  const { test, themeToggler } = useContext(AutoDealContext);

  const clickHandler = (productId) => {
    setBrand(productId - 1);
    setCount((prevState) => prevState + 1);
    const currentProd = productId - 1;
    // setList(list.filter((_,i)=>i!==currentProd));
    setList((prevState) => {
      //  prevState;
      // let newState = prevState
      // .filter((_, i) => i !== currentProd);
      // .map((obj, index) => ({
      //   ...obj,
      //   key: index + 1,
      // }));
         
      return newState;
    });
  };
  const addNewProduct = () => {
    setList((prevState) => {
      return [
        ...prevState,
        {
          key: prevState.length + 1,
          promotype: "tire",
          provider: newItem,
          offertype: "mfg",
          brand: "cooper",
          price: "$86.00",
        },
      ];
    });
    setNewItem("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button
          className={newItem ? "enabled" : "disabled"}
          onClick={addNewProduct}
        >
          Add Product
        </button>
        count : {count} current brand : {currBrand}
      </div>
      {list.map((promo) => (
        <PromoCard
          data={promo}
          key={promo.key}
          className="test"
          promoProvider={promo.provider}
          promoPrice={promo.price}
          promoBrand={promo.brand}
          clickEvent={clickHandler}
        />
      ))}
      <div>{test}</div>
      <button onClick={themeToggler}>THEME toggle</button>
    </>
  );
};
export default PromoCardList;
