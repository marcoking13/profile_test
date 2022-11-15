import React from "react";


import Heading from "./../components/general/heading.js";
import ProjectToggler from "./../components/general/project_toggler.js";
import SmallProjects from "./../config/small_projects.js";
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


  render(){

    return(

        <div className="portfolio_page">
          <Heading title="My Projects" subTitle = "Games/Apps" margin="10%"/>
          <div className="container-fluid ">
            <br />
            <br />
            <PortfolioSection ToggleProject = {this.props.ToggleProject} renderProjectModal = {this.renderProjectModal}/>
          </div>

          <div>
            {this.renderEmbed(this.state.currentSmallProject)}
            <ProjectToggler isBig={true} limit = {5} config = {SmallProjects} ToggleSmallProject = {this.ToggleSmallProject} />
          </div>

        </div>

    );

  }

}

export default PortfolioPage;
