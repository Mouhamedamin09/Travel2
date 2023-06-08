import React from 'react'


function Card(props){
    return(
        <div className='Bigcont'>
        <div className='Tcontainer'>
        <img src={props.item.image} width={300} alt={props.item.PlaceName} />    
        <div className='container'>
            
            <div className='Place'>
                <div className='country'>
                <i className="fa-solid fa-location-dot"></i>
                <p>{props.item.country}</p>
                </div>
                <a href={props.item.MapLink} >View on Google map</a>
            </div>
            <h1>{props.item.PlaceName}</h1>
            <div className='Time'>
                <span>{props.item.Depart}-</span>
                <span>{props.item.End}</span>
            </div>
            <p>{props.item.info}</p>

        </div>
        </div>
        </div>
    )
}
export default Card;