import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-center p-3 bg-warning mt-5">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
