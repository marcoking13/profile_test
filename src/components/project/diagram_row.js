import Card from "./../general/card";


const DiagramRow = (props) => {
  console.log(props);


  const renderDiagramColumn= (componentArr) =>{

    const cards = componentArr.components.map((comp)=>{
      var col = 12 / componentArr.components.length;
      return (
        <Card col = {col} heading = {comp.heading} description = {comp.description} icon = {comp.icon} />
      )
    })
    return cards;
  }



  const renderDiagramRow = () =>{

    const workflow = props.currentProject.workflow.map((diagram,index)=>{

      const line = index > 0 ? <div className="line"/> : null;

      return(
        <div className="width-100">
          {line}
          <div className="col-12 dummy_box margin-top-10">
            <h2 className="work sublime_orange_text text-center margin-top-5 "style={{fontSize:"30px"}}>{diagram.heading}</h2>
            <div className="row margin-top-5">
            {renderDiagramColumn(diagram)}
            </div>
          </div>

        </div>
      )
    })
    return workflow;
  }

  return(
    <div className="row">
      <div className="col-1"/>
      <div className="col-10">
        <div className="row">
          {renderDiagramRow()}
        </div>
      </div>
    </div>
  )
}


export default DiagramRow;
