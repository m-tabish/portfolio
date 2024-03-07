import { Btn } from "./exportComp"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className='sm:h-16 h-16 w-4/5 py-3 mb-5 flex justify-center border-none'>
            {/* mid */}
            <div className="flex gap-5 border-none">
                <NavLink to="" className={(isActive) => `${isActive ? "text-accent" : "text-white"} hover:text-white  visited:border-transparent`}><Btn BtnText={"Home"}></Btn>
                </NavLink>

                <NavLink to="/projects" className={(isActive) => `${isActive ? "text-accent" : "text-white"} `}>
                    <Btn BtnText={"Projects"}></Btn>
                </NavLink>

            </div>

        </nav>
    )
}

export default Navbar
