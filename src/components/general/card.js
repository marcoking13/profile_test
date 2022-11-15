

const SkillCard = (props) => {

  return(
    <div className={"border-cut-slight skill_container col-"+props.col} >
      <div className="width-90 margin-left-5 card_ani sublime-orange-border-thick padding-bottom-5 padding-top-5" style={{height:props.height}} >
        <p className="big-heading width-100 sublime_orange_text comp_heading text-center "style={{textAlign:"center"}}>{props.heading}</p>
        <div className="row">
          <div className="col-4"/>
          <div className="col-4">
            <img className="width-100 orange language_icon svg_icon" src={process.env.PUBLIC_URL + "/imgs/"+props.icon}/>
          </div>

          </div>
          <p className="margin-top-5 text-center padding-5 line-height-2 medium-heading comp_description white_text">{props.description}</p>
        </div>
    </div>
  );
  
}


SkillCard.defaultProps = {
  col:"3",
  icon:process.env.PUBLIC_URL + "/imgs/app_icon.png",
  heading:"Default",
  description:"",
  height:"100%"
}

export default SkillCard;
