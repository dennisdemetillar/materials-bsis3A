import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";
import { Spin } from "antd";
import SignInPage from "./sign-in/[[...index]]";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push(`/chatbot`);
    } else {
      router.push(`/sign-in`);
    }
  }, [router, isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return <div />;
};

export default Home;
