
import { Link } from 'react-router-dom';
import './LoginOrSignup.css'


const LoginOrSignup = () => {
    return (
        <>
            <div>
                <section className="container forms">
                    <div className="form login">
                        <div className="pos-image">
                            <img src="./img/1713780930444.png" alt="pos-image" />
                        </div>
                        <div className="form-content">
                            {/*  <header>Login</header>  */}
                            <form action="/otp.html">
                                <div className="field input-field">
                                    <input type="email" placeholder="Email" className="input" />
                                </div>

                                <div className="field input-field">
                                    <input type="password" placeholder="Password" className="password" />
                                    <i className='bx bx-hide eye-icon'></i>
                                </div>

                                <div className="form-link">
                                    <Link to='/forgets' className="forgot-pass">Forgot password?</Link>
                                </div>

                                <div className="field button-field">
                                 <button>Login</button>
                                </div>
                            </form>

                            <div className="form-link">
                                <span>Don't have an account? <Link to='/signup' className="link signup-link">Signup</Link> </span>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="media-options">
                            <a href="#" className="field google">
                                <img src="./img/google.png" alt="" className="google-img" />
                                <span>Login with Google</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default LoginOrSignup;