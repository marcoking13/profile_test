import React from "react";
import InputBig from "./input_big";
import InputSmall from "./input_small";



class InputSection extends React.Component{


  render(){
    if(this.props.textArea == false){
      return(
        <InputSmall changeData = {this.props.changeData} text = {this.props.text} label = {this.props.label}/>
      )
    }else{

       <InputBig cols = "50" rows="4" changeData = {this.props.changeData} text = {this.props.text} label = {this.props.label}/>

    }
    
  }

}


export default InputSection;
