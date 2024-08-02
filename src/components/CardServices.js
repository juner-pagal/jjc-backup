import React from 'react';
import BookNow from './BookNow';



function CardServices({arr, setArr}) {

    return(
        <>
        {arr.map((item) => {
                return(
                <>
                <div className='d-inline-block m-auto p-3'>  
                    <div className="card h-100" style={{width: "18rem"}}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{item.services}</h5>
                                                    
                        <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    
                    {/* <div className="card" style={{width: "18rem"}}>
                        <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.services}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div> */}


                    <div className='card-footer text-center'>
                    
                    <button id={"book"+item.id} className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target={"#bookModal"+item.id}>Book Now</button>
                    
                    </div>
                    
                    <BookNow id={item.id} services={item.services} description={item.description} img={item.image}  arr={arr} setArr={setArr} />
                    
                </div>
            
                    
                
                </>
                )
            })}
        
        </>
    )

}

export default CardServices;