import React from 'react';
// import View from './View';
// import Edit from './Edit';
// import Delete from './Delete';


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


                    {/* <div className='card-footer text-center'>
                    <button id={"view"+item.id} className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target={"#viewModal"+item.id}>View</button>
                    <button id={"edit"+item.id} className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target={"#editModal"+item.id}>Edit</button>
                    <button id={"del"+item.id} className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={"#delModal"+item.id}>Delete</button>
                    </div> */}
                    {/* <View id={item.id} name={item.services} email={item.description} />
                    <Edit id={item.id} name={item.services} email={item.description}  arr={arr} setArr={setArr} />
                    <Delete id={item.id} name={item.services} email={item.description}  arr={arr} setArr={setArr} /> */}
                </div>
            
                    
                
                </>
                )
            })}
        
        </>
    )

}

export default CardServices;