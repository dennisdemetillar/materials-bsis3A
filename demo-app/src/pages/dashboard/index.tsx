import Layout from "../components/_layout";
import { useState } from "react";
import Home from "./home";
import Offers from "./offers";
import About from "./about";

const Dashboard = () => {
  const [section, setSection] = useState(1);

  let sectionComponent;

  switch (section) {
    case 1:
      sectionComponent = <Home />;
      break;
    case 2:
      sectionComponent = <About />;
      break;
    case 3:
      sectionComponent = <Offers />;
      break;
    default:
      sectionComponent = null;
  }

  return (
    <>
      <Layout setSection={setSection}>{sectionComponent}</Layout>
    </>
  );
};

export default Dashboard;
