import ProfilePhoto from "./../../imgs/profile.png";

const AboutMeSection = (props) =>{
  return(
    <div className="row padding-bottom-5 active_transition" >

      <div className="col-5 margin-left-5">
        <h2 className="white_color work sublime_orange_text">About Me </h2>
        <br />
        <h6 className="white_color line-height-2 font-size-20 work">   Ever since I can remember I had a passion for programming and the things that it can create.
          As a kid I would play Halo 3 all day with my friends and I still have fond memories of all strategizing, bickering, and especially the payoff of winning at the end of a intense match
          My obession with video games eventually got me curious in how games and computers worked. When I was around 13, Me and my best friend got computer parts deliverd and worked all week trying to put it together
          It was one of the most satisfying feelings to be able to play games and watch videos on something that I created
          and it inspired me to pursue a career in coding. </h6>
      </div>
      <div className="col-6">
        <img src = {ProfilePhoto} className="width-100 transition_full_opacity"/>
      </div>

    </div>
  )
}


export default AboutMeSection;
