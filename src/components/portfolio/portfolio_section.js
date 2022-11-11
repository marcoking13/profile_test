import React from "react";

import ArrowIcon from "./../../imgs/arrow_icon.png";
import Projects from "./../../config/projects.js";
import PortfolioBox from "./portfolio_box.js";

class PortfolioSection extends React.Component {

  constructor(props){
    super(props);
    this.state = {projects:Projects}
  }


  renderBoxes(){

    var projects = [];

    return this.state.projects.map((project,i)=>{

      return(
        <PortfolioBox colSize={"4"} index = {i} ToggleProject = {this.props.ToggleProject} project = {project} />
      );

    });

  }


  render(){

    return(
      <div className="row custom_row_big" >
        {this.renderBoxes()}
      </div>
    )

  }

}

export default PortfolioSection;
