import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [searchData,setSearchData]=useState("")
  return (
    <div className='col-12'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">BBC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/sports">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/entertainment">Entertainment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/business">Business</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/local">Local News</a>
            </li>
      
          <li>
          <form class="form-inline my-2 my-lg-0 ">
            <input class="form-control mr-sm-2" 
              type="search"
              value={searchData}
              onChange={(e)=>{setSearchData(e.target.value)}}
              aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" 
              type="submit"><Link to={`/${searchData}`}>Search</Link></button>
          </form>
         </li> 
         </ul>
        </div>        
      </nav>
  </div>
  )
}
