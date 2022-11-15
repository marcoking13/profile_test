import React from "react";


class Credentials extends React.Component{

  renderList = (counter)=>{

    var html = [];
    var position = "";
    var detail ="";

    for(var i =0; i < this.props.skills.subList.length;i++){

      if(this.props.skills.subList[i].subText){
        position = <li className="square-list-style white_color  line-height-2 work margin-top-5 medium-heading"> {this.props.skills.subList[i].subText} </li>
      }


      if(this.props.skills.subList[i].position){
        detail = <li className="square-list-style white_color  line-height-2 work margin-top-5 medium-heading"> {this.props.skills.subList[i].addOn + ": "+this.props.skills.subList[i].position}</li>
      }

      html.push (
        <div className="margin-top-5" >
          <li  className="square-list-style white_color work margin-top-5 medium-heading">{this.props.skills.subList[i].subHeading}</li>
          <ul>
            {detail}
            {position}
          </ul>

        </div>

      );

    }

    return html;

  }



  render(){

    return(
      <div className={this.props.colSize + " padding-left-5 margin-top-2_5"}>

        <p className="work about_name_subheading sublime_orange_text">{this.props.skills.title}</p>
        <ul>
          {this.renderList(this.props.counter)}
        </ul>

      </div>
    );

  }
  
}

export default Credentials;
