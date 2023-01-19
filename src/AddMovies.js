import React from "react";
import './AddMovies.css';
import { useRef } from "react";

const AddMovies=(props)=>{

    const titleInput=useRef();
    const description=useRef();
    const movieDate=useRef();
 
    const formHandler=(event)=>{
        event.preventDefault();
        console.log("preventDefalt!");
        
        const movie={
            title:titleInput.current.value,
            description:description.current.value,
            movieDate:movieDate.current.value,
        }

        // console.log(movie,"geting movies")
        props.onAddMovie(movie)


    }

    return <div className="add-movies">
        <h1>Add Movies form</h1>
        <form onSubmit={formHandler} >

        <label htmlFor="title">
          title:  <input type="text"  ref={titleInput}/>
        </label>
        <label htmlFor="title">
           description: <input type="text" ref={description} />
        </label>
        <label htmlFor="title">
           date <input type="text"  ref={movieDate}/>
        </label>
        <button type="submit">addMovie</button>
        </form>
    </div>
}

export default  AddMovies