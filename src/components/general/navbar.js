import React from "react";
import {useEffect} from "react";
import Logo from "./../../imgs/Logo.png";

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.navbarRef = React.createRef();
  }

  handleScroll = (e) =>{

     const position = window.pageYOffset;

     if(position > 0){
       this.navbarRef.current.classList.add(`nav_bar_animation`);
     }else{
       this.navbarRef.current.classList.remove(`nav_bar_animation`);
     }

  }

componentDidMount(){

     window.addEventListener("scroll", this.handleScroll);

  }

  render(){
    return(
      <div className="container-fluid width-100 fixed_top navbar_container fixed max-z-99"  onScroll = {(e)=>{this.handleScroll()}} >

        <div className="navbar row z-99 border_bottom_white_1px fixed" ref = {this.navbarRef} >

          <div className="col-3">
              <div className="row margin-top-5">

                <div className="col-3 padding-0 margin-0">
                  <img class="width-50" src={Logo} />
                </div>

                <div className="col-9" >
                  <p className="white_color bold hover_sublime_orange profile_name work bolder">M.K</p>
                </div>

              </div>

          </div>

          <div className="col-5"/>
          <div className="col-4">

            <div className="row margin-top-5">

              <div className="col-4 ">
                <p className="work hover_sublime_orange white_color bold" onClick = {()=>{this.props.ChangeURL("/")}}>Home</p>
              </div>

              <div className="col-4  ">
                <p className="work hover_sublime_orange white_color bold" onClick = {()=>{this.props.ChangeURL("/about")}}>About</p>
              </div>

              <div className="col-4  ">
                <p className="work hover_sublime_orange white_color bold"onClick = {()=>{

                  this.props.ChangeURL("/portfolio")

                }}>Projects</p>
              </div>

          </div>

        </div>

      </div>
      
    </div>

    )

  }

}


export default Navbar;
