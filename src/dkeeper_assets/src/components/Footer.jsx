import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p><a href="https://www.linkedin.com/in/pranav-garg-667992173/">Pranav Garg</a> Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
