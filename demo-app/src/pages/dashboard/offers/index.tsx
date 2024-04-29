const Offers = () => {
  const offers = ["Free", "Premium", "Deluxe"];

  return (
    <div className="bg-white shadow-2xl items-center flex flex-col py-10 my-52 mx-10 rounded-full">
      <p>This is offers section</p>
      <div className="my-2">
        {offers.map((offer) => (
          <li className="bg-blue-200 p-2 my-2 rounded-lg">{offer}</li>
        ))}
      </div>
      {/*you can make changes here*/}
    </div>
  );
};

export default Offers;
