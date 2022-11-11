

import React,{useState,useEffect,useRef} from "react";


const Dropdown = (props) =>{
const [open,setOpen] = useState(null);

const ref = useRef();
  useEffect((event)=>{
    const handler = (event)=>{

      if(ref.current.contains(event.target)){
        return;
      }
      setOpen(false);

    }

    document.body.addEventListener("click",handler);

    return () =>{
      document.body.removeEventListener("click",handler);
    }

  },[]);

  const renderList = props.items.map((item,index)=>{
    if(item.name === props.selected.name){
      return null;
    }
    return(
      <div className="item profile_item"
      onClick = {(event)=>{
        props.SelectItem(item,index);
      }}
      >
      {item.name}
      </div>
    )
  })
return (


  <div className="ui orange_text form width-90 margin-left-5 margin-top-5 toggle_between_projects"  ref = {ref}>
    <h2 className="text-center work white_text">{props.heading}</h2>
    <div className="field">
      <label className="label">{props.heading}</label>
        <div
        onClick = {()=>{
          console.log(open)
          setOpen(!open);
        }}
        className={`ui selection profile_dropdown dropdown ${open == true ? "visible active":" "}`} >
          <i className="dropdown icon profile_dropdown"></i>
          <div className="text profile_dropdown">{props.selected.name}</div>
          <div className={`menu  ${open == true?"visible transition":" "} `}>
            {renderList}
          </div>
        </div>
    </div>
    </div>


)
}

export default Dropdown;
