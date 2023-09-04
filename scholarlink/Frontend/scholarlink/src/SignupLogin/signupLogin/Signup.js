import react from 'react';
import './signup.css'

// function Signup() {
//     return (
//         <div className="signup">
//             <div className='wrapper'>
//                 <form action="">
//                     <div>
//                     <label htmlFor="name">Name</label>
//                         <input type="name" placeholder='Enter Name'/> 
//                     </div>
//                     <div>
//                         <label htmlFor="contact">Contact</label>
//                         <input type="contact" placeholder='Enter Contact'/>
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" placeholder='Enter Email'/>
//                        </div>


            
//             <div>
//                 <label htmlFor="gender">Gender</label>
//                 <input type="gender" placeholder='Enter Gender'/>
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 < input type="password" placeholder='Enter Password'/>
//             </div>
//             <button className='signupbutton'>Signup</button>
//             </form>
//             </div>

//         </div>
//         );
//     };



const Signup = () =>{
    return(
    <section id='signup'>
        <h1>Registration</h1>
        <form onSubmit={SubmitEvent}>
            <input type='text' name='username' placeholder='User Name' autoFocus/> 
            {/* contact and country code */}
            <div className='contact'>
                <input type='number' name='code' id='code' placeholder='Code' autoFocus/>
                <input type='number' name='phone' id='phone' placeholder='Phone Number' autoFocus/> 
            </div>
            <input type='email' name='email' placeholder='Email (e.g info@scholarlink.cm)' autoFocus/>
            <div className='gender'>
                <input type='radio'  name='gender' value="Male" autoFocus/>Male
                <input type='radio'  name='gender' value="Female" autoFocus />Female
            </div>
            <input type='password' name='password' placeholder='Password' autoFocus/> 
            <input type='password' name='repeatpassword' placeholder='Repeat-Password' autoFocus/> 
            <input type='submit' name='Sign Up' value='Signup' id='signupBtn'/>
            <p>Already have an account? <a href='#'>Login</a></p>
        </form>
    </section>
    );
};

    
export default Signup;