import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const PersonalPage = () => {
  return (
    <div className=" flex justify-center items-center">
      <div>
        <div className=" pt-24 lg:pt-[100px]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-x-[50px] md:mx-[550px]">
            <div className=" w-full">
              <h1 className=" text-[40px] font-bold md:my-[1rem]">Hello 👋🏼</h1>
              <p className=" text-[14px] md:text-lg p-1 font-semibold w-full text-justify mb-[6px]">
                My name is Abdulkadir. I want to become a doctor in the future. I really like computer games. I try to
                balance my studies with my hobbies.
              </p>
              <div className=" flex items-center gap-x-2 -my-3">
                <p>Address :</p>{" "}
                <div className="bg-primary-content text-secondary px-3 py-2 rounded-[10px] my-3">
                  <Address address="0x6d3321b4637D8451740Cf400848602f838F7A594" />
                </div>
              </div>

              <div className=" flex items-center justify-center lg:justify-start gap-5 text-[20px] lg:text-[23px] my-1 ">
                <a
                  href={"https://github.com/0xabdulkadir"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-accent duration-300 ease-in-out text-[1.8rem]"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:talayabdulkadir30@gmail.com"
                  className=" hover:text-accent duration-300 ease-in-out text-[1.8rem]"
                >
                  <SiGmail />
                </a>
              </div>
            </div>

            <div className=" relative rounded-full overflow-hidden h-auto w-[270px] md:mb-20">
              <BlockieAvatar address="0x6d3321b4637D8451740Cf400848602f838F7A594" size={270} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
