import React from "react";
import SlideShowToggles from "./slideshow_toggles.js";
import SlideShowText from "./slideshow_text.js";
import SlideShowVideo from "./slideshow_video.js";



class SlideshowSection extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      slides:this.props.config,
      counter:0,
      timeId:null,
      milliseconds:13000
    }

  }

  timer = () =>{

      if(this.state.counter > this.state.slides.videos.length){
          this.setState({counter:0});
      }else{
          this.setState({counter:this.state.counter + 1});
      }

  }

  componentDidMount(){

    if(this.state.timeId){
      clearTimer(this.state.timeId);
    }

    this.setTimer();

  }

  setTimer = () =>{
    var interval = setInterval(this.timer,this.state.milliseconds);
    this.setState({timeId:interval});
  }

  clearTimer = (timer)=>{
    clearTimeout(timer);
  }

  changeCounter = (counter)=>{
    this.setState({counter:counter});
  }

  renderToggle = (willRender) =>{
    if(willRender){
      return <SlideShowToggles  limit = {this.state.slides.videos.length} clearTimer = {this.clearTimer} setTimer = {this.setTimer} timeId = {this.state.timeId} activeIndex = {this.state.counter} changeCounter = {this.changeCounter} slides = {this.state.slides}/>

    }else{
      return <div />
    }
  }

  render(){

    var overflow_check_title = this.state.counter >= this.state.slides.titles.length ? 0 : this.state.counter;
    var overflow_check_video = this.state.counter >= this.state.slides.videos.length ? 0 : this.state.counter;
    var overflow_check_description = this.state.counter >= this.state.slides.descriptions.length ? 0 : this.state.counter;

    return(
      <div className="slideshow_about padding-bottom-5">
        <div className="row padding-0 margin-top-10">

        <SlideShowText
            heading = {this.props.heading}
            subHeading = {this.props.subHeading}
            colSize = {this.props.colSizeText}
            title = {this.state.slides.titles[overflow_check_title]}
            description = {this.state.slides.descriptions[overflow_check_description]}
        />

       <SlideShowVideo
           colSize = {this.props.colSizeImage}
           video = {this.state.slides.videos[overflow_check_video]}
        />

        {this.renderToggle(this.props.renderToggle)}

      </div>

    </div>
   );

  }

}



export default SlideshowSection;
