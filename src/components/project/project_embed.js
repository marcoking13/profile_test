import React from "react";

import ArrowIcon from "./../../imgs/arrow_icon.png";

const ProjectEmbed = (props)=>{

    return(
      <React.Fragment>
        <div className={props.colSize+" project_embed margin-top-2_5"}>
         <iframe frameborder="0" className="project_image border-cut-slight padding-bottom-0 transition_upward border-cut no_padding_no_margin width-100" src={props.embed} allowfullscreen="" width="1500" height="820" ></iframe>
        </div>
      </React.Fragment>
    )

}


export default ProjectEmbed;
