import React from "react";

export default function Contact() {
  return (
    <div className="min-h-[70vh] flex flex-col sm:items-center gap-2 py-8 md:py-[90px] px-8 -mt-8 sm:mt-0">
      <div className="p-2">
        <span
          className=" text-center flex"
          style={{
            lineHeight: 0.75,

            fontSize: "clamp(3.255rem, 2.1652rem + 5.4489vw, 5.6525rem)",
          }}
        >
          Get in Touch
        </span>
      </div>
      <div className=" max-w-[1024px] w-full">
        <form
          action="https://formspree.io/f/xzbnwpkw"
          method="POST"
          className="p-2"
        >
          <input
            type="text"
            name="name"
            autoComplete="off"
            required
            placeholder="Full Name"
            className=" placeholder:text-zinc-400 outline-none"
          />

          <input
            type="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            required
            autoComplete="off"
            placeholder="Email Address"
            className=" placeholder:text-zinc-400 outline-none"
          />

          <input
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            required
            autoComplete="off"
            placeholder="Phone Number"
            className=" placeholder:text-zinc-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            className=" placeholder:text-zinc-400 outline-none"
          ></textarea>

          <input
            type="submit"
            className=" cursor-pointer w-fit sm:w-auto bg-zinc-200 text-[#101010] button"
            value={`Send`}
          >
            {/* <h6>Send</h6> */}
          </input>
        </form>
      </div>
    </div>
  );
}
