import React, { useState, useEffect } from 'react';
function Carousel(){

    const url = "https://junerpagal.com/api-kodego/carousel_data/read.php";
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            setCarouselData(data.data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
        <div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                {carouselData.slice(0, 3).map((item, index) => (
                    <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
                </div>
                <div className="carousel-inner">
                {carouselData.slice(0, 3).map((item, index) => (
                    <div key={index} className={`carousel-item c-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
                    <img src={item.image_url} className="d-block w-100 c-image" alt={item.h1_desc} />
                    <div className="carousel-caption top-0 mt-4">
                        <p className="mt-5 fs-3 text-uppercase">{item.p_desc}</p>
                        <h1 className="display-2 fw-bolder text-capitalize">{item.h1_desc}</h1>
                        <h6 className="display-6">{item.h6_desc}</h6>
                    </div>
                    </div>
                ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default Carousel;