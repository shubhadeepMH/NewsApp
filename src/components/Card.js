import React from 'react'

export default function Card(props) {
  return (
    <div >
    <div className="card  mx-2 my-2 ">
    <div className="col  flex">
          <div className="card  shadow-sm w-96">
                <img  className="bd-placeholder-img h-40 card-img-top" width="100%" height="225" src={(props.urlToImage!=null)?props.urlToImage:"logo192.png"}alt="" />
                    <strong key={props.url} className='ml-1'>{(props.title!=null)?props.title:"hello world"}...</strong>
            <div className="card-body h-36">
              <p className="card-text">{(props.description!=null)?props.description:"hello world"}...</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" > <a href={props.url} target="_blank">Read More</a></button>
                 
                </div>
               
              </div>
            </div>
          </div>
        </div>


    </div>
      
    </div>
  )
}
