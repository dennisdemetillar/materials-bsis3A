import { useChat } from "ai/react";
import { Input, Button, Spin } from "antd";
import { IoMdSend } from "react-icons/io";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <div className="flex flex-col mx-10 p-10 rounded-3xl border border-white">
        <div className="overflow-auto mb-10 h-96 mx-20">
          {messages.map((message, index) => (
            <div className="flex flex-col gap-y-5" key={message.id}>
              <div className="flex gap-x-4 text-white items-center">
                <img
                  src={message.role === "user" ? "./person.jpg" : "./sage.jpg"}
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
          ))}
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
            icon={
              isLoading ? (
                <Spin
                  className="bg-white"
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: 24, color: "black" }}
                      spin
                    />
                  }
                />
              ) : (
                <IoMdSend />
              )
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
