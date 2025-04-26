import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const {signUpWithEmail, user} = useContext(AuthContext);
    console.log(user);
    const handleSignUp = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name);

        signUpWithEmail(email, password)
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
                            <h1 className='font-bold text-2xl text-center'>SignUp</h1>
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                <label className="label">PhotoURL</label>
                                <input type="text" name='photo' className="input" placeholder="PhotoURL" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>Already have an account? <span className='text-primary'><Link to={'/login'} >Login</Link></span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default SignUp;