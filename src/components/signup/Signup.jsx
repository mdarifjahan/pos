import React from 'react';
import './Signup.css';
const Signup = () => {
    return (
        <div>
           <div class="form signup">
            <div class="form-content">
                <div class="pos-image">
                    <img src="images/1713780930444.png" alt="pos-image"/>
                  </div>
                <form action="/otp.html">
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input"/>
                    </div>

                    <div className="field input-field">
                        <input type="password" placeholder="Create password" class="password"/>
                    </div>

                    <div class="field input-field">
                        <input type="password" placeholder="Confirm password" class="password"/>
                        <i class='bx bx-hide eye-icon'></i>
                    </div>
                    <div class="field button-field">
                        <button>Signup</button>
                    </div>
                </form>

                <div class="form-link">
                    <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
                </div>
            </div>

            <div class="line"></div>

            <div class="media-options">
                <a href="#" class="field google">
                    <img src="images/google.png" alt="" class="google-img"/>
                    <span>Login with Google</span>
                </a>
            </div>

        </div>
        </div>
    );
};

export default Signup;