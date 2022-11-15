import LandingPage from "./containers/landing_page";
import AboutPage from "./containers/about_page";
import Navbar from "./components/general/navbar.js";
import Footer from "./components/general/footer.js";
import React from "react";
import "./css/animations.css";
import ProjectRenderer from "./containers/project_renderer";
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      url:"/",
      currentProject:null
    }
    this.ChangeURL = this.ChangeURL.bind(this);
  }

  ChangeURL(url){
    this.setState({url:url})
  }

  renderDecider = () => {
    if(this.state.url == "/"){
      return <LandingPage />
    }else if(this.state.url == "/about"){
      return <AboutPage />
    }else if(this.state.url == "/portfolio" || this.state.url == "/project"){
      return <ProjectRenderer ChangeURL={this.ChangeURL} url = {this.state.url}/>
    }else{
      return <div />
    }
  }

  render(){
    return(
      <div>
      <Navbar ChangeURL = {this.ChangeURL}/>
        {this.renderDecider()}


      </div>
    )
}
}


export default App;
