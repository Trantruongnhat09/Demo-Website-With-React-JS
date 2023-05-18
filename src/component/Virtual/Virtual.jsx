import React from 'react';
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

export const Virtual = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-On</span>
            <span>Never Buy the wrong shade again</span>
            <span>Try Now</span>
            <img src={Shade} alt="" />
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
               <ReactCompareImage leftImage={Before}
                rightImage={After}/>
            </div>
            
        </div>
    </div>
  )
}

export default Virtual