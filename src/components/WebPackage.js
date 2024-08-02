import React, { useState, useEffect } from 'react';
function WebPackage() {

        const url = "https://junerpagal.com/api-kodego/package/read.php";
        const [packageData, setPackageData] = useState([]);
      
        useEffect(() => {
          fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data.data);
              setPackageData(data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
        }, []);

    return(
        <>
        <div className="web-packages text-center">
            <h1 className="display-2 fw-bolder container-padder">Web Development Packages</h1>
            <p className='fw-bold fs-4'>Based on market demand, we have created 3 packages<br/> that will
            cover all your business needs .</p><br/>
            <div className='container'>
                <div className="row">
                {packageData.slice(0, 3).map((item, index) => (
                    <div className="col-md-4" style={{margin:"20px 0px"}}>
                        
                            <div key={index} className= {`${index === 1 ? 'box-recommended' : 'p-box'} h-100`}>
                            <p className='fw-bolder fs-3'>{item.title}</p>
                            <br/>
                            <img src={item.image_url}  alt={item.title}/>
                            <p className='fw-bold fs-2'><sup>$</sup>{item.price}<sub>/{item.payment_mode}</sub></p>
                            </div>
                    </div> 
                ))}
                </div>
            </div>
        </div>
        
        </>
    )
}

export default WebPackage;