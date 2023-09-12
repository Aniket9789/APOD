import React,{useState} from 'react'
import axios from "axios"
import "./fetch.css"
function Fatchdata() {
    const [nasa,setNasa] = useState([])
    const fetchapi=()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yjPDY13FT3vT6rdf7rvW06MZFmSc71nRjhVcF1Vl')
        .then((response)=>{
            setNasa(response.data)
        })
    }
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-4">
                <button onClick={fetchapi} className='btn'>click</button>
                <h1 className='heading1'>{nasa.title}</h1>
                <h1 className='heading2'>{nasa.date}</h1>
                <img src={nasa.url} className='img'/>
                <p className='pera'>{nasa.explanation}</p>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Fatchdata
