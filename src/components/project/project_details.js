const ProjectDetails = (props) => {


  return (
      <div className="continer-fluid project-details padding-5">

        <div className="row">
          <div className="col-1"/>

          <div className="col-5 project-col">

            <ul style={{listStyleType:"none"}}>
              <li className="heading_list medium-heading work white_text"><strong>Made With:</strong>{" "+props.currentProject.languages}</li>
            </ul>

            <ul className="list-none margin-top-5">
              <li className="heading_list medium-heading work white_text"><strong>Description</strong></li>
              <li className="heading_list medium-heading work white_text">{props.currentProject.description}</li>
            </ul>

          </div>

          <div className="col-5 project-col"style={{borderLeft:"1px solid white",paddingLeft:"5%"}}>

            <ul className="list-none margin-top-5">
              <li className="heading_list medium-heading work white_text"><strong>Published:</strong> {" "+props.currentProject.published}</li>
              </ul>

              <ul className="list-none margin-top-5" >
                <li className="heading_list  medium-heading work white_text"><strong>Platform:</strong>{" "+props.currentProject.platform}</li>
              </ul>

              <ul  className="list-none margin-top-5" >
                <li className="heading_list medium-heading work white_text"><strong>Type:</strong>{" "+props.currentProject.type}</li>
              </ul>

          </div>

        </div>

      </div>
  )
}


export default ProjectDetails
