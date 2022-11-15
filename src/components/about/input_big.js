import React from "react";


class InputSmall extends React.Component {

  render(){

      return(
        <div className="col-8 form_container margin-top-5">
          <label className="contact_label white_color work margin-top-5">{this.props.label}</label>
          <br />
          <textarea className="input_area notes_text_area no-background white_color width-100 medium-heading work" rows={this.props.rows} cols={this.props.cols} onChange = {(e)=>{this.props.changeData(e.target.value)}} value = {this.props.text}/>
        </div>
      )

  }

}

export default InputSmall;
