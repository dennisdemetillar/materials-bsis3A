import Greetings from "./greetings";

const HomePage = () => {
  return (
    <div>
      <div>This is Home Page</div>
      <Greetings name={"Dennis"} />
      <Greetings name={"Demetillar"} />
    </div>
  );
};

export default HomePage;
