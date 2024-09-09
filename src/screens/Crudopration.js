import React from 'react'
import { Userdata } from './Userdata';
import { useEffect, useState } from 'react';


function Crudopration() {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(Userdata)
    },[]) 
  
    const handleEdit = ((id) => {
      setisUpdate(true);
      const dt = data.filter(item => item.id === id);
      if(dt !== undefined){
        setId(id);
        setFirstName(dt[0].name);
        setEmail(dt[0].email);
        setAddress(dt[0].address);
      }
    })
  
    const handleDelete = ((id) =>{
      if(id > 0){
        if(window.confirm('Delete the Data')){
          const dt = data.filter(item => item.id !== id);
          setData(dt);
        }
      }
    })
  
    const [name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [id, setId] = useState(0);
    const [isUpdate, setisUpdate] = useState(false);
  
  
  
    const handleSave = (() => {
  
    })
  
    const handleUpdate = () => { 
      const index = data.map((item) => {
        return item.id
      }).indexOf(id)
  
      const dt = [...data];
      dt[index].name = name;
      dt[index].email = email;
      dt[index].address = address;
  
      setData(dt);
      handleClear();
    }
  
    const handleClear = (() => {
      setId(0);
      setFirstName('');
      setEmail('');
      setAddress('');
      setisUpdate(false);
    })
  
    return (
      <>
          <div>
            <label>First Name:
              <input type='text' placeholder='Enter Name' onChange={(e) => setFirstName(e.target.value)} value={name} />
            </label>
            <label>
              Email:
              <input type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
              Address:
              <input type='text' placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)} value={address} />
            </label>
  
            {
              !isUpdate ?
            <button className='btn btn-success' onClick={() => handleSave}>Save</button>
              :
            <button className='btn btn-primary' onClick={() => handleUpdate}>Update</button> 
  
            }
            <button className='btn btn-info' onClick={() => handleClear()}>Clear</button>
          </div>
  
          <table className='table table-hover'>
            <tr>
              <td>Sr.No</td>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Address</td>
              <td >Actions</td>
            </tr>
            <tbody>
              {
                data.map((item, index) => {
                  return(
                    <tr >
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>
                          <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                          <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                  )
                }) 
              }
            </tbody>
          </table>
      </>
    );
}

export default Crudopration
