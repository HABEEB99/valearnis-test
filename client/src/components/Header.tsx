import { Link } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full px-3 md:px-0 h-[10vh] bg-header flex items-center justify-center">
      <nav className="container flex items-center justify-between">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link to="/" className="text-2xl font-bold text-footer">
            Quiz App
          </Link>
        </motion.div>

        <motion.button
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center justify-center w-32 btn"
        >
          <BiLogInCircle className="mr-2" />
          Login
        </motion.button>
      </nav>
    </header>
  );
};

export default Header;
