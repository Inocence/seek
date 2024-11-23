import { Link } from "react-router-dom";
import Logo from "../common/Logo";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <div className="w-full p-5">
                    <nav>
                        <div className="flex">
                            <Logo />
                        </div>
                    </nav>
                    <main>{children}</main>
                    <footer className="flex flex-col space-y-3 md:space-y-0 text-base md:flex-row justify-between border-gray-200">
                        <div className="flex space-x-8">
                            <Link to="" className="underline">Security & Privacy</Link>
                            <Link to="" className="underline">Terms & Conditions</Link>
                            <Link to="" className="underline">Protect yourself online</Link>
                            <Link to="" className="underline">Contact</Link>
                        </div>
                        <div>
                            <span className="text-gray-500">© GEEK. All rights reserved</span>
                        </div>
                    </footer>
                </div>
        </div>
    );
}

export default AuthLayout;