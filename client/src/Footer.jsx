import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return (
        <footer>
            <p id="footer-text">Copyright @{currentYear}</p>
        </footer>
    )
}

export default Footer;