import React , {useState,useEffect} from "react";
import "./promoCard.css";
const PromoCard = ({ promoProvider, promoPrice,promoBrand,clickEvent,data }) => {
    const [color,setColor]=useState();
    const cardBtnHandler=()=>{
       clickEvent(data.key);
      setColor("true");

    }
    useEffect(() => {
        //  addNewProduct();
        console.log("rendering");
      });

  return (
    <>
      <div>
        <div>{promoBrand}</div>
        {promoProvider}
        <span> {promoPrice} per tire</span>
        <div>{data.offertype}</div>
        <button className={color?"red":"transparent"} onClick={cardBtnHandler} >click</button>
      </div>
    </>
  );
};

export default PromoCard;
