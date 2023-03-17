import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { getUserCredentials } from "../utils/auth";
import { useUserStore } from "../store/userStore";
import { useQuizStore } from "../store/quizStore";

const Header = () => {
  const navigate = useNavigate();
  const { user, addUser, removeUser } = useUserStore();
  const { resetScore, resetCurrentQuestion } = useQuizStore();

  const naviteToHomePage = () => {
    resetScore();
    resetCurrentQuestion();
    navigate("/");
  };

  const logout = () => {
    googleLogout();
    removeUser();
    resetScore();
    resetCurrentQuestion();
    navigate("/");
    toast.error("Logged out");
  };
  return (
    <header className="w-full px-3 md:px-0 h-[10vh] bg-header flex items-center justify-center">
      <nav className="container flex items-center justify-between">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          onClick={naviteToHomePage}
          className="text-xs md:text-2xl font-bold text-btn cursor-pointer"
        >
          Quiz App
        </motion.div>

        <div>
          {user ? (
            <div className="flex items-center justify-center space-x-3 ">
              <div className="flex items-center justify-center space-x-1">
                <img
                  src={user.picture}
                  alt="User Image"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <small className="text-xs font-bold">{user.name}</small>
              </div>
              <motion.button
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex items-center text-white font-bold justify-center w-24 h-10 rounded-lg bg-red-500 hover:bg-red-700 active:bg-red-900"
                onClick={logout}
              >
                <BiLogOutCircle className="mr-2" />
                Logout
              </motion.button>
            </div>
          ) : (
            <div className="w-40 h-10 rounded-md overflow-hidden">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  getUserCredentials(credentialResponse, addUser);

                  toast.success("Logged in successfully");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              ;
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
