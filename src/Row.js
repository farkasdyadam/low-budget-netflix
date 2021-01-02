import React,{useState,useEffect} from "react";
import axios from "./axios";


const Row=({title,fetchUrl,isLarge})=>{
    const baseURL="https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    },[fetchUrl]);

    //console.log(movies);




return(
    <div>
        <div className="row">
        <h2>{title}</h2>
        <div className="row_img"/**row__posters */>
            {movies.map(item=>(
                <img 
                className={`poster ${isLarge && "porster_large" }`} /**row__poster */ 
                src={`${baseURL}${isLarge ? item.poster_path: item.backdrop_path}`} 
                alt={item.name}
                key={item.name}/>
             ))}
        </div>
     
        </div>
    </div>    
)}

export default Row;