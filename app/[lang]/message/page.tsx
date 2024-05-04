"use client";

import * as React from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ContactCheckIconProps {
  icon: string;
  id: number;
  text: string;
}

const ContactCheckIcon: React.FC<ContactCheckIconProps> = ({
  icon,
  id,
  text,
}) => {
  if (id === 1) {
    return (
      <div className="flex gap-5 mt-6 text-xl font-semibold leading-6 text-blue-500">
        <span className="flex-auto">
          {" "}
          <a href="#message-section">{text}</a>
        </span>
        <a href="#message-section">
          <img
            src={icon}
            alt=""
            className="shrink-0 w-5 aspect-[1.05] fill-blue-500"
          />
        </a>
      </div>
    );
  } else if (id === 2) {
    return (
      <div className="flex gap-5 mt-6 text-xl font-semibold leading-6 text-blue-500">
        <span className="flex-auto">
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.MAP_LOCATION_LINK}
          >
            {text}
          </a>
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.MAP_LOCATION_LINK}
        >
          <img
            src={icon}
            alt=""
            className="shrink-0 w-5 aspect-[1.05] fill-blue-500"
          />
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex gap-5 mt-6 text-xl font-semibold leading-6 text-blue-500">
        <span className="flex-auto">{text}</span>
      </div>
    );
  }
};

interface ContactCardProps {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
  ctaIcon: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  id,
  imageSrc,
  title,
  description,
  ctaText,
  ctaIcon,
}) => {
  return (
    <div className="flex flex-col grow px-8 py-11 mx-auto w-full rounded-2xl bg-zinc-800 max-md:px-5 max-md:mt-8">
      <img src={imageSrc} alt="" className="w-20 aspect-square" />
      <h3 className="mt-9 text-3xl font-bold leading-8 text-white">{title}</h3>
      <p className="mt-9 text-lg font-medium leading-8 text-gray-400">
        {description}
      </p>
      {/* <span className="flex-auto">{ctaText}</span> */}
      <ContactCheckIcon
        icon={ctaIcon}
        text={ctaText}
        id={id}
      ></ContactCheckIcon>
    </div>
  );
};

const contactCardsData = [
  {
    id: 1,
    imageSrc: "/static/images/message/chat-with-us.svg",
    title: "Chat with us",
    description:
      "Ask us a question by email and we will respond within a few days.",
    ctaText: "Leave a message",
    ctaIcon: "/static/images/message/arrow-right-icon.svg",
  },
  {
    id: 2,
    imageSrc: "/static/images/message/drop-in.svg",
    title: "Drop in",
    description:
      "You can meet us at our office and discuss the details of your question.",
    ctaText: "Get directions",
    ctaIcon: "/static/images/message/arrow-right-icon.svg",
  },
  {
    id: 3,
    imageSrc: "/static/images/message/call-us.svg",
    title: "Call us",
    description: "Call us if your question requires an immediate response.",
    ctaText: "0707704358",
    ctaIcon: "",
  },
];


const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string,
) => {
  const res = axios({
    method: 'post',
    url: '/api/contact',
    data: {
      email: email,
      name: name,
      phone: phone,
      company: company,
      message: message,
    },
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      toast.error("Oops something went wrong! That's on us.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false
      })
    } else if (error.request) {
      console.log(error.request);
      toast.error("Oops something went wrong! That's on us.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false
      })
    } else {
      console.log('Error', error.message);
      toast.error("Oops something went wrong! That's on us.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false
      })
    }
    console.log(error.config);
  }).then();
  return res;
};

const useContactForm = () => {
  const [ischeck, setIsCheck] = React.useState(false)
  let checkbox: boolean = ischeck;
  const [isdisabled, setIsDisabled] = React.useState(true)
  const [isempty, setIsEmpty] = React.useState(true);
  let empty: boolean = isempty;
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = async (e: any) => {
    if (e.target.id == 'terms') {
      checkbox = e.target.checked;
      setIsCheck(checkbox)
    } 
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
    if(e.target.value.trim().length < 1 && e.target.id !== 'terms') { 
      empty = true;
      setIsEmpty(true) 
    } else if(e.target.value.trim().length > 1 && e.target.id !== 'terms'){
      empty = false;
      setIsEmpty(false)
    }

    if (checkbox === false) {
      setIsDisabled(true) 
    } else if (checkbox === true && empty === true) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
    
  };

  return {values, handleChange, isdisabled };
};

const ContactPage: React.FC = () => {
  const {values, handleChange, isdisabled} = useContactForm();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.name, values.email, values.phone, values.company, values.message);
      if (req) toast.success("We got your info and will contact as soon as possible.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false
      })
    } catch (e) {
      console.log(e);
      toast.error("Oops something went wrong! That's on us.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false
      })
    }
  };
  return (
    <div className="flex flex-col">
      <header className="flex flex-col items-center p-20 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <h1 className="mt-6 text-6xl font-bold text-white leading-[73.2px] max-md:max-w-full max-md:text-4xl">
          {"We're"} here to help
        </h1>
        <p className="mt-12 text-xl font-medium leading-9 text-center text-gray-400 w-[805px] max-md:mt-10 max-md:max-w-full">
          Contact us if you have any questions about our company or products. We
          will try to provide an answer within a few days.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.MAP_LOCATION_LINK}
        >
          <img
            src="/static/images/message/map.png"
            alt="Contact us banner"
            className="mt-20 w-full aspect-[2.17] max-w-[1240px] max-md:mt-10 max-md:max-w-full"
          />
        </a>
      </header>
      <section className="flex justify-center items-center px-16 pb-20 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="mb-5 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {contactCardsData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <ContactCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="message-section"
        className="flex flex-col items-center px-16 pt-20 pb-11 w-full text-xl leading-6 bg-zinc-900 max-md:px-5 max-md:max-w-full"
      >
        <div className="flex flex-col mt-12 max-w-full w-[817px] max-md:mt-10">
          <h2 className="self-center text-5xl font-bold text-white leading-[58.08px] max-md:text-4xl">
            Leave a message
          </h2>
          <p className="mx-7 mt-10 font-medium leading-9 text-center text-gray-400 max-md:mr-2.5 max-md:max-w-full">
            Contact us if you have any questions about our company or products.
            We will try to provide an answer within a few days.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="justify-center items-start p-6 mt-14 font-medium text-gray-400 rounded-sm border-2 border-solid bg-zinc-800 border-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="justify-center items-start px-6 py-7 mt-10 font-medium text-gray-400 rounded-sm border-2 border-solid bg-zinc-800 border-zinc-700 max-md:px-5 max-md:max-w-full">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full bg-transparent focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="justify-center items-start px-6 py-7 mt-11 font-medium text-gray-400 rounded-sm border-2 border-solid bg-zinc-800 border-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <label htmlFor="phone" className="sr-only">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Contact Number"
                className="w-full bg-transparent focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="justify-center items-start px-6 py-6 mt-10 font-medium text-gray-400 rounded-sm border-2 border-solid bg-zinc-800 border-zinc-700 max-md:px-5 max-md:max-w-full">
              <label htmlFor="company" className="sr-only">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                className="w-full bg-transparent focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="items-start px-6 pt-7 mt-10 font-medium text-gray-400 rounded-sm border-2 border-solid bg-zinc-800 border-zinc-700 max-md:px-5 max-md:pb-10 max-md:max-w-full">
              <label htmlFor="message" className="sr-only">
                How can we help?
              </label>
              <textarea
                id="message"
                placeholder="How can we help?"
                className="w-full bg-transparent focus:outline-none pb-48"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-4 my-auto font-medium text-gray-400">
                <input
                  type="checkbox"
                  id="terms"
                  className="shrink-0 aspect-[1.03] fill-blue-500 w-[34px]"
                  onChange={handleChange}
                />
                <label htmlFor="terms" className="flex-auto my-auto">
                  I agree to the Terms & Conditions
                </label>
              </div>
              <button
                type="submit"
                className="justify-center items-center px-16 py-7 font-semibold text-white whitespace-nowrap bg-blue-500 rounded-sm max-md:px-5 disabled:bg-gray-300"
                disabled={isdisabled}
              >
                Submit
              </button>
            </div>
            <ToastContainer/>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
