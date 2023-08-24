import React from "react";
import pizza from '../../images/pizza-png-15.png'



const MealOrderComp = ({order}) => {
  return (
    <div
      style={{ backgroundColor: "var(--secondary-color)" }}
      className="rounded center gap-3 w-100 py-2"
    >
      <img
        src={pizza}
        style={{ width: "90px", height: "90px", objectFit: "cover" }}
        alt=""
      />
      <div className="meal-order-info">
        <div className="meal-name text-capitalize"> بيتزا باللحمة </div>
        <div className="details">
          بيتزا و لحمة
        </div>
        <div className="between gap-4">
          <div style={{color: 'var(--price-color)'}} className="price"> 20$ </div>
          <div className="center gap-1">
            <div className="increase">+</div>
            <div className="order-count"> 02 </div>
            <div className="decrease">-</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealOrderComp;
