
import "./../../css/landing_page.css";
import "./../../css/colors.css";

import React from "react";

const Graphic = (props)=>{

  return(
    <div className="absolute graphic_container">
      <div class="row">
      <div class="col-12">
      <img className="graphic_intro_image graphic_1 in-front" src = {process.env.PUBLIC_URL+"/imgs/graphic_1.png"}/>
      <img className="graphic_intro_image graphic_2" src = {process.env.PUBLIC_URL+"/imgs/graphic_2.png"}/>
      </div>
      </div>
    </div>


  )
}

export default Graphic;
