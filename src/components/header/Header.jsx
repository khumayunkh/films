import React, {useState, useEffect} from "react";
import style from './Header.module.css'
import {useForm} from 'react-hook-form'
import axios from "axios";

function Header(){
    const [movies, setMovies] = useState([])
    const {register, handleSubmit, reset, watch} = useForm()

    const queryInputRegister_1 = register('queryInput_1')  
    const queryInputRegister_2 = register('queryInput_2') 
    const queryInput_1 =  watch ('queryInput_1') 
    const queryInput_2 =  watch ('queryInput_2') 


    const onSubmit = async (data)=>{
        const response = await axios.get(`http://www.omdbapi.com/?t=${queryInput_1}%2B1&y=${queryInput_2}&plot=full`)
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

