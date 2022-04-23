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
        <div className={style.Header}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input {...queryInputRegister_1} className='input' placeholder='Name of city'/>
                <input {...queryInputRegister_2} className='input' placeholder='Name of city'/>
                <button className='button'>
                    Go
                </button>
            </form>
            
        </div>
    )
}


export default Header

