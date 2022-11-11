import React from "react";
import Demo from "./../imgs/star_slash_demo.mp4";

import Intro from "./../components/home/intro.js";
import Graphic from "./../components/home/graphics.js";

import AboutMeSection from "./../components/about/about_me_section";
import SampleShowcase from "./../components/home/sample_showcase.js";
import SlideConfig from "./../config/slides.js";
import SlideshowSection from "./../components/about/slideshow_section.js";

import LanguagesSection from "./../components/home/languages_section.js";
import ViewAllGamesSection from "./../components/home/view_all_games_section.js";
import ContactMe from "./../components/home/contact_me";
import ContactInfo from "./../config/contact.js";
import Footer from "./../components/general/footer.js";


import "./../css/landing_page.css";
import "./../css/colors.css";
import "./../css/layout.css"




import Projects from "./../config/projects.js";

  class LandingPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        projects:Projects,
      }
    }
    renderSamples(){

      const limitedProjects = [];

      for(var i = 0; i < 3; i ++){
        limitedProjects.push(<SampleShowcase languages = {this.state.projects[i].languages} description = {this.state.projects[i].description} gameType={this.state.projects[i].type} gameEmbed = {this.state.projects[i].embed} gameName={this.state.projects[i].name} gameBackground = {this.state.projects[i].video}/>)
      }
      return limitedProjects;
    }


    render(){

      return (
        <div className="landing_page">

          <div className="greyish_background">
            <Graphic />
            <Intro />

            <div className="portfolio_landing_container width-100 absolute">

              <div className="portfolio_landing_section absolute z-99 width-100">

                <div className="portfolio_games absolute margin-top-5">
                <p className="big_heading section_heading_landing work font-size-50 sublime_orange_text text-align-left margin-left-10">My Projects</p>

                <br />
                <div className="margin-top-5 ">
                  {this.renderSamples()}
                </div>

                <LanguagesSection />
                <div className="margin-top-5"/>
                <div className="margin-top-30  padding-top-10">
                <ViewAllGamesSection  heading="View All My Projects"/>
                </div>
                  <div  className="margin-top-40"/>
                  <div  className="margin-top-40"/>
                  <br />
                  <br />

                <SlideshowSection config = {SlideConfig.cfs} colSizeText = "5" colSizeImage = "7" heading = "I Started My Own Cleaning Company" subHeading ="Why I Started "/>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <ContactMe contactConfig = {ContactInfo} title = "Get In Contact With Me!"/>

                <Footer />

              </div>

          </div>

        </div>

      </div>

  </div>


    );
   }
}


export default LandingPage;
