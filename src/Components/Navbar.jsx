import Logo from '../assets/Logo.jpg'
import { Link } from 'react-router-dom'

function NavBar () {

    return (
        // 1. Added 'flex flex-col md:flex-row items-center justify-between'
        // This stacks them on mobile, and pushes them apart on desktop.
        // Added 'p-4' just to ensure content isn't touching the edges on mobile.
        <nav className='navbar flex flex-col md:flex-row items-center justify-between p-4 md:px-8'>
            
            {/* Logo Section */}
            {/* Added 'mb-4 md:mb-0' to push links down only on mobile */}
            <div className="flex gap-x-2.5 items-center mb-4 md:mb-0">
                <img src={Logo} alt="CineFile Logo" className="h-10 w-auto" />
                
                {/* Changed 'text-4xl' to 'text-3xl md:text-4xl' so it fits on phones */}
                <h1 className="text-3xl md:text-4xl font-bold">CineFile</h1>
            </div>

            {/* Links Section */}
            <div className="flex gap-x-6 font-medium text-xl">
                <Link to='/' 
                    className="
                        hover:underline
                        underline-offset-4
                        transition-all
                        duration-300
                        decoration-yellow-300
                    "
                >
                    Home
                </Link>
                <Link to='/favourites'
                    className="
                        hover:underline
                        underline-offset-4
                        transition-all
                        duration-300
                        decoration-yellow-300
                    "
                >
                    Favourites
                </Link>
            </div>
        </nav>
    )
}

export default NavBar