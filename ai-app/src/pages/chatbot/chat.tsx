import { useChat } from "ai/react";
import { Input, Button, Spin, notification } from "antd";
import { IoMdSend } from "react-icons/io";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import { AddFreeCredits } from "@/utils/action";
import { useSession, useAuth, useClerk, useUser } from "@clerk/nextjs";
import { FiZap } from "react-icons/fi";
import { clerkClient } from "@clerk/nextjs/server";

const Chat = () => {
  // const session = useSession();
  const { session } = useClerk();
  // const { isLoaded, isSignedIn } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  // const credits = session?.session?.user?.publicMetadata?.credits;
  const credits = user?.publicMetadata?.credits;
  const newUser = typeof credits === "undefined";

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const renderResponse = () => {
    return messages.map((message, index) => (
      <div className="flex flex-col gap-y-5" key={message.id}>
        <div className="flex gap-x-4 text-white items-center">
          <Image
            className="rounded-full"
            src={message.role === "user" ? "/person.jpg" : "/sage.jpg"}
            alt="image"
            height={40}
            width={40}
          />
          <p className="text-white text-sm">{message.content}</p>
        </div>
        {index < messages.length - 1 && (
          <div className="border-[0.5px] mb-5 border-white" />
        )}
        {index === messages.length - 1 && <div ref={messagesEndRef} />}
      </div>
    ));
  };

  return (
    <div>
      <div className="flex flex-col mx-10 p-10 rounded-3xl border border-white">
        <div className="overflow-auto mb-10 h-96 mx-20">
          {messages.length === 0 ? (
            <div className="text-white flex flex-col items-center gap-y-10">
              <Image
                src="/sage.jpg"
                height={150}
                width={150}
                className="rounded-lg"
                alt="sage"
              />
              <p>Ask me Anything Young One</p>
            </div>
          ) : (
            renderResponse()
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex w-full gap-x-2">
          <Input
            placeholder="Ask me anything"
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Button
            htmlType="submit"
            disabled={isLoading}
            icon={isLoading ? <Spin /> : <IoMdSend />}
          />
        </form>
      </div>
    </div>
  );
};

export default Chat;
