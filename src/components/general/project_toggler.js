import React from "react";

import "./../../css/animations.css";
import SmallProject from "./../portfolio/small_project.js";
import BigProject from "./../portfolio/portfolio_box.js";

class ProjectToggler extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      startingIndex:0,
      projects:this.props.config,
    }
  }

  renderProjects = ()=>{

    var html = [];

    for(var i = 0; i < 12 / 4; i++){
      if(!this.props.isBig){
        html.push(
            <SmallProject project = {this.state.projects[this.state.startingIndex + i]} ToggleSmallProject = {this.props.ToggleSmallProject} />
        )
      }else{
        html.push(
            <BigProject colSize = "4" project = {this.state.projects[this.state.startingIndex + i]} index = {this.state.startingIndex + i} ToggleProject = {this.props.ToggleProject}/>
        )

      }

    }

    return html;

  }

  renderToggle = (rotated,iterator)=> {
    var rotate = " ";

    if(rotated){
      rotate = "rotate-180";
    }

    return(
      <img style={{top:this.props.adjust}} className={" relative width-90 margin-left-5 "+rotate} src = {process.env.PUBLIC_URL+"/imgs/arrow_icon.png"} onClick = {()=>{

        if(this.state.startingIndex + iterator  <= 0 || this.state.startingIndex + iterator >= this.state.projects.length - 5){
            this.setState({startingIndex:0})
          }

          else{
            this.setState({startingIndex:this.state.startingIndex + iterator})
          }

      }} />
    )

  }

  render(){
    return(
      <div className="small_projects_section container-fluid padding-bottom-5 padding-top-5 ">
        <h2 className="small_project_heading sublime_orange_text margin-left-5">My Other Projects </h2>
        <div className="row  margin-top-5">
          <div className="col-1 margin-top-5">
            {this.renderToggle(true,-this.props.limit - 2)}
          </div>
          <div className="col-10">
          <div className="row">
            {this.renderProjects()}
          </div>
          </div>
          <div className="col-1 margin-top-5">
            {this.renderToggle(false,this.props.limit - 2)}
          </div>
        </div>


      </div>
    )
  }
}


export default ProjectToggler;
