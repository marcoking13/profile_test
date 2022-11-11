import React from "react";


import Languages from "./../../config/languages.js";
import Language from "./language.js";


class LanguagesSection extends React.Component{


  constructor(props){
    super(props);
    this.state = {languages:Languages,activeIndex:-1}
  }

  setActive = (index) =>{
    this.setState({activeIndex:index})
  }

  renderLanguages = ()=>{
    return  this.state.languages.map((language,index)=>{
        var active = false;
        if(index == this.state.activeIndex){
          active = true;
        }else{
          active=false;
        }
        return <Language
          key = {language.name}
          col="12"
          index = {index}
          active={active}
          description={language.description}
          setActive = {this.setActive}
          icon = {language.icon}
          heading={language.name}
      />

      });
    }
  render(){
    return(
      <div className="skill_section">
        <br />
        <h2 className="work sublime_orange_text margin-left-5"> My Programming Skills </h2>
        <div className="row width-90 margin-left-5 margin-top-5">
            {this.renderLanguages()}
        </div>
      </div>
    )
  }
}


export default LanguagesSection;
