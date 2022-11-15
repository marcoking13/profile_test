const OverlayedBoxes = (props) => {

  return(

    <div className="row width-100 absolute z-99-negative margin-left-2_5" >

        <div className="col-3 padding-0 margin-left-5">
          <div className="jumbotron padding-0 margin-0 border-radius-10 padding-bottom-20 width-100 z-index-99">
            <img  className="width-100 border-radius-10" style={{height:"500px"}}src={process.env.PUBLIC_URL+"/imgs/gem-cart-splash.png"}/>
          </div>
        </div>

        <div className="col-4 padding-0 margin-0 ">
          <div className="jumbotron width-100 padding-bottom-20" >
            <img src={process.env.PUBLIC_URL+"/imgs/ez-eatz-splash.png"} style={{height:"600px"}}className="z-index-50 view_game_2 margin-top-15 relative border-radius-10 z-index-100-negative"/>
         </div>
       </div>

      <div className="col-4 margin-0 padding-0">
        <div className="jumbotron width-100 padding-bottom-20" >
          <img src={process.env.PUBLIC_URL+"/imgs/music-bender-splash.png"} style={{height:"500px"}}className="width-100 z-index-0 view_game_3 border-radius-10 relative margin-top-5"/>
        </div>
     </div>

    </div>

  );

}

export default OverlayedBoxes;
