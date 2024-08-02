import React from 'react';
import {useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardServices from './CardServices';
import axios from 'axios';

const AdminDashboard = () => {

        const url = "http://localhost/kodego/jjc/jjc.php";
        const [arr, setArr] = useState([]);
        const navigate = useNavigate();
 
        useEffect(() => {
            if (sessionStorage.getItem('admin-login')){
                axios.get(url).then((response)=>{
                    setArr(response.data)
                });
            }else{
                navigate('/admin-login');
            }
        }, []);
    const Logout = () => {
        sessionStorage.removeItem('admin-login');
        navigate('/admin-login');
    }
    return(
        <>
        
        <div className='container'>
            <div><h1 className='display-5 text-center mt-5'>JJC Admin Dashboard</h1></div>
                <div className='row'>
                    <div className='col-md-3 border-end'>
                        <div className='d-grid gap-2'>
                            <Link to="/admin-services">
                                <div className='d-grid gap-2'>
                                    <button type='button' className='btn btn-primary p-5'>Services</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-3 border-end'>
                        <div className='d-grid gap-2'>
                            <Link to="/admin-role-pricing">
                                <div className='d-grid gap-2'>
                                    <button type='button' className='btn btn-primary p-5'>Role & Pricing</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-3 border-end'>
                        <div className='d-grid gap-2'>
                            <Link to="/view-booking">
                                <div className='d-grid gap-2'>
                                <button type='button' className='btn btn-primary p-5'>View Booking</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='col-md-3 border-end'>
                        <div className='d-grid gap-2'>
                            <Link to="/register-admin">
                                <div className='d-grid gap-2'>
                                    <button type='button' className='btn btn-primary p-5'>Register New Admin</button>
                                </div>
                            </Link>
                        </div>
                    </div>   
                            
                            
                            
                            <button type='button' onClick={Logout} className='btn btn-secondary mt-3'>Logout</button>
                        </div>
                    </div>

            </>
    )
}

export default AdminDashboard;

