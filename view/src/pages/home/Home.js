import BottomBanner from "./BottomBanner";
import CompanySlides from "./CompanySlides";
import LoginTips from "./Login-tips";
import RecentSearch from "./RecentSearch";
import Layout from "../../components/layout/Layout";
import QuikSearch from "./QuikSearch";


const Home = () => {
    return (
        <Layout>
            <div>
                <RecentSearch />
                <LoginTips />
                <CompanySlides />
                <BottomBanner />
                <QuikSearch />
            </div>
        </Layout>
    );
}

export default Home;