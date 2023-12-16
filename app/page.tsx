"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import robot from "../public/robot.png";
import human from '../public/human.svg'

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pb-10">
      <div className="flex py-4 justify-center">
        <div>
          <h1 className="font-mono font-extrabold text-4xl py-2 ">AI ChatBot </h1>{" "}
        </div>
        <div>
          <Image src={robot} alt="AI" width={50} height={50} />
        </div>
      </div>
      <div className="flex">
        <div>
          <Image src={robot} width={25} height={25} alt="AI" />
        </div>
        <div className="ms-2">
          {" "}
          <h1 className="text-[rgb(7, 241, 7)] font-mono text-lg ">
            -How may i help you?{" "}
          </h1>
        </div>
      </div>

      <ul className="mb-[100px]">
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? (
              <div className="flex py-2">
              <div>
                <Image src={human} className="min-w-[25px]" width={25} height={25}  alt="User" />
              </div>
              <div className="ms-2">
                {" "}
                <h1 className="text-[red]  text-lg">
                  {`-${m.content}`}{" "}
                </h1>
              </div>
            </div>
            ) : (
              <div className="flex">
                <div>
                  <Image src={robot} className="min-w-[25px]" width={25} height={25}  alt="AI" />
                </div>
                <div className="ms-2">
                  {" "}
                  <h1 className="text-[rgb(7, 241, 7)] font-mono text-lg">
                    {`-${m.content}`}{" "}
                  </h1>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleSubmit}
        className="fixed w-full    bottom-0 border border-gray-300 rounded mb-1 shadow-xl p-2 dark:text-black"
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="ask your questions"
          className="w-full text-[red] py-1 md:py-2 px-2 text-center font-bold"
        />

        <button
          type="submit"
          className="w-full  font-bold bg-red-700 text-white md:py-2 mt-2 my-1"
        >
          Send
        </button>
      </form>
    </div>
  );
}
