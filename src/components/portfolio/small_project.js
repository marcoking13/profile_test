const SmallProject = (props)=>{

  const renderLanguages = props.project.languageIcons.map((language)=>{

    var colSize = 12 / props.project.languageIcons.length;
    var width = 100;
    var margin = 0;

    if(colSize >= 12){
      width = 50;
      margin= 25
    }

    return <div className={"col-"+colSize.toString()}><img src={process.env.PUBLIC_URL +"/imgs/"+ language} className={"float-left margin-left-"+margin+" width-"+width.toString()} /></div>

  });

  return(
    <div className="col-2 relative border_cut icon_change_color small_project white-border-2px" >
       <a href = {props.project.link}>
        <img className="width-100 " src = {process.env.PUBLIC_URL+"/"+props.project.icon}/>
        <p className="small_project_text work sublime_orange_text text-center">{props.project.name}</p>
        <div className="row">

            <div className="col-12">
              <div className="row">
                  {renderLanguages}
              </div>
            </div>

        </div>
      </a>
    </div>

  )
}


export default SmallProject;
