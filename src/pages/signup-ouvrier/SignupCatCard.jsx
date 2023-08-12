import React from "react";
import "./SignupCat.css"

function SignupCatCard({card}) {
    
  return (
    <div  class="col-lg-4 col-sm-6" >
      <a href="/Signup">
        <div class="choose-card" >
            <img class="i11" src={card.pp} alt=""></img>
            <h3>{card.categorie}</h3>
            <p>{card.desc}.</p>
        </div>
      </a>

    </div>
  );
}
export default SignupCatCard;
