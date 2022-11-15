import React from "react";


class Language extends React.Component {

   render(){

     var activeClass = this.props.active ? "active_language_container":"language_container";

     var droppedContent  = this.props.active ?
      <div className='row'>
         <p className= 'work medium-heading white_text light-font'>{this.props.description}</p>
       </div>
      : null

      return(
          <div className={"col-"+this.props.col+" border-color-orange-2px  "+activeClass} onClick = {()=>{this.props.setActive(this.props.index)}}>

            <div className="width-100" >

              <div className="row padding-top-2_5  padding-bottom-2_5">

              <div className="col-1 margin-left-5">
                  <img className="width-100 language_icon svg_icon" src={process.env.PUBLIC_URL + this.props.icon}/>
              </div>

              <div className="col-6">
                <br />
                <p className="bold margin-left-5 big-heading sublime_orange_text comp_heading">{this.props.heading}</p>
                  {droppedContent}
              </div>

            </div>

        </div>

    </div>
    )
  }
}


export default Language;
