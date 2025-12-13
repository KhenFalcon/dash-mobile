import Navbar from "../--components/Navbar";
import Quotes_Splash from "./--components/Quotes_Splash";
import Quotes_Form from "./--components/Quotes_Form";
import Footer from "../--components/Footer";

import "./quotes.css";

export default function Home() {
    return (
        <div id="home-page">
            <Navbar />
            <div id="main-content">
                <Quotes_Splash />
                <hr />
                <Quotes_Form />
                <p id="footnote">* = required in order for use to give an accurate quote</p>
            </div>
            <Footer />
        </div>
    );
}