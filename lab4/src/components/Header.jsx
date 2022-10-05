import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";




const LinkItem = ({location, item}) => {
  const style = location.pathname === item.path ? "bg-pink/50":"bg-overlay0/50"
  return <Link className={`text-center ${style} hover:bg-pink/50 p-1`} to={item.path}>
    {item.text}
  </Link>

}




const links = [
  { path: "/", text: "home" },
  { path: "/news", text: "news" },
  { path: "/profile", text: "profile" },
];

const Header = () => {
  const location = useLocation()
  const {isLoginned, setIsLoginned} = useContext(AuthContext)
  const handleLogout = () => {
    localStorage.setItem('isLoginned', 'false')
    setIsLoginned("false")
  }
  
  return (
  
    <>
        <div className="flex mb-6 px-4 pt-9 py-2 rounded-xl text-text w-fit mx-auto">
          <Link className="text-center bg-overlay0/50 rounded-l-lg p-1 pl-2 hover:bg-pink/50" to="/">Andrii</Link>
        {links.map((link,idx) =><LinkItem key={idx} item={link} location={location}  /> )}
        <button onClick={handleLogout} disabled={isLoginned==="false"} className="text-center disabled:bg-base disabled:border-[1px] disabled:border-pink/50 bg-overlay0/50 rounded-r-lg p-1 pr-2 hover:bg-red" to="/">Logout</button>
      </div>
    </>
  );
};

export default Header;
