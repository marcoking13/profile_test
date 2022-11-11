import React from "react";

import AbsoluteBackground from "./../general/absolute_background";

const ViewSourceSection = (props)=>{


  const renderImage = (className)=>{

      return (
        <div className="col-4 ">
          <img className={"  width-100 "+className}src={process.env.PUBLIC_URL +"/imgs/arrow_icon.png"} />
        </div>
      )

   }

  const renderText = (text) => {

    return(
      <div className="col-7">
        <br />
        <p className="view_source_heading work margin-top-20 sublime_orange_text">{text}</p>
      </div>
    )

  }


  const buildRightSide = (className,text)=>{

    return(
      <div className="row arrow_change_color">
        {renderText(text)}
        {renderImage(className)}
      </div>
    )

  }


  const buildLeftSide = (className,text)=>{

    return(
      <div className="row arrow_change_color">
        {renderImage(className)}
        {renderText(text)}
      </div>
    )

  }


    return(
      <div className="container-fluid view_source margin-top-20 padding-bottom-5 border-top-white background-cover">

        <AbsoluteBackground link = "/imgs/view_all" extension = ".gif" isVideo = {false} height="400px" />

        <div className="row margin-left-1">

          <div className="col-4 margin-top-5">
            {buildLeftSide("rotate-180","View Source")}
          </div>

          <div className="col-4"/>

          <div className="col-4 margin-top-10 ">
             {buildRightSide("","View App")}
          </div>

        </div>

    </div>
    )


}

export default ViewSourceSection;
