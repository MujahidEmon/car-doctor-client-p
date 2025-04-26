import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
            
        })
    }
    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content flex-col border justify-around lg:flex-row">
                <div className=" lg:w-1/2 ">
                    <div className='w-full'>
                        <img src={login} alt="" />  
                    </div>
                </div>
                <div className="card bg-base-100  w-full lg:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='font-bold text-2xl text-center'>Login</h1>
                        <form onSubmit={handleLogIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p>Don't have an account? <span className='text-primary'><Link to={'/signup'}>SignUP</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;