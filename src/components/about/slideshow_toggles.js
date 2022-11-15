import React from "react";

class SlideShowToggles extends React.Component {

  renderToggles = () =>{

      var html = [];

      for(var i = 0; i < this.props.limit;i++){
        var activeClass = this.props.activeIndex == i ? "active_toggle_slideshow" : "toggle_slideshow";

        html.push(
          <div className="col-1" key = {"hobby_"+i}>
            <div className={activeClass+" width-100 border-radius-50 toggle_"+i} key={i} toggle = {i} onClick = {(e)=>{
            var counter = e.target.getAttribute("toggle");
            console.log(counter);
            this.props.clearTimer(this.props.timeId);
            this.props.setTimer();
            this.props.changeCounter(counter);
            }}></div>
          </div>
        );

      }

      return html;
  }


  render(){

    return(
      <div className="row margin-top-5">
        <div className="col-5"/>
        <div className="col-4">
          <div className="row">
              {this.renderToggles()}
          </div>
        </div>
    </div>
   );

  }

}


export default SlideShowToggles;
