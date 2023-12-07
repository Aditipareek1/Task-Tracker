import React from "react";

const ItemList =(props)=>{
    // const deleteItems=()=>{
    //     console.log(props.id);
    // }

    return (
        <>
        <div className="todo_style">
            <i className="fa fa-times-circle" aria-hidden="true" onClick={()=>{
                props.onSelect(props.id)
            }}/>
        <li>{props.text}</li>
        </div>
        </>
    )
}

export default ItemList