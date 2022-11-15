import React from "react";


class InputSmall extends React.Component {

  render(){

    return(
      <div className="col-5 form_container margin-top-5">
        <label className="input_area contact_label margin-top-5 white_color work">{this.props.label}</label>
        <br />
        <input className="input_area contact_form form-control padding-2_5 margin-top-5" onChange = {(e)=>{this.props.changeData(e.target.value)}} placeholder={"Enter "+this.props.label} value = {this.props.text}/>
      </div>
    );

  }

}

export default InputSmall;
