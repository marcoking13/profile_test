import React from "react";

import DiagramRows from "./diagram_row";

class DiagramContainer extends React.Component {

  render(){
    return(
      <div className="container-fluid diagram_container border-top-white-1px">
          <DiagramRows currentProject = {this.props.currentProject}/>
      </div>
    )

  }

}


export default DiagramContainer;
