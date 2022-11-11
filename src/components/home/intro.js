import AbsoluteBackground from "./../../components/general/absolute_background";
import IntroConfig from "./../../config/intro.js";
import "./../../css/landing_page.css";
import "./../../css/colors.css";

import React from "react";

class Intro extends React.Component {

  constructor(props){
    super(props);
    this.subTitleRef = React.createRef();


  }

  AddAnimationClassToRef =(animation)=>{
    this.subTitleRef.current.classList.remove("inactive");
    this.subTitleRef.current.classList.add(animation);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.AddAnimationClassToRef("heading_animation");
      this.AddAnimationClassToRef("normal-animation");
    },500)
  }


render(){
    var isVideo = IntroConfig.background.extension == "mp4" ? true : false;
  return(
    <div className="relative showcase">



      <div className="row landing_showcase  absolute z-99 width-100 margin-top-10">


        <div className="col-6">
          <div className="heading_container heading_animation fast-animation" ><p className=" intro_title dark-blue">{IntroConfig.name}</p></div>
          <div className="heading_container inactive" ref = {this.subTitleRef}><p className=" intro_subtitle dark-blue">{IntroConfig.position}</p></div>
          <p className="work medium-heading white_color line-height-2 margin-top-5 margin-left-10">
             {IntroConfig.sentence1}
              <br />
             {IntroConfig.sentence2}
             <br />
             {IntroConfig.sentence3}
          </p>

        </div>

      </div>


    </div>

  )
}
}

export default Intro;
