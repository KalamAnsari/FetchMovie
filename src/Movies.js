
import React from "react";
import './Movies.css'

const Movies=(props)=>{
    // console.log(props.value)
    return <div className="movies">
        <h1>{props.value.title}</h1>
        {/* <p>{props.value.opening_crawl}</p> */}
        <p>{props.value.description}</p>
        <p>{props.value.movieDate}</p>
    </div>

}

export default Movies