
import LoginPageComponent from "./components/LoginPageComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const loginUserApiRequest = async (email, password) => {
    const { data } = await axios.post("/api/users/login", { email, password });

    sessionStorage.setItem("userInfo",JSON.stringify(data.userLoggedIn))

    return data;
}
const LoginPage = () => {

    const reduxDispatch = useDispatch();
  
  return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState} />
};

export default LoginPage;