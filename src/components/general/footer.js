import "./../../css/footer.css";
import Logo from "./../../imgs/Logo.png";
import React from "react";

class Footer extends React.Component {
  render(){
    return(
      <div className="footer_container padding-top-10 ">
        <div className="row margin-top-20 footer">

          <div className="col-4">
            <p className="color_white hover_sublime_orange footer_text work"  onClick = {()=>{this.props.ChangeURL("/contact")}}> Contact </p>
          </div>

          <div className="col-4">
            <p className="color_white hover_sublime_orange footer_text work"  onClick = {()=>{this.props.ChangeURL("/about")}}> About </p>
          </div>

          <div className="col-4">
            <p className="color_white hover_sublime_orange footer_text work" onClick = {()=>{this.props.ChangeURL("/portfolio")}}> Portfolio </p>
          </div>

        </div>

        <div className="row margin-top-2_5">

          <div className="col-4"><p className="white_color margin-left-5 footer_text_big work margin-top-5">Created by Marco Khodr with React @2021</p></div>
          <div className="col-6"></div>
          <div className="col-1"><img className="width-50 margin-right-45" src={Logo}/></div>

        </div>
      </div>

    )
 }
}


export default Footer;
