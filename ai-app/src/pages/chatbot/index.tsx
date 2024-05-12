import { Button } from "antd";
import Chat from "./chat";
import { SignOutButton } from "@clerk/nextjs";
import { IoIosLogOut } from "react-icons/io";

const Chatbot = () => {
  return (
    <>
      <div className="flex justify-end mr-14 pt-5">
        <SignOutButton>
          <Button
            type="primary"
            style={{ backgroundColor: "#10b981" }}
            className="flex items-center gap-2 border-emerald-500"
          >
            <IoIosLogOut />
            <p>Logout</p>
          </Button>
        </SignOutButton>
      </div>
      <div className="flex items-center gap-y-3 flex-col py-10">
        <h1 className="tracking-tight text-4xl sm:text-6xl font-bold text-white">
          Sage of the books
        </h1>
        <p className="max-w-xl text-center text-lg text-slate-400">
          A wise entity steeped in all knowledge, earned through the mastery of
          every tome on Earth
        </p>
      </div>
      <Chat />
    </>
  );
};

export default Chatbot;
