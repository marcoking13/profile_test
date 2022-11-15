
const AbsoluteBackground = (props) => {

  var content = null;

  if(props.isVideo){
    content =  (
      <video  autoPlay mute  >
        <source className="absolute_video absolute width-100"  src= {process.env.PUBLIC_URL+props.link + props.extension} ></source>
      </video>
    );

  }
  else{

    content =  (
      <img className="absolute_image absolute width-100" style={{height:props.height,width:"110%",left:"-1%"}}src={process.env.PUBLIC_URL + props.link + props.extension} />
    );

  }

  return(
    <div className="absolute_background" style={{width:"100%",position:"relative",zIndex:"-99"}}>
      {content}
    </div>
   )

 }


export default AbsoluteBackground;
