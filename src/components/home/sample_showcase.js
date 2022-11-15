
import ProjectEmbed from "./../project/project_embed";
import React from "react";

class SampleShowcase extends React.Component{

  render(){


    return (

          <div className="project_box">

            <div className="title_icon row margin-top-2_5">
              <div className="col-2"/>

              <div className="col-7">
                <div className="row">

                <div className="col-4">
                  <p className="game_name italic text-align-left work sublime_orange_text  padding-right-20 float-left width-100 transition_color_orange" > {this.props.gameName} </p>
                </div>

                <div className="col-2">
                  <img className="width-50 float-left game_check_out  relative"src = {process.env.PUBLIC_URL+"/imgs/arrow_icon.png"} />
                </div>

                </div>
              </div>

              <div className="col-1 no_padding_no_margin"/>

            </div>

            <div className="row width-100 ">

              <div className="col-2 no_padding_no_margin margin-top-10">
                <p className="rotated_project_text big-heading rotate-negative-90 work relative width-100 margin-top-20 sublime_orange_text transition_color_orange">{this.props.gameType}</p>
              </div>

              <ProjectEmbed embed = {this.props.gameEmbed} colSize="col-10"/>

            </div>

              <div className="row margin-top-5">

                <div className="col-2"/>
                  <div className="col-10">
                      <p className="project_subheading regular-font medium-heading sublime_orange_text work  margin-top-5 ">{` Created With: ${this.props.languages}`}</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="medium-font work light-font margin-top-5 white_color line-height-2 paragraph_game ">
                          {this.props.description}
                        </p>
                      </div>
                    <div className="row">

                      <div className="col-2"/>
                          <div className="col-2">
                            <br />
                            <button className="btn white_color border-cut-big border-white-medium sublime-orange-background transparent-background orange_button view_game width-100 margin-top-10"> View Game </button>
                         </div>
                       </div>
                     </div>
                  </div>
               </div>

              <div className="divider_white margin-top-5"/>

              <br />
              <br />

          </div>
    )
}
}

export default SampleShowcase;
