import BottomBanner from "./BottomBanner";
import CompanySlides from "./CompanySlides";
import LoginTips from "./Login-tips";
import RecentSearch from "./RecentSearch";
import HomeLayout from "../../Components/Layout/HomeLayout";
import QuikSearch from "./QuikSearch";


const Home = () => {
    return (
        <HomeLayout>
            <div>
                <RecentSearch />
                <LoginTips />
                <CompanySlides />
                <BottomBanner />
                <QuikSearch />
            </div>
        </HomeLayout>
    );
}

export default Home;