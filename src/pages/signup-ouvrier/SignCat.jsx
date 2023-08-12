//import React, { useEffect, useState } from "react";
//import { useTranslation } from 'react-i18next';
import "./SignupCat.css"
import SignupCatCard from "./SignupCatCard";
import { categories } from "../../data";

function SignupCat() {

    
  return (

    <>
      <div className="why-ch">
        <section class="why-choose-two pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Why You Choose Us Among Other Job Site?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                </div>
            
                <div class="row">
                  {categories.map((card) => (
                    <SignupCatCard key={card.id} card={card} />
                  ))}
                </div>
            </div>
        </section>
      </div>
    </>
   );
        
        
        
        
}
export default SignupCat;