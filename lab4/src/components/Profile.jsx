import Body from "./Body";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { isLoginned } = useContext(AuthContext);
  return (
    <Body>
      {isLoginned === "true" ? <div className="text-pink/70 text-4xl w-fit mx-auto shadow-sm">Profile</div> : <Navigate to="/login" />}
    </Body>
  );
};

export default Profile;
