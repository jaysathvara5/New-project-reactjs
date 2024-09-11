import React from 'react'
import Title from './Title'

function Loginform() {
  return (
    <div>
        <div className='login-form'>
            <h1>Registration Form</h1>
            <form className='reg-forms'>
                <div className='reg-form'>
                    <div className='input-row'>
                        <label>First Name</label>
                        <input type='text' placeholder='First Name' />
                    </div>
                    <div className='input-row'>
                        <label>Last Name</label>
                        <input type='text' placeholder='Last Name' />
                    </div>
                </div>
                <div className='reg-form'>
                    <div className='input-row'>
                        <label>Mobile No</label>
                        <input type='number' placeholder='Mobile No' />
                    </div>
                    <div className='input-row'>
                        <label>Emial</label>
                        <input type='email' placeholder='Email' />
                    </div>
                </div>
                <div className='reg-form'>
                    <div className='input-row'>
                        <label>Please select a region, state or province</label>
                        <select>
                            <option>Select</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Dubai</option>
                        </select>
                    </div>
                </div>
                <div className='reg-form'>
                    <div className='input-row'>
                        <label>Address</label>
                        <input type='text' placeholder='Address' />
                    </div>
                    <div className='input-row'>
                        <label>City</label>
                        <input type='text' placeholder='City' />
                    </div>
                </div>
                <div className='reg-form'>
                    <div className='input-row'>
                        <label>Zip code</label>
                        <input type='number' placeholder='Zip code' />
                    </div>
                    <div className='input-row'>
                        <label>Zip code</label>
                        <input type='number' placeholder='Zip code' />
                    </div>
                </div>
                <button className='reg-btn'>Rigister</button>
            </form>
        </div>
    </div>
  )
}

export default Loginform
    