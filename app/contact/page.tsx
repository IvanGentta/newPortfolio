import React from "react";
import bgPattern from "/public/images/coolPattern.jpg";

export default function Contact() {
  return (
    <div className="w-fit h-fit flex flex-col items-center">
      <h1 className="self-start pl-5 text-2xl">Get in touch!</h1>
      <form
        action=""
        className="flex flex-col items-center justify-center py-4 border-4 border-iviSecondary rounded-3xl
        h-[350px] w-[800px] bg-iviExtra shadow-lg shadow-iviShadow"
        style={{
          backgroundImage: `url(${bgPattern.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex justify-around items-center mt-6">
          <div className="flex flex-col justify-between h-full">
            <input
              type="text"
              name="name"
              className="border-2 border-black rounded-lg h-10 p-2"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="border-2 border-black rounded-lg h-10 p-2"
              placeholder="Email"
            />

            <input
              type="text"
              name="subject"
              className="border-2 border-black rounded-lg h-10 p-2"
              placeholder="Subject"
            />
          </div>

          <textarea
            name=""
            id=""
            className="border-2 border-black rounded-lg h-full w-96 p-2"
            placeholder="Message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-50 bg-iviPrimary border-2 border-black text-iviTextDark font-bold text-xl py-2 px-4 mt-8 mb-2 rounded-xl
          hover:bg-[#2fa4f7] hover:text-iviText hover:border-black/80 transition ease-in"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
