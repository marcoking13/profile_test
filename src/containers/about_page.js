import React from "react";

import ResumeSection from "./../components/about/resume_section.js";
import SlideshowSection from "./../components/about/slideshow_section.js";
import AboutMeSection from "./../components/about/about_me_section.js";
import SlideConfig from "./../config/slides.js";
import IntroConfig from "./../config/intro.js";
import ContactSection from "./../components/about/contact_section.js";
import Heading from "./../components/general/heading.js";
import ArrowIcon from "./../imgs/arrow_icon.png";
import ContactMe from "./../components/home/contact_me";
import ContactInfo from "./../config/contact.js";
import "./../css/about.css";
import "./../css/layout.css"


class AboutPage extends React.Component {

  constructor(props){
    super(props);
    this.aboutRef = React.createRef();
    this.resumeRef = React.createRef();
    this.slideshowRef = React.createRef();
    this.contactRef = React.createRef();


  }

  hoverOnRef = (ref) =>{
    const current = ref.current;
    const current_classes = ref.current.classList;
    if(current_classes.contains("inactive")){
      current_classes.remove("inactive");
      current_classes.add("active_transition");
    }

  }

  render(){
    return(
      <div className="about_page">

         <div className="margin-top-10"/>
         <Heading title="About Me" subTitle="Learn a Little More About My Life!" margin="5%"/>
         <AboutMeSection/>
         <div className="resume_ref "  >
            <ResumeSection hoverOnRef = {this.hoverOnRef} />
          </div>

          <div className="slide_ref inactive margin-top-5" ref = {this.slideshowRef} onMouseOver = {(e)=>{this.hoverOnRef(this.slideshowRef)}} >
            <SlideshowSection config = {SlideConfig.hobbies} subHeading ="One of my favorite things to do is" heading="My Hobbies" colSizeText = "5" colSizeImage = "7" renderToggle = {true}/>
          </div>
          <div className="contact_ref inactive margin-top-5" ref = {this.contactRef} onMouseOver = {(e)=>{this.hoverOnRef(this.contactRef)}} >
            <ContactSection />
          </div>

          <ContactMe contactConfig = {ContactInfo} title = "Get In Contact With Me!"/>

      </div>
    )
  }
}

export default AboutPage;
