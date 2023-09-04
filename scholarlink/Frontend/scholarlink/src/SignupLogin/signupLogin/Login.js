import './login.css';
import facebookimg from './facebook.png';
import googleimg from './google.jpg';


const Login = () => {
    return (
        <section id='login'>
        <h1>Login</h1>
        <form onSubmit={SubmitEvent}>
            <input type='text' name='username' placeholder='User Name' autoFocus/> 
            <input type='password' name='password' placeholder='Password'/> 
            <p><a href='#'>Forgot password?</a></p>
            <input type='submit' name='login' value='Login' id='loginBtn'/>
            <p>Don't have an account? <a href='#'>Signup</a></p>

            <div className='or'> <hr/>OR <hr/></div>
            <button type='submit' name='facebook' id='facebookbtn'><img src={facebookimg}/> Login with Facebook</button>
            <button type='submit' name='google' id='googlebtn'><img src={googleimg}/> Login with Google</button>
        </form>
    </section>
    );
};
export default Login; 