import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center p-4 mt-8" style={{ color: "#888" }}>
      <hr />
      <p className="text-sm">&copy; {new Date().getFullYear()} Pixelio Gallery. All rights reserved.</p>
    </footer>
  );
};

export default Footer;