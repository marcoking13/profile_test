import React from "react";
import ProjectDetails from "./../components/project/project_details.js";
import ProjectToggler from "./../components/general/project_toggler"
import ViewSourceSection from "./../components/project/view_source_section.js";
import Dropdown from "./../components/general/dropdown.js";
import DiagramSection from "./../components/project/diagram_section.js";
import Projects from "./../config/projects.js";
import ProjectEmbed from "./../components/project/project_embed";

import Heading from "./../components/general/heading.js";

class ProjectModal extends React.Component {
  constructor(props){
    super(props);
  }
  render(){

    return(
      <div className="project_modal">

        <Heading margin = "10%" title = {this.props.currentProject.name} subTitle = "Click to view full app"/>


        <div className="row">
          <div className="col-1"/>
          <ProjectEmbed colSize ="col-10" embed = {this.props.currentProject.embed}/>
        </div>

        <ProjectDetails currentProject = {this.props.currentProject} />
        <DiagramSection currentProject = {this.props.currentProject}/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <ViewSourceSection currentProject = {this.props.currentProject}/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <ProjectToggler adjust = {"100px"} limit = {1} config = {Projects} isBig = {true} ToggleProject = {this.props.ToggleProject}/>

      </div>
    )
  }
}


export default ProjectModal;
