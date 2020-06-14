import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer(){
    return <p>copyright {currentYear}</p>
}

export default Footer;