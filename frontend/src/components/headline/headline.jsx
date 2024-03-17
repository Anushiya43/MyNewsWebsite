import React from 'react'
import { banner1 } from '../../assets'

export default function HeadLine({data}) {
  return (
    <div className='col-12'>
        <div class="card">
        <div class="card-header">
            HeadLine
        </div>
        { data.map((d)=>{
           return (<div class="card-body" key={d.id}>  
            <h3>{d.name}</h3>
            <p>{d.category}</p>
            <p>{d.description}</p>
            <a href={d.url} >{d.url}</a> 
            <hr/> 
            </div>)
          })
        } 
          
        
</div>
    </div>
  )
}
