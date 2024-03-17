import React from 'react'
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import HeadLine from '../components/headline/headline'
import NewsDisplay from '../components/news/newsdisplay'


export default function Home({data}) {
  return (
    <div className='container'>
      <div className='row'>
        <Header></Header>
        <Banner></Banner>
        <HeadLine data={data}></HeadLine>
        
      </div>
    </div>
  )
}
