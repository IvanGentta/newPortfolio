"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import bgPattern from "/public/images/coolPattern.jpg";
import avioncito from "/public/images/avioncito.jpg";
import { MdClose } from "react-icons/md";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ValidationState = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

type TouchedState = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isValid, setIsValid] = useState<ValidationState>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [touched, setTouched] = useState<TouchedState>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validacion cada campo
    setIsValid((prev) => ({
      ...prev,
      [name]:
        name === "email"
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) // Validación mail
          : value.trim().length > 0,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const getBorderColor = (field: keyof FormData): string => {
    if (touched[field]) {
      if (isValid[field]) return "border-green-500"; // Correcto
      return "border-red-500"; // Incorrecto
    }
    return "border-black"; // Sin interacción
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica si todos los campos son válidos antes de enviar el formulario
    if (!Object.values(isValid).every(Boolean)) {
      return;
    }

    // Configura los datos que se enviarán
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Envio a través de EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        // Restablecer los campos
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsValid({
          name: false,
          email: false,
          subject: false,
          message: false,
        });
        setTouched({
          name: false,
          email: false,
          subject: false,
          message: false,
        });
        setIsMessageSent(true);

        setTimeout(() => {
          setFadeOut(true);
        }, 3000);

        setTimeout(() => {
          setIsMessageSent(false);
          setFadeOut(false);
        }, 3500);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      alert("Error al enviar el correo. Intenta nuevamente.");
    }
  };

  const handleClose = () => {
    setIsMessageSent(false);
    setFadeOut(false);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center relative">
      <h1 className="self-start pl-5 text-2xl">Get in touch!</h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col items-center justify-center py-4 border-4 border-iviSecondary rounded-3xl
        w-full h-auto max-w-[1200px] sm:h-auto bg-iviExtra shadow-lg"
        style={{
          backgroundImage: `url(${bgPattern.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex flex-col sm:flex-row justify-around items-center mt-6 p-4 sm:space-x-4">
          <div className="flex flex-col justify-between w-full max-w-96 h-full flex-1 flex-grow space-y-5 sm:space-y-7">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-2 rounded-lg h-10 p-2 sm:h-12 ${getBorderColor(
                "name"
              )}`}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-2 rounded-lg h-10 p-2 sm:h-12 ${getBorderColor(
                "email"
              )}`}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-2 rounded-lg h-10 p-2 sm:h-12 ${getBorderColor(
                "subject"
              )}`}
              placeholder="Subject"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-grow border-2 rounded-lg min-h-[200px] sm:h-full w-full max-w-96 lg:max-w-[450px] p-2 mt-2 sm:mt-0 resize-none ${getBorderColor(
              "message"
            )}`}
            placeholder="Message..."
            required
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

      {/* Mail enviado! */}
      {isMessageSent && (
        <div
          className={`message-card flex-grow w-full h-auto min-w-[300px] max-w-[550px] min-h-[200px] 
          border-4 border-iviPrimary rounded-2xl absolute p-4 top-[92px] ${
            fadeOut
              ? "opacity-0 transition-opacity duration-1000"
              : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${avioncito.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between">
            <h2 className="text-4xl font-semibold p-4">
              Email sent,
              <br />
              thanks!
            </h2>
            <MdClose
              className="w-10 h-10 cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  );
}
