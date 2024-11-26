import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <img src="./web-logo.jpg" className="h-12 w-12 mr-1" />
            <span className="mr-4 text-2xl font-bold">Geek</span>
        </Link>
    );
}

export default Logo;