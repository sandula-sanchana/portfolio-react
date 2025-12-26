

import {Link} from 'react-router-dom'
export const Navbar=()=>{


    return (
        <>
            <div className="nav-container">
               <div>

               </div>

                <div>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='Work'>Work</Link>
                        <Link to='Skills'>Skills</Link>
                    </nav>
                </div>
            </div>
            <div></div>
        </>
    )
}