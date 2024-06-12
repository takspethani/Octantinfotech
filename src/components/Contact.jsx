import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: BsFillTelephoneFill,
    color: "#ffffff",
    text: "+91 6352045341",
  },
  {
    icon: TbMailFilled,
    color: "#ffffff",
    text: "octantinfotech12@gmail.com",
  },
  {
    text: "814, Silver Trade Center, Mota Varachha, Surat, India, 395010.",
  },
];

const socialMediaLinks = [
  {
    icon: FaFacebookF,
    color: "#ffffff",
  },
  {
    icon: FaInstagram,
    color: "#ffffff",
  },
  {
    icon: FaLinkedin,
    color: "#ffffff",
  },
  {
    icon: BsFillTelephoneFill,
    color: "#ffffff",
  },
];

function Contact() {
  return (
    <>
      <div className="my-8">
        <h3 className="blue text-3xl font-normal sm:font-bold sm:text-3xl text-white mb-4">
          Contact Us
        </h3>
        <div className="tracking-wider leading-6 flex flex-col gap-y-2 text-base">
          {contactInfo.map((item, index) => (
            <p key={index} className="text-white flex gap-3 items-center">
              {item.icon && <item.icon style={{ color: item.color }} />}
              {item.text}
            </p>
          ))}
          {/* Social media icons */}
          <div className="text-center flex gap-4 mt-4">
            {socialMediaLinks.map((value, i) => (
              <div
                key={i}
                className="rounded-full blueicon flex flex-row items-center justify-center p-4 "
              >
                {value.icon && (
                  <value.icon
                    style={{
                      color: value.color,
                      height: "1.25rem",
                      width: "1.25rem",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
