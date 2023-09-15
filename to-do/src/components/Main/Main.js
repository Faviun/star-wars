import { Home } from "./Home";
import { AboutMe } from "./aboutMe/AboutMe";
import { StarWars } from "./StarWars/StarWars";
import { Contact } from "./Contact/Contact";
import { ErrorPage } from "./404";

export const Main = ({ page }) => {
  switch (page) {
    case 1:
      return <Home />;
    case 2:
      return <AboutMe />;
    case 3:
      return <StarWars />;
    case 4:
      return <Contact />;
    default:
      return <ErrorPage />;
  }
};
