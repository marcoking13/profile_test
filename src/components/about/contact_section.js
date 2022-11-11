import React from "react";

import "./../../css/about.css";
import InputSection from "./input_section";

class ContactSection extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        firstName:null,
        lastName:null,
        email:null,
        subject:null,
        notes:null
      }
    }

    changeFirstName(data){
      this.setState({firstName:data})
    }

    changeLastName(data){
      this.setState({lastName:data})
    }

    changeEmail(data){
      this.setState({email:data})
    }

    changeSubject(data){
      this.setState({subject:data})
    }

    changeNotes(data){
      this.setState({notes:data})
    }

    render(){
      return(
        <div className=" padding-5 border_cut work width-100 form-group">

          <p className="contact_heading work white_color text-center margin-right-5 font-size-40 margin-top-10"> Contact Me for Work on Future Projects! </p>

          <form >

          <div className="row form_row">

            <InputSection  textArea = {false} label = "First Name" changeData={this.changeFirstName} text={this.state.firstName}/>
              <div className="col-2"/>
            <InputSection  textArea = {false} label = "Last Name" changeData={this.changeLastName} text={this.state.lastName}/>

          </div>

          <div className="row form_row">

            <InputSection  textArea = {false} label = "Subject" changeData={this.changeSubject} text={this.state.subject}/>
              <div className="col-2"/>
            <InputSection  textArea = {false}label = "Email" changeData={this.changeEmail} text={this.state.email}/>

          </div>

          <div className="row form_row">

            <InputSection textArea = {true} label = "Notes" changeData={this.changeNotes} text={this.state.notes}/>

          </div>

            <div className="row">
            <div className="col-3"/>

            <div className="col-6">
              <button className="btn transparent border_cut white_color white_button_normal margin-top-15 orange_button work white_color width-100">Submit</button>
            </div>

        </div>

      </form>

    </div>

      )

  }

 }

 
export default ContactSection;
