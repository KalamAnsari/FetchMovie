import './App.css';
import Movies from './Movies';
import { useState, useEffect, useCallback} from 'react';
import AddMovies from './AddMovies';

function App() {
  const [movies, setMovies]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error, setError]=useState(null);

 

  const fetchMoviesHandler=useCallback( async()=>{
    
    setIsLoading(true)
    setError(null);

    try{

      // fetch('https://swapi.dev/api//films').then((response)=>{return response.json()}).then((data)=>{
        //   console.log(data)
        // })
        // OR ====>
        // const response=await fetch('https://swapi.dev/api//films');
        const response=await fetch('https://react-http-7237e-default-rtdb.firebaseio.com/movies.json');


        if(!response.ok){
          throw new Error('Some Error Occured!');
        }
        
        const data=await response.json();
        // setMovies(data.results);
        
        // console.log(data);
        //Need to transfer Data in array then setMovies


        // Object.entries(data);

        // const MOVIES=Object.values(data);

        // setMovies(MOVIES)

        // OR there Is another logic for transfer object into array

        const loadedMovies=[];

        for(const key in data){
          console.log(key)
          loadedMovies.push({
            id:key,
            title:data[key].title,
            description:data[key].description,
            movieDate:data[key].movieDate
          })

        }
       
        setMovies(loadedMovies);

        setIsLoading(false);
      }catch(error){
        
        setError(error.message)
        setIsLoading(false);
      }
    },[]);
    useEffect(()=>{
      fetchMoviesHandler();
    },[fetchMoviesHandler]);
 
    const addMovieHandler=async(movie)=>{
      console.log("Add movie",movie)
     const response= await fetch('https://react-http-7237e-default-rtdb.firebaseio.com/movies.json',{
        method:'POST',
        body:JSON.stringify(movie),
        headers:{
          'Content-Type':'application/json'
        }
      });

      const data=await response.json();
      console.log(data,"ddfdfdfdfdfdf")

    }

  return (
    <div className="App">
          <section>
            <AddMovies onAddMovie={addMovieHandler}/>
          </section>
         <div className='container'>
          
          <button onClick={fetchMoviesHandler}>fetch movies </button>
          {!isLoading && 
          <div className="movieList">
          {movies.map((value)=><Movies key={value.episode_id} value={value}/>)}
          </div>
          }
          {
            isLoading && <p style={{background:"red"}}> Loading....</p>
          }
          {
            error
          }
          </div>    
    </div>
  );
}

export default App;
