import Carosel from "../../components/carusel/Carousel";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { userId, sessionId } = useAuth();
  const navigate = useNavigate();
  if (userId && sessionId) {
    return (
      <div>
        <Carosel />
      </div>
    );
  } else {
    navigate("/sign-in");
  }
};

export default Home;
