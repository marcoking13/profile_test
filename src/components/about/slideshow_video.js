import React from "react";


class SlideshowVideo extends React.Component {

  render(){

    var extension = this.props.video.split(".")[1];
    var isVideo = extension == "mp4" ? true : false;

    if(isVideo){
      return(
        <div key = {this.props.video} className={`col-${this.props.colSize} padding-0 margin-0 relative slideshow_video_transition slideshow_background z-index-99-negative`}>
          <video  autoPlay loop key = {process.env.PUBLIC_URL+this.props.video}> <source className="width-100"  src = {process.env.PUBLIC_URL+this.props.video}></source></video>
        </div>
      )
    }

    else{
      return(
        <div key = {this.props.video} className={`col-${this.props.colSize} padding-0 margin-0 relative slideshow_video_transition slideshow_background z-index-99-negative`}>
          <img src = {process.env.PUBLIC_URL+this.props.video} className= "width-100" />
        </div>
      )
    }

  }

}


export default SlideshowVideo;
