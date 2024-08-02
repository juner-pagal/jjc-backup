import Navbar from "./Navbar";
import React from 'react';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CardServices from './CardServices';
import Services from "./Services";

function Dashboard () {

        const url = "http://localhost/kodego/jjc/jjc.php";
        const [arr, setArr] = useState([]);
        const navigate = useNavigate();
 
        useEffect(() => {
            if (sessionStorage.getItem('login')){
                axios.get(url).then((response)=>{
                    setArr(response.data)
                });
            }else{
                navigate('/login');
            }
        }, []);

        const Logout = () => {
            sessionStorage.removeItem('login');
            navigate('/login');
        }

    return (
        <>
        <Navbar />
        <div className='m-auto p-5'>
            <button className='btn btn-secondary ms-3' onClick={Logout}>Logout</button><br></br>
            <CardServices arr={arr} setArr={setArr} />
            <Services arr={arr} setArr={setArr} />
        </div>

        </>
    )
}
 
export default Dashboard;