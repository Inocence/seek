import Header from "./Header";
import Footer from "./Footer";
import Search from "./search/Search";

const Layout = ({ children }) => {
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

export default Layout;