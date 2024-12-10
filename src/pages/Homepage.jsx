import react from 'react'
import img1 from '../assets/crownlogo.png'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='aad'>
            <div className='ima'>
                  <img src={img1} alt="" className='image' />  
                
            </div>
            <div className='box'>
            <div className='hhh'>
            <label className='name'>Sign In</label>
                <form className='jimmy'>
                    <label className='usr'>Username</label>
                    <input type="text" id="fname" name="fname"></input><br />
                    <label className='password'>Password</label>
                    <input type="text" id="fname" name="fname"></input><br />
                </form>
                <button className='bttn'>Sign in</button>

                </div>
            </div>

        </div>
    )
}

export default Homepage;