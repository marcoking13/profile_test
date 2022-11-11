const PortfolioBox = (props) => {

  const colorClass = props.isSplashLight ? "black !important" : "white";
  return(
    <div className={`col-${props.colSize} margin-top-20 portfolio_box`} onClick = {()=>{props.ToggleProject(props.project,props.index)}}>

      <div className="portfolio_box_child   width-100 border-radius-10 height-100 " >
        <img class="width-100 portfolio_image" src= {process.env.PUBLIC_URL + props.project.splashImage} style={{height:"450px"}}/>

        <div className="black_background overlay width-100 height-100 no-opacity"style={{position:"absolute",top:0}}>
          <br />
          <br />
          <p className="portofolio_heading_medium absolute medium-heading work  text-center"style ={{color:colorClass}}>{props.project.type} </p>
          <br />
          <p className="portofolio_heading_small medium-heading work  text-center" style ={{color:colorClass}}>{"Made With: "+props.project.languages} </p>
        </div>

      </div>
      
    </div>
  )
}

export default PortfolioBox;
