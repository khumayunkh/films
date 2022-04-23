import React, {useState, useEffect} from "react";
import style from './Header.module.css'
import {useForm} from 'react-hook-form'
import axios from "axios";

function Header(){
    const [movies, setMovies] = useState([])
    const {register, handleSubmit, reset, watch} = useForm()

    const queryInputRegister_1 = register('title')  
    const queryInputRegister_2 = register('year') 


    const onSubmit = async (data)=>{
        const payload ={
            apikey: '254cd296',
            t: data.title,
            y: data.year,
            plot: 'full'
          }
        const response = await axios.get(`http://www.omdbapi.com/`, {params:payload})
        console.log(response.data)
        setMovies(response.data)
        
        reset()
      }
      return(
        <>
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.title}><h1>Created by Khumoyun</h1></div>
                    <div className={style.input}>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <input {...queryInputRegister_1} className={style.input} placeholder='Name of film'/>
                            <input {...queryInputRegister_2} className={style.input} placeholder='year'/>
                            <button className='button'>
                                 Go
                            </button>
                        </form>
                    </div>
                    <div className={style.film}>
                        <div className={style.img}>
                            <img src={movies.Poster}/>
                            <h2>{movies.Title}</h2>
                            <h2>{movies.Actors}</h2>
                        </div>
                        <div className={style.subtitle}>
                            <h1>{movies.imdbRating}</h1>
                            <h3>{movies.Plot}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
    {/* // return(
    //     <div className={style.Header}>
    //         <form  onSubmit={handleSubmit(onSubmit)}>
    //             <input {...queryInputRegister_1} className='input' placeholder='Name of film'/>
    //             <input {...queryInputRegister_2} className='input' placeholder='year'/>
    //             <button className='button'>
    //                 Go
    //             </button>
    //         </form>
    //         <div>
    //             {movies.Title}
    //             <img src={movies.Poster} alt="" />
    //         </div>
    //     </div>
    // ) */}
}


export default Header

