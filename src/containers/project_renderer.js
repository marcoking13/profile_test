import React from "react";


import ProjectPage from "./project_page.js";
import PortfolioPage from "./portfolio_page.js";

import "./../css/projects.css";
import "./../css/colors.css";
import "./../css/layout.css"

class ProjectRenderer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentProject:null,
      currentProjectIndex:null
    }
  }


  ToggleProject = (currentProject,index) =>{

      this.setState({currentProject:currentProject,currentProjectIndex:index});
      this.props.ChangeURL("/project");

    }

    renderDecider = () => {

      if(this.props.url == "/portfolio"){
          return(
            <div>
              <PortfolioPage
                renderProjectModal = {this.renderProjectModal}
                currentProject = {this.state.currentProject}
                ToggleProject = {this.ToggleProject}
                ChangeURL = {this.props.ChangeURL}
                currentProjectIndex = {this.state.currentProjectIndex}
               />
            </div>
          )

      }else if(this.props.url == "/project"){

        return(
          <div>
            <ProjectPage
              renderProjectModal = {this.renderProjectModal}
              ChangeURL = {this.props.ChangeURL}
              currentProject = {this.state.currentProject}
              ToggleProject = {this.ToggleProject}
              currentProjectIndex = {this.state.currentProjectIndex}
            />
          </div>
        )

      }
      else{
        return <div />
      }

    }

    render(){

      return(
        <div>
          {this.renderDecider()}
        </div>
      );

    }

  }


export default ProjectRenderer;
