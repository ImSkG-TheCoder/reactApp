import React from "react";

function Textarea(props){
    return <div>
        <textarea name={props.name}  rows={props.rows} cols={props.cols} placeholder={props.placeholder} />
    </div>
}

export default Textarea;