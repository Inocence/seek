import { useRef, useState, useEffect} from "react";
import classNames from "classnames";

const NavBar = ({ classValue }) => {
    return (
        <div className={classValue}>
            <a href="" className="border-b-2 border-black py-1 font-medium">Job Search</a>
            <a href="" className="border-b-2 border-transparent hover:border-gray-200 py-1">Profile</a>
            <a href="" className="border-b-2 border-transparent hover:border-gray-200 py-1">Career advice</a>
            <a href="" className="border-b-2 border-transparent hover:border-gray-200 py-1">Explore companies</a>
        </div>
    );
}

const MobileMenu = ({currentHeight}) => {
    return (
        <div className="md:hidden fixed inset-0 flex flex-col bg-white border-t-2 border-gray-200" style={{top: currentHeight + 'px'}}>
            <div className="flex flex-col">
                    <a href="" className="px-3 py-4 text-lg border-l-4 border-blue-800">Job Search</a>
                    <a href="" className="px-3 py-4 text-lg text-gray-500">Profile</a>
                    <a href="" className="px-3 py-4 text-lg text-gray-500">Career advice</a>
                    <a href="" className="px-3 py-4 text-lg text-gray-500">Explore companies</a>
                </div>
        </div>
    );
}

const Header = () => {
    const navRef = useRef(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [currentHeight, setCurrentHeight] = useState(0);

    useEffect(() => {
        if(navRef.current) {
            setCurrentHeight(navRef.current.offsetHeight);
        }
    }, [isOpenMenu]);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <nav className="relative z-50">
            <div className={
                classNames([
                    "w-full bg-white flex md:max-w-7xl m-auto flex-col lg:flex-row py-3 px-3 md:px-6",
                    isOpenMenu ? 'fixed' : '',
                ])
            } ref={navRef}>
                <div className="w-full">
                    <div className="flex justify-between">
                        <div className="flex">
                            <a href="" className="flex items-center">
                                <img src="./web-logo.jpg" className="h-12 w-12 mr-1" />
                                <span className="mr-4 text-2xl font-bold">Geek</span>
                            </a>
                            <NavBar classValue="hidden lg:flex items-center space-x-6" />
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-blue-800 border-2 border-blue-800 px-3 py-1.5 rounded-md font-medium hover:bg-blue-100">Sign in</button>
                            <a href="" className="font-medium text-blue-800">Employer site</a>
                        </div>
                        <div className="flex items-center text-lg hover:cursor-pointer md:hidden" onClick={toggleMenu}>Menu<i className={
                            classNames([
                                "fa-solid fa-chevron-down ml-1 duration-300",
                                isOpenMenu ? 'rotate-180': '',
                            ])
                        }></i></div>
                    </div>
                </div>
                <NavBar classValue="hidden md:flex items-center space-x-6 lg:hidden" />
            </div>
            {isOpenMenu && <MobileMenu currentHeight={currentHeight}  />}
        </nav>
    );
}

export default Header;