
import React from "react";
import './Movies.css'

const Movies=(props)=>{
    console.log(props.value.title==="")
    let Empty=props.value.title==="";
    console.log(Empty,"em")
    return <div className="movies">
        <h1>{!Empty ? props.value.title :"null"}</h1>
        <p>{!Empty ? props.value.description:"null"}</p>
        <p>{!Empty ? props.value.movieDate:"null"}</p>
    </div>

}

export default Movies