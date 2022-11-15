import React from "react";


import Heading from "./../components/general/heading.js";
import ProjectToggler from "./../components/general/project_toggler.js";
import SmallProjects from "./../config/small_projects.js";
import Projects from "./../config/projects.js";
import PortfolioSection from "./../components/portfolio/portfolio_section.js";

import "./../css/projects.css";
import "./../css/colors.css";
import "./../css/layout.css"


class PortfolioPage extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      currentSmallProject : null
    }

  }

  ToggleSmallProject = (project) => {
    this.setState({currentSmallProject:project});
  }

  renderEmbed = (project) =>{

    if(this.state.currentSmallProject){
        return
        (
          <div className="row">
            <div className="col-3"/>

            <div className="col-6">
              <iframe className='width-100' title = {project.name} src = {project.link} width="100%" height="400px"/>
            </div>

            <div className="col-3"/>

          </div>
        )
    }else{
      return <div />
    }
  }

  GoToApp = (link,i)=>{
    console.log(link.link)
    window.location.assign(link.link);
  }
  render(){

    return(

        <div className="portfolio_page">
          <Heading title="My Projects" subTitle = "Games/Apps" margin="10%"/>
          <div className="container-fluid ">
            <br />
            <br />
            <PortfolioSection isLink= {false}  ToggleProject = {this.props.ToggleProject} size="4"config = {Projects} renderProjectModal = {this.renderProjectModal}/>
          </div>

          <div className="margin-top-5">
          <h2 className="small_project_heading sublime_orange_text margin-left-5">Small Projects </h2>
            {this.renderEmbed(this.state.currentSmallProject)}
            <PortfolioSection isLink= {true} ToggleProject = {this.GoToApp} size = "4"config = {SmallProjects} />
          </div>

        </div>

    );

  }

}

export default PortfolioPage;
