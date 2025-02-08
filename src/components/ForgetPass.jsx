import React from 'react';
import './ForgetPass.css'
import { Link } from 'react-router-dom';
const ForgetPass = () => {
    return (
        <div>
            <div className="new-parent">
                <div className="background">
                    <div className="mt-top">
                        <div className="reset-container-fast">
                            <div className="reset-container">
                                <div className="pos-image">
                                    <img src="./img/1713780930444.png" alt="pos-image" />
                                </div>
                                <h2>Reset Password</h2>
                                <p>To reset your password, please add your registered email.</p>
                                <form>
                                    <input type="email" placeholder="Email Address" required />
                                    <button type="submit">Send Password Reset Link</button>
                                </form>
                                <div className="footer">
                                    <a href="#">Remember your password?</a>
                                    <Link to='/' className="sing-in" >Sing in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;