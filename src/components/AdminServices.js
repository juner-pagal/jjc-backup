import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes, withRouter, useFetcher} from 'react-router-dom';

import axios from 'axios';

function App() {

  const [services, setServices] = useState();
  const [description, setDescription] = useState();
  const [pic, setPic] = useState();
  const [prev, setPrev] = useState();
  const [arr, setArr] = useState([]);
  const url = "http://localhost/kodego/jjc/jjc.php";
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let getData = new FormData();
    getData.append('services', services);
    getData.append('description', description);
    getData.append('pic', pic);
    getData.append('function', 'insert');

    axios({
      method: 'POST',
      url: 'http://localhost/kodego/jjc/jjc.php',
      data: getData,
      config: {header:'Content-Type: multipart/form-data'}
    }).then(function() {
      axios.get(url).then((response) => {
        setArr(response.data);
        setServices("");
        setDescription("");
        setPic("");
      })
    })
  }

  const DelBtn = (e) =>{
    let getData = new FormData();
    getData.append('id', e.currentTarget.id)
    getData.append('function', 'delete');
    axios({
      method: 'POST',
      url: 'http://localhost/kodego/jjc/jjc.php',
      data: getData,
    }).then(function() {
      axios.get(url).then((response) => {
        setArr(response.data);
        setServices("");
        setDescription("");
      })
    })
  }

  const UpBtn = (e) =>{
    // alert(e.currentTarget.id);
    let getData = new FormData();
    getData.append('function', 'update');
    getData.append('upid', e.currentTarget.title);
    getData.append('upservices', document.getElementById("upservices"+ e.currentTarget.title).value);
    getData.append('updescription', document.getElementById("updescription"+ e.currentTarget.title).value);
    
   

    axios({
      method: 'POST',
      url: 'http://localhost/kodego/jjc/jjc.php',
      data: getData,
    }).then(function() {
      axios.get(url).then((response) => {
        setArr(response.data);
        setServices("");
        setDescription("");
        alert("Data Updated Successfully!")
      })
    })
  }

  useEffect(() => {
    
    axios.get(url).then((response) => {
      // console.log(response.data);
      setArr(response.data);
    })

  },[]);

  const preview = (e) => {
    setPic(e.target.files[0]);
    setPrev(URL.createObjectURL(e.target.files[0]));
  }

  const Logout = () => {
    sessionStorage.removeItem('admin-login');
    navigate('/admin-login');
}

  return (
    <>
    {/* <main className='container'>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-student" element={<ListStudent />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/edit-student" element={<EditStudent />} />
          </Routes>
        </div>
      </Router>
    </main> */}

   


    <div className='container'>
      <div className='col-md-12 mt-5'>
      <p><Link to="/admin-dashboard" className="link-opacity-75">Go Back to Admin Dashboard</Link></p>
      <div className='col-md-2'><p className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{cursor: "pointer"}} onClick={Logout}>Logout</p></div>
      <button className='btn btn-primary mt-1' data-bs-toggle="modal" data-bs-target="#addModal">Add Services</button>
        <table className='table table-striped table-bordered mt-5'>
        <thead>
          <th>Name of Services:</th>
          <th>Description:</th>
          <th>Image:</th>
          <th>Action:</th>
        </thead>
        {arr.map((val) => {
          return(

            <tr key={val.id}>

          <td>{val.services}<br></br></td>
          <td><div className='col-md-8'>{val.description}</div><br></br></td>
          <td><div className='col-md-4'><img src={val.image} style={{width: "100px"}} alt={val.image} /></div> <br></br></td>
            <td><div className='col-md-4'>
              <button className='btn btn-danger mt-3' data-bs-toggle="modal" data-bs-target={"#deleteModal"+val.id}> Delete </button>
              <button className='btn btn-success mt-3' data-bs-toggle="modal" data-bs-target={"#exampleModal"+val.id} title={val.id} >Update</button>
            </div>
            </td>


            {/* <!-- Delete Modal --> */}
            <div class="modal fade" id={"deleteModal"+val.id} tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-6" id="deleteModalLabel">Delete Confirmation</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h1 class="display-6">Are you sure to delete?</h1>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                      <button className='btn btn-success mt-1' data-bs-dismiss="modal" id={val.id} onClick={DelBtn}>Yes</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Update Modal --> */}
              <div class="modal fade" id={"exampleModal"+val.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Update Services</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <input type='text' name='upservices' id={'upservices'+val.id} defaultValue={val.services} onChange={(e) => e.target.value} className='form-control' /><br></br>
                    <textarea name='updescription' id={'updescription'+val.id} defaultValue={val.description} onChange={(e) => e.target.value} className='form-control' ></textarea><br></br>
                    <img src={val.image} style={{width: "100px"}} /><br></br>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button className='btn btn-success mt-1' data-bs-dismiss="modal" title={val.id} onClick={UpBtn}>Update</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Add Modal --> */}
              <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="addModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form enctype='multipart/form-data'>
                        Service's Name: <input type='text' name='services' id='services' value={services} onChange={(e) => setServices(e.target.value)} className='form-control' /><br></br>
                        Description: <textarea name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control'></textarea><br></br>
                        Image: <input type='file' name="pic" id="pic" onChange={preview} className='form-control' />
                        <img src={prev} style={{width: "100px"}} />
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type='submit' className='btn btn-primary' data-bs-dismiss="modal" onClick={handleFormSubmit}>submit</button>
                    </div>
                  </div>
                </div>
              </div>
            
            </tr>
          )})}
        
      </table>
      </div>
    </div>
    
    </>
  );  
}

export default App;
