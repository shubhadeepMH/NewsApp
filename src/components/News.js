import React, { useState } from 'react'
import Card from './Card'
import Api from './Api'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner'




// let url = "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=29a0e24385744e67bc99d807f12f0f27"



export default function (props) {
  const [key, setApi] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${props.category}&sortBy=publishedAt&apiKey=29a0e24385744e67bc99d807f12f0f27`
    axios.get(url).then((response) => {
      // console.log(response.data.articles);
      setApi(response.data.articles);
    })


  });
  return (

    <div >
      <h1 className='text-center'> <strong>News-View</strong> </h1>
      <h1 className='text-center text-2xl italic'> Top--HeadLines </h1>

      {key.length == 0 && <div className="img text-center content-center align-middle justify-center justify-items-center flex mt-60">{<Spinner />}</div>
      }
      <div className="container  flex">

        <div className="NewsItem  grid my-5 lg:grid-cols-1 xxl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-3 md:grid-cols-2 ">

          {

            key.map((element) => {
              return (

                <Card key={element.url} title={element.title} description={(element.description!=null)?element.description.slice(0,100):element.description} urlToImage={element.urlToImage} url={(element.url != null) ? element.url : "/"} />)

            })}




        </div>
      </div>







    </div>
  )
}





