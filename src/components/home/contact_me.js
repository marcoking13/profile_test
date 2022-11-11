import React from "react";


class ContactMe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contact:this.props.contactConfig
    }
  }

  renderContactInfo = () => {
   var size =  Math.floor(12/this.state.contact.length);
   var html=  this.state.contact.map((info)=>{

      return(
        <div className={"col-"+size}>

           <li className="no_list_style contact_item width-100 margin-top-5">
            <img src = {process.env.PUBLIC_URL + "/imgs/"+info.icon} className="contact_list_icon float-left"/>
            <p className="width-100 white_text contact_name  margin-left-5">{info.name}</p>
            <p className="white_text contact_link margin-left-5 width-100 work">{info.link}</p>
          </li>

        </div>
       )
    })

    return html;
  }

  render(){
    return(
      <div className="container-fluid contact_me padding-bottom-5 padding-top-5">

        <p className="contact_title sublime_orange_text work text-center margin-top-10">{this.props.title}</p>

        <div className="row">
          <div className="col-5"></div>

          <div className="col-2"><div className="divider_contact width-100"/></div>

          <div className="col-5"></div>

        </div>

        <div className="row margin-top-5">

          <div className="col-1"/>

          <div className="col-10 margin-left-5">

            <ul className="no_list_style row">
              {this.renderContactInfo()}
            </ul>

          </div>

        </div>

      </div>
    )
  }
}

export default ContactMe;
