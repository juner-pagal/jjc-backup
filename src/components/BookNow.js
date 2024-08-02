import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const BookNow = ({id, services, img, description, setArr}) => {
    // const nav = useNavigate();
    const [date, setDate] = useState();
    // const [description, setDescription] = useState(description);
    const url = "http://localhost/kodego/jjc/jjc.php";

    const formSubmit = (e) =>{
        // console.log(name, email, password);
        // alert(e.currentTarget.title);
        // e.preventDefault();
        let getData = new FormData();
        getData.append('bookid', e.currentTarget.title);
        getData.append('services', services);
        getData.append('description', description);
        getData.append('date',e.currentTarget.value )
        getData.append('function', 'book');

        axios(
            {method : 'POST',
            data : getData,
            url : url,
            config: {header:'Content-Type: multipart/form-data'}
        }).then((res) => {
            alert("success");
            axios.get(url).then((response) => {
                setArr(response.data)
            });
        });
    }

    return(
        <div>
           

            {/* <!-- Edit Modal --> */}
            <div className="modal fade" id={"bookModal"+id} tabindex="-1" aria-labelledby="bookModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="bookModalLabel">Book Now</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        Service's Name: <br></br>
                        <input type='text' id='services' name='services' value={services} className='form-control' disabled/><br></br>
                        <img src={img} style={{width: "150px"}} /> <br></br>
                        Description: <br></br>
                        <input type='text' id='description' name='description' value={description} className='form-control' disabled /><br></br>
                        <input type='date' name='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} className='form-control'/>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" title={id} onClick={formSubmit} data-bs-dismiss="modal">Confirm Booking</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BookNow;