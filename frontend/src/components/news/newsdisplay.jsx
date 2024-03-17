import React from 'react'
import { banner1 } from '../../assets'

export default function NewsDisplay({data}) {
  const s = location.pathname.split("/")[1];
  return (
    <div className='col-12'>
        {console.log("oo",s)}
        { data .map((d)=>{
          if (d.name.toLowerCase().includes(s)){
            return (<div class="card-body" key={d.id}>  
              <h3>{d.name}</h3>
              <p>{d.category}</p>
              <p>{d.description}</p>
              <a href={d.url} >{d.url}</a> 
              <hr/> 
              </div>)}            
          else if (d.category.toLowerCase().includes(s)) {
            return (<div class="card-body" key={d.id}>  
              <h3>{d.name}</h3>
              <p>{d.category}</p>
              <p>{d.description}</p>
              <a href={d.url} >{d.url}</a>  
              <hr/>
              </div>)}
          else {
            
          } 
})}
          
    </div>
  )
}
