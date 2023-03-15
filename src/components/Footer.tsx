import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-screen h-8 bg-logo flex text-xs font-bold items-center justify-center text-gray-400 bg-footer">
      Built by habeebahmadu1@gmail.com
      <div className="flex items-center justify-center space-x-2 ml-2">
        <a href="https://www.linkedin.com/in/habeeb-ahmadu">
          <BsLinkedin className="hover:text-blue-600 text-blue-500" />
        </a>

        <a href="https://github.com/HABEEB99">
          <BsGithub className="hover:text-gray-600 text-gray-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
