import Header from "./Header";
import Footer from "./Footer";
import Search from "../../Pages/Home/Search/Search"

const HomeLayout = ({ children }) => {
    return (
        <div>
            <div className="container max-w-full">
                <Header />
                <Search />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}

export default HomeLayout;