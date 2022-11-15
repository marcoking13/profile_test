
import React from "react";
import Skills from "./../../config/skills.js";
import Credentials from "./credentials.js"

class ResumeSection extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      skills:Skills,
      counter:0
    }

    this.resumeRef = React.createRef();

  }


  renderCredentials = ()=>{

    var counter = 0;

    const skillRender =  this.state.skills.map((skill)=>{
      counter++;
      return <Credentials colSize={"col-"+skill.colSize} counter = {counter} skills = {skill}/>
    })

    return skillRender;

  }


  render(){
    return(
      <div className="container-fluid padding-top-5 inactive " ref = {this.resumeRef} onMouseOver = {(e)=>{this.props.hoverOnRef(this.resumeRef)}}>
        <p className="work about_name_title sublime_orange_text margin-left-5 margin-top-10">My Work</p>
        <div className="row">

          {this.renderCredentials()}

        </div>
      </div>

    );

  }

}

export default ResumeSection;
