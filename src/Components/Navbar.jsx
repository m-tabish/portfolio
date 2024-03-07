import { Btn } from "./exportComp"
import { NavLink } from "react-router-dom"



const Navbar = () => {
    return (
        <nav className='sm:h-16 h-16 w-4/5 py-3 mb-5 flex justify-center'>
            {/* mid */}
            <div className="flex gap-5">
                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-accent" : "text-white"} hover:text-blue-400 hover:border-none`}><Btn BtnText={"Home"} /></NavLink>
                <NavLink to="projects" className={({ isActive }) => `${isActive ? "text-accent" : "text-white"} hover:text-blue-400 `} > <Btn BtnText={"Projects"} /></NavLink>
            </div>

        </nav>
    )
}

export default Navbar
