import React from 'react'
import "./CreateAcc.css"
import { useState } from 'react';

function CreateAcc() {

    const days = [];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "Jul", "aug", "sep", "oct", "nov", "dec"];
    const years = []

    for (let i = 1; i <= 30; i++) {
        days.push(i)
    }
    for (let j = 2000; j <= 2020; j++) {
        years.push(j)
    }

    return (
        <div className="CreateAccPage">
            <div className="FakeBookLogoInCreateAcc">FakeBook</div>
            <div className="CreateAccWrapper">

            <span className='heading'>Create a new account</span>
            <p className='pera'>It's quick and easy.</p>
            <hr />




                <input type="text" className="firstName" placeholder='First name' />
                <input type="text" className="lasttName" placeholder='Surname' />

                <br />

                <lable className="lableForDOB" >Date of birth &#63;</lable>

                <div className="DBOcontainer">
                    <select className='options' >
                        <option>{days[0]}</option>
                        <option>{days[1]}</option>
                        <option>{days[2]}</option>
                        <option>{days[3]}</option>
                        <option>{days[4]}</option>
                    </select>

                    <select className='options' >
                        <option>{months[0]}</option>
                        <option>{months[1]}</option>
                        <option>{months[2]}</option>
                        <option>{months[3]}</option>
                        <option>{months[4]}</option>
                        <option>{months[5]}</option>
                        <option>{months[6]}</option>
                        <option>{months[7]}</option>
                        <option>{months[8]}</option>
                        <option>{months[9]}</option>
                        <option>{months[10]}</option>
                        <option>{months[11]}</option>
                    </select>

                    <select className='options' >
                        <option>{years[0]}</option>
                        <option>{years[1]}</option>
                        <option>{years[2]}</option>
                        <option>{years[3]}</option>
                        <option>{years[4]}</option>
                        <option>{years[5]}</option>
                        <option>{years[6]}</option>
                        <option>{years[7]}</option>
                        <option>{years[8]}</option>
                        <option>{years[9]}</option>
                        <option>{years[10]}</option>
                        <option>{years[11]}</option>
                    </select>
                </div>

                <lable className="gendreForDOB" >Gender &#63;</lable>

                <div className="genderContaine">
                    <label htmlFor="male" className='gender'>
                        Male <input type="radio" id='male' />
                    </label>
                    <label htmlFor="female" className='gender'>
                        Female <input type="radio" id='female' />
                    </label>
                    <label htmlFor="custom" className='gender'>
                        Custom <input type="radio" id='custom' />
                    </label>
                </div>

                <input
                    type="text"
                    className="EmailOrNumber"
                    placeholder='Mobile number or eamil address'
                />

                <input
                    type="password"
                    className="password"
                    placeholder='Password'
                />

                <p className="pera1">People who use our service may have uploaded your contact information to Facebook. <a href=""> Learn more</a>.</p>

                <p className="pera2">By clicking Sign Up, you agree to our <a href="">Terms</a> ,<a href="">Privacy Policy</a>  and <a href="">Cookies Policy</a> . You may receive SMS notifications from us and can opt out at any time.</p>

                <button className="signUpBtn">Sign up</button>

                <a className="haveAcc">Already have an account?</a>


            </div>
        </div>
    )
}

export default CreateAcc