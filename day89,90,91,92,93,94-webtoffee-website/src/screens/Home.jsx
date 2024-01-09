import Blocked from "../components/Home/Blocked";
import Categories from "../components/Home/Categories";
import Consent from "../components/Home/Consent";
import CookieTab from "../components/Home/CookieTab";
import Customization from "../components/Home/Customization";
import EUvisitors from "../components/Home/EUvisitors";
import Footer from "../components/Home/Footer";
import GranularOption from "../components/Home/GranularOption";
import HassleFree from "../components/Home/HassleFree";
import MultiLingual from "../components/Home/MultiLingual";
import OtherPlugins from "../components/Home/OtherPlugins";
import Purchase from "../components/Home/Purchase";
import Questions from "../components/Home/Questions";
import Review from "../components/Home/Review";
import Scan from "../components/Home/Scan";
import SetUp from "../components/Home/SetUp";
import Spotlight from "../components/Home/Spotlight";
import TrustpilotReview from "../components/Home/TrustpilotReview";
import WordpressFeatures from "../components/Home/WordpressFeatures";

export default function Home() {
    return (
        <>
            <CookieTab/>
            <Spotlight/>
            <Purchase/>
            <WordpressFeatures/>
            <SetUp/>
            <Scan/>
            <Blocked/>
            <Categories/>
            <Customization/>
            <EUvisitors/>
            <HassleFree/>
            <Consent/>
            <GranularOption/>
            <MultiLingual/>
            <Review/>
            <OtherPlugins/>
            <TrustpilotReview/>
            <Questions/>
            <Footer/>
        </>
    )
}