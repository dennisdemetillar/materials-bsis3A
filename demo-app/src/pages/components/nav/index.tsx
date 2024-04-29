import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useState } from "react";

interface NavBarProps {
  setSection: (section: number) => void;
}

const NavBar = ({ setSection }: NavBarProps) => {
  const [sectionState, setSectionState] = useState(1);

  const handleSectionClick = (sectionNumber: number) => {
    setSection(sectionNumber);
    setSectionState(sectionNumber);
  };

  return (
    <div className="bg-blue-400 w-full py-8 rounded-b-full shadow-2xl">
      <div className="flex mx-24 justify-evenly">
        <div
          className={`flex cursor-pointer items-center gap-x-2 p-4 rounded-full text-${
            sectionState === 1 ? "blue" : "white"
          } bg-${sectionState === 1 ? "white" : "blue"}`}
          onClick={() => handleSectionClick(1)}
        >
          <IoHomeOutline />
          <div>Home</div>
        </div>
        <div
          className={`flex cursor-pointer items-center gap-x-2 p-4 rounded-full text-${
            sectionState === 2 ? "blue" : "white"
          } bg-${sectionState === 2 ? "white" : "blue"}`}
          onClick={() => handleSectionClick(2)}
        >
          <CiCircleInfo />
          <div>About</div>
        </div>
        <div
          className={`flex cursor-pointer items-center gap-x-2 p-4 rounded-full text-${
            sectionState === 3 ? "blue" : "white"
          } bg-${sectionState === 3 ? "white" : "blue"}`}
          onClick={() => handleSectionClick(3)}
        >
          <MdOutlineLocalOffer />
          <div>Offers</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
