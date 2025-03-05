import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className="loginPage">
            <div className="loginWrapper">
                <div className="leftSideWrapper">
                    <div className="FakeBookLogoInLogin">FakeBook</div>
                    <div className="socialMediaPera">FakeBook helps you connect and share with the people in your life.</div>
                </div>
                <div className="rightSideWrapper">
                    <input
                        type="text"
                        placeholder='Email Address or phone number'
                        className='textInput'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className='passwordInput'
                    />
                    <button className="loginBtn">Log in</button>
                    <span className="forgottenPassword">Forgotten password?</span>
                    <button className="createNewAccountBtn">Create new account</button>
                </div>
                    <p className='LinkForCelebrityAccount'><a href="" style={{ fontWeight: "500", color: "black" }}>Create a Page</a> for a celebrity, brand or business.</p>
            </div>
        </div>
    )
}

export default Login
