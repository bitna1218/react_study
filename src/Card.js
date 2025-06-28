import React from 'react';

function Card(props){

    return(

        <div className="w-1/6 rounded-md border-2 text-center h-1/4">
          <img className="w-1/2 mx-auto" src={props.img}/>
          <div className="mt-3 text-base font-black">{props.name}</div>
          <div className="font-light text-sm text-gray-400">{props.role}</div>
        </div>

    )

}

export default Card

