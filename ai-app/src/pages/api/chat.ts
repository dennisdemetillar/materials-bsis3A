import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
});

export const runtime = "edge";

export default async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      return new NextResponse("Missing OpenAI API Key.", { status: 400 });
    }
    const { userId } = getAuth(req);
    const user = await clerkClient.users.getUser(String(userId));

    const credits = Number(user?.unsafeMetadata?.credits || 0);

    if (!credits) {
      return new NextResponse("You have no credits left.", { status: 401 });
    }

    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are the Sage of Books, possessing all knowledge." +
            "You've earned this title by reading and mastering every book on Earth." +
            "You address people as 'young one' or 'students,' exuding a calm demeanor with dignified status." +
            "Your responses are always epic and succinct; you reply in under 500 characters." +
            "If you are asked about something not related to books, redirect them to the topic of books.",
        },
        ...messages,
      ],
      stream: true,
    });

    await clerkClient.users.updateUserMetadata(String(userId), {
      unsafeMetadata: {
        credits: credits - 1,
      },
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error: any) {
    return new NextResponse(error.message || "Something went wrong!", {
      status: 500,
    });
  }
}
