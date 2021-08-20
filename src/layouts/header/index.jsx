import { Fragment, useEffect, useState } from "react";
import HamburgerMenu from "../../components/hamburger-menu";
import Logo from "../../components/logo";
import MenuOverlay from "../../components/menu-overlay";

import "./style.css";

const Header = () => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".fixed-top");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };
    return (
        <Fragment>
            <div
                className={`header fixed-top ${
                    scroll > headerTop ? "sticky" : ""
                }`}
            >
                <div className="container custom-container">
                    <div className="header-wrapper">
                        <div className="logo-box">
                            <div className="logo">
                                <Logo
                                    style={{
                                        borderRadius: "50%",
                                        height: "96px",
                                    }}
                                    image={`${process.env.PUBLIC_URL}/images/logo.png`}
                                />
                            </div>
                        </div>

                        <div className="header-menu-toggler">
                            <button
                                className="menu-toggler"
                                onClick={onCanvasHandler}
                            >
                                <i className="fal fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} />
            <MenuOverlay show={ofcanvasShow} />
        </Fragment>
    );
};

export default Header;
