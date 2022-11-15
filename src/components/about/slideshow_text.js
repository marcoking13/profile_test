import React from "react";


class SlideShowText extends React.Component {
  render(){

    return(

      <div key = {this.props.title} className={`col-${this.props.colSize} padding-bottom-0 light-black-background `}>

        <h1 className="slidshow_heading big-heading width-100 text-left margin-left-10 margin-top-10 bold sublime_orange_text work">{this.props.heading} </h1>

        <h1 className="slidshow_sub_heading white_color work margin-top-5 big-heading margin-left-10 line-height-2">
          {this.props.subHeading}
            <strong key = {this.props.subHeading} className="sublime_orange_text slideshow_title_transition">{" "+ this.props.title}</strong>
        </h1>

        <p key = {this.props.title} className="slideshow_description small-heading line-height-2 margin-top-10 margin-left-10 white_color width-75 white_text work slideshow_text_transition">{this.props.description}</p>


      </div>

    );

  }

}


export default SlideShowText;
