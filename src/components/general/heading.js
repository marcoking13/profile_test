import React from "react";
class Heading extends React.Component{
  constructor(props){
    super(props);
      this.subTitleRef = React.createRef();
  }
  AddAnimationClassToRef =(animation)=>{
    this.subTitleRef.current.classList.remove("inactive");
    this.subTitleRef.current.classList.add(animation);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.AddAnimationClassToRef("heading_animation");
      this.AddAnimationClassToRef("normal-animation");
    },500)
  }

  render(){
  return(

        <div className={"row padding-bottom-5 "} style={{marginTop:this.props.margin}} >
          <div className="col-5">
            <div className="heading_container heading_animation fast-animation">
            <p className=" intro_title dark-blue"> {this.props.title} </p>
            </div>
            <div className="heading_container inactive" ref={this.subTitleRef}>
              <p className="intro_subtitle dark-blue" >{ this.props.subTitle} </p>
            </div>
          </div>
          <div className="col-1"/>

        </div>

  )
}
}



export default Heading;
