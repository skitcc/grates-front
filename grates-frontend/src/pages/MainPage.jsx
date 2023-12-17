import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "../features/auth/authSlice";

const MainPage = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
    </section>
  );

  return content;
};
export default MainPage;
