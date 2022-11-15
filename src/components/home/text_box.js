



  const TextBox = () => {
    return(
      <div className="view_all_games_row row width-100 absolute z-99 margin-bottom-40 arrow_change_color" >
        <div className="col-1"/>

        <div className="col-4">
          <div className="view_all_games_text_container smoky-black-background sublime-orange-border-thick jumbotron padding-5 margin-top-10 width-100 border-radius-10" >
            <div className="row">
              <br />
              <p className="sublime_orange_text margin-top-5 text-center work medium-heading small-spacing"style={{fontSize:"50px",}}> View All Projects</p>
              <p className="sublime_orange_text text-center work large-spacing"style={{fontSize:"20px"}}> Check out all my projects here!</p>
              <br />
              <br />
              <img src={process.env.PUBLIC_URL + "/imgs/arrow_icon.png"} className="margin-top-5 view_all_games_arrow"/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }

  export default TextBox;
