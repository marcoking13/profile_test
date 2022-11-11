import OverlayedBoxes from "./overlayed_boxes.js";
import TextBox from "./text_box.js";

const ViewAllGamesSection = (props)=>{

  return(

        <div className="absolute width-100 view_all_games margin-bottom-40 margin-left-1 padding-bottom-40" >
          <TextBox/>
          <OverlayedBoxes />
        </div>

    );
    
}



export default ViewAllGamesSection;
