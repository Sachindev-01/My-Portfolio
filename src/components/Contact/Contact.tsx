import { useState } from "react";

import emailjs from "@emailjs/browser";

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../secreatKeys";

type TemplateProps = {
  from_name: string;
  from_phoneNumber: string | number;
  to_name: string;
  message: string;
};

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number | string>("");
  const [message, setMessage] = useState<string>("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const templateParams: TemplateProps = {
      from_name: name,
      from_phoneNumber: phoneNumber,
      to_name: "Sachin kumar",
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("Email sent successfully! ", response);
        setName("");
        setPhoneNumber("");
        setMessage("");
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log("Error sending email! ", error);
      });
  }

  return (
    <section className="py-44 px-2 lg:px-14 lg:h-screen">
      <div className="flex items-center justify-center ">
        <div className="min-w-[330px] max-w-[600px] rounded-3xl shadow-contactShadow">
          <div className="p-4 flex items-center justify-between bg-slate-700 rounded-tl-3xl rounded-tr-3xl">
            <div className="flex gap-2">
              <p className="bg-red-700 w-3 h-3 rounded-full"></p>
              <p className="bg-yellow-400 w-3 h-3 rounded-full"></p>
              <p className="bg-green-400 w-3 h-3 rounded-full"></p>
            </div>
            <div className="flex gap-2">
              <p className="bg-white w-1 h-1 rounded-full"></p>
              <p className="bg-white w-1 h-1 rounded-full"></p>
              <p className="bg-white w-1 h-1 rounded-full"></p>
            </div>
          </div>

          <div className="lg:flex justify-between items-center px-8 gap-4 pt-12 ">
            <div className="flex-2 text-2xl font-font-calibre text-[#3f9eee] uppercase text-center lg:text-start mb-6 lg:mb-0 border-b-2 border-[#3f9eee] pb-2">
              contact me
            </div>
            <div className="">
              <form onSubmit={onSubmit} className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="NAME"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-b-2 border-slate-600 p-2 outline-none"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="CONTACT NO"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-transparent border-b-2 border-slate-600 p-2 outline-none"
                />
                <textarea
                  name="message"
                  value={message}
                  cols={30}
                  placeholder="MESSAGE"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border-2 border-slate-600 p-2 outline-none mt-4  max-h-44"
                ></textarea>
                <div className="text-right">
                  <button
                    type="submit"
                    value={message}
                    className="text-[#3f9eee] text-lg uppercase mt-3 hover:text-slate-500 transition duration-150 ease-in-out active:text-[#3f9eee]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="px-8 pb-12">
            <div className="flex gap-2 font-font-nunito">
              <p className="capitalize text-slate-600">contact No :</p>
              <p className="text-slate-600">+91 7018185418</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
