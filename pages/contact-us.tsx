import { TogetherToday } from "@/components/About/TogetherToday";
import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState(false);
  const [submitErrMsg, setSubmitErrMsg] = React.useState(false);

  async function formSubmit(e: any) {
    setLoading(true);
    e.preventDefault();
    const formData: any = {};
    Array.from(e.target.elements).forEach((field: any) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    const sendMail = fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success === true) {
          setSubmitMessage(true);
        } else {
          setSubmitErrMsg(true);
        }
        console.log(data);
      });
  }

  const {
    loading: pageLoading,
    error,
    data: contactUs,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-us?populate=deep`);
  const data: any = contactUs;

  console.log(data?.data?.attributes, "contact us");
  return (
    <div>
      <Seo />
      <div className="pt-[157px] relative tablet:h-auto mb-[100px]">
        <div className="relative m-auto max-w-[70%] tablet:max-w-full">
          <h1 className="relative bigHeader text-center shadowBorder z-20  mb-[40px]">
            {data?.data?.attributes?.Title?.FirstText}
          </h1>
          <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
            {data?.data?.attributes?.Title?.FirstText}
          </h1>
        </div>
        <div className="absolute left-0 bottom-36 tablet:hidden">
          <img src="/assets/images/services/hero-start-shape.svg" alt="" />
        </div>
        {/* <div className="absolute left-0 bottom-0  tablet:hidden">
          <img src="/assets/images/services/hero-shape.svg" alt="" />
        </div> */}

        <div className="max-w-[1400px] m-auto mt-[100px] h-auto">
          <h2 className="text-center text37 weKnowGradent font-['MonumentBold'] mb-[20px]">
            {data?.data?.attributes?.ContactFormTitle}
          </h2>

          <ReactMarkdown className="text25 text-white max-w-[892px] text-center m-auto">
            {data?.data?.attributes?.ContactFormDescription}
          </ReactMarkdown>
          <div className="mt-[70px] relative tablet:px-[15px]">
            <form action="" onSubmit={formSubmit}>
              <div className="flex gap-5 mb-5 tablet:flex-col">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="w-full bg-[#162026] font-['Monument'] h-[76px] px-5 text-white"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full bg-[#162026] font-['Monument'] h-[76px] px-5 text-white"
                    name="phone"
                  />
                </div>
              </div>

              <div className="flex gap-5 mb-5 tablet:flex-col">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full bg-[#162026] font-['Monument'] h-[76px] px-5 text-white"
                    name="email"
                  />
                </div>
                <div className="w-full">
                  <select
                    name="service"
                    id=""
                    className="w-full bg-[#162026] font-['Monument'] h-[76px] px-5 text-[#929292]"
                  >
                    <option
                      value=""
                      className="w-full bg-[#162026] font-['Monument'] h-[76px] px-5 text-[#929292]"
                    >
                      Choose a Service
                    </option>
                    {data?.data?.attributes?.ServiceList?.map(
                      (item: any, index: number) => (
                        <option
                          key={`optionservice-${index}`}
                          value={item?.Title}
                          className="w-full bg-[#162026] font-['Monument'] h-[76px] px-5 text-[#929292]"
                        >
                          {item?.Title}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  id=""
                  cols={30}
                  rows={10}
                  className="w-full bg-[#162026] font-['Monument'] h-[385px] px-5 text-white py-5 placeholder:text-[#929292]"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="m-auto w-full flex items-center justify-center">
                <button className="buttonText">
                  {loading
                    ? "Loading..."
                    : data?.data?.attributes?.ContactFormButtonText}
                </button>
              </div>

              {submitMessage && (
                <p className="text-center text-white mt-5">
                  Thanks for contact us! We will get back to you soon.
                </p>
              )}
              {submitErrMsg && (
                <p className="text-white text-center mt-5">
                  Thanks for contact us! We will get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src={data?.data?.attributes?.MapLink}
          width="100%"
          height="500"
        ></iframe>
      </div>

      {data?.data?.attributes?.CTA?.IsShow && (
        <TogetherToday data={data?.data?.attributes?.CTA} />
      )}
      {data?.data?.attributes?.FooterAbout?.IsShow && (
        <FooterContent data={data?.data?.attributes?.FooterAbout} />
      )}
    </div>
  );
}
