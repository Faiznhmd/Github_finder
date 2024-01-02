const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p className="text-white">
          CopyRight &copy; {footerYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
