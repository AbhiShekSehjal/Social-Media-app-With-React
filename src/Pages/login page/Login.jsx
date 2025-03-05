import React from 'react'

function Login() {
    return (
        <div className="loginPage">
            <div className="loginWrapper">
                <div className="leftSideWrapper">
                    <div className="socialMediaName">FakeBook</div>
                    <div className="socialMediaPera">FakeBook helps you connect and share with the people in your life.</div>
                </div>
                <div className="rightSideWrapper">
                    <input
                        type="text"
                        placeholder='Email Address or phone number'
                    />
                    <input
                        type="password"
                        placeholder='password'
                    />
                    <button className="loginBtn">Login</button>
                    <span className="forgottenPassword">Forgotten password?</span>
                    <button className="createNewAccountBtn">Create new account</button>
                </div>
            </div>
        </div>
    )
}

export default Login
