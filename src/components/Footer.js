import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./Blog.css";

const Footer = () => {
    return (
        <footer className=" footer text-center text-dark">
            {/* <!-- Copyright --> */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: '#dddddd' }}
            >

                <FaRegCopyright /> 2023 Copyright<br></br>
                <a
                    className=" bluehour text-center "
                    href="https://www.linkedin.com/in/lakshmi-unni/"
                    style={{ textDecoration: "none" }}
                >
                    Lakshmi Unni
                </a>
            </div>
            {/* <!-- Copyright --> */}

        </footer>
    );
};

export default Footer;
