import React from "react";

export const ChainDockSection = () => {
  const [faqId, setFaqId] = React.useState(0);
  const [faq, setFaq] = React.useState(true);

  const handleFaq = (id: any) => {
    if (faqId === id) {
      setFaqId(0);
    } else {
      setFaqId(id);
    }
  };

  return (
    <div className="chainDockSection">
      <div className="py-[100px]">
        <div className="container">
          <div className="max-w-[750px] m-auto text-center mb-[150px] tablet:max-w-full tablet:mb-[50px]">
            <h2 className="heading text-white !leading-[48px]">
              Chain dock grapple <br /> american killick
            </h2>
            <p className="text25 text-white">
              Ballast gaff chain prey gangway fathom fathom lubber. Pink across
              of swab pinnace brethren grapple grapple Topgallant a yarr .
            </p>
          </div>

          <div className="grid grid-cols-2 justify-between tablet:grid-cols-1">
            <div className="max-w-[724px] tablet:max-w-full flex">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    What are stop-motion product videos?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(1);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 1 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 1 && (
                  <p className="text25 text-white font-normal">
                    Stop-motion product videos are a type of animation technique
                    in which objects are photographed in a series of frames,
                    with each frame showing a slight change in position or
                    angle. These frames are then played back in sequence to
                    create the illusion of movement. It's a great way to
                    showcase a product's features and benefits in a creative and
                    engaging way.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full flex justify-end ml-auto">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    How can Outrival Media create stop-motion product videos for
                    me?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(2);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 2 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 2 && (
                  <p className="text25 text-white font-normal">
                    Our team specializes in creating visually stunning
                    stop-motion product videos that will showcase your products
                    in the best possible light. We work closely with our clients
                    to understand their products and target audience, and use
                    that knowledge to create a unique and compelling video that
                    will grab the attention of viewers. Our team will handle
                    everything from concept development to final
                    post-production, guaranteeing a high-quality final product.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    What are the benefits of using stop-motion product videos?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(3);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 3 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 3 && (
                  <p className="text25 text-white font-normal">
                    Stop-motion product videos are a great way to showcase your
                    products in a unique and engaging way. It can help to
                    increase brand awareness, boost sales, and create a strong
                    emotional connection with your target audience.
                    Additionally, it makes your product stand out, and it's a
                    great way to show off your product's features and benefits
                    in a creative and memorable way.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full flex justify-end ml-auto">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    How can Outrival Media help me establish and enhance my
                    social media presence?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(4);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 4 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 4 && (
                  <p className="text25 text-white font-normal">
                    Outrival Media can assist you in the following ways: Setting
                    up social media accounts: We can help create and optimize
                    accounts on platforms such as Facebook, Instagram, Twitter,
                    and LinkedIn, ensuring that your brand looks professional
                    and trustworthy. Monitoring social media activity: We can
                    provide ongoing monitoring of your social media activity,
                    including tracking mentions, comments, and engagement
                    metrics, so you can stay on top of the conversation.
                    Developing and implementing a content strategy: We can help
                    you develop a content strategy that aligns with your overall
                    marketing goals and objectives, including creating and
                    curating engaging and relevant content, as well as
                    scheduling and publishing posts. Boosting social media
                    presence: We can help increase your visibility and reach on
                    social media through tactics such as paid advertising,
                    influencer marketing, and community building.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">What is UGC?</h3>
                  <p
                    onClick={() => {
                      handleFaq(5);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 5 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 5 && (
                  <p className="text25 text-white font-normal">
                    UGC stands for User-Generated Content. It is any content
                    created by users, such as photos, videos, testimonials,
                    reviews, and social media posts, that can be used by a brand
                    to promote their products or services.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full flex justify-end ml-auto">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    How can UGC help me engage with potential customers on
                    social media?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(6);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 6 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 6 && (
                  <p className="text25 text-white font-normal">
                    UGC can help in several ways: Authenticity: UGC is often
                    perceived as more authentic and trustworthy than
                    brand-created content, as it comes from real customers.
                    Social proof: UGC can serve as social proof and help
                    potential customers see the value and popularity of a
                    brand's products or services. Increased engagement: UGC can
                    increase engagement with potential customers on social media
                    by creating a sense of community and encouraging them to
                    share their own experiences. Personalization: UGC can be
                    tailored to the audience, making it more relatable and
                    personalized.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    How can Outrival Media help me leverage UGC in my social
                    media strategy?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(7);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 7 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 7 && (
                  <p className="text25 text-white font-normal">
                    Outrival Media can assist you in identifying and curating
                    relevant UGC, and integrating it into your social media
                    campaigns and content strategy. We can also help you create
                    and run UGC campaigns, such as photo or video contests, to
                    encourage customers to create content that can be used to
                    promote your brand.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full flex justify-end ml-auto">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    Does Outrival Media offer a self-serve option for social
                    media management?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(8);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 8 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 8 && (
                  <p className="text25 text-white font-normal">
                    Yes, we do. With the self-serve option, we will come-up with
                    and design content for the client and then share it with
                    them. The client will then be responsible for posting it on
                    their social media channels.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    What is included in the self-serve option?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(9);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 9 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 9 && (
                  <p className="text25 text-white font-normal">
                    The self-serve option includes: The creation and design of
                    content by our team Sharing of the content with the client
                    The client is responsible for scheduling and posting the
                    content on their social media channels
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full flex justify-end ml-auto">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    Does Outrival Media also offer a "we manage it for you"
                    option for social media management?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(10);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 10 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 10 && (
                  <p className="text25 text-white font-normal">
                    Yes, we do. With the "we manage it for you" option, we will
                    run and manage the client's social media accounts on their
                    behalf.
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    What is included in the "we manage it for you" option?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(11);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 11 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 11 && (
                  <p className="text25 text-white font-normal">
                    The "we manage it for you" option includes: Running and
                    managing the client's social media accounts Developing and
                    implementing a content strategy Scheduling and publishing
                    posts Monitoring and responding to social media activity
                    Providing regular reports and analysis of social media
                    performance
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-[724px] tablet:max-w-full flex justify-end ml-auto">
              <div className="mb-[60px]">
                <div className="text25 !font-bold text-white mb-[25px] flex justify-between items-center">
                  <h3 className="max-w-[90%]">
                    Can I switch between the self-serve and "we manage it for
                    you" options?
                  </h3>
                  <p
                    onClick={() => {
                      handleFaq(12);
                    }}
                    className="faqGrediant flex items-center justify-center text-[35px] leading-0 cursor-pointer"
                  >
                    {faqId != 12 ? "-" : "+"}
                  </p>
                </div>
                {faqId != 12 && (
                  <p className="text25 text-white font-normal">
                    Yes, you can switch between the self-serve and "we manage it
                    for you" options depending on your needs and preferences.
                    Our team will work with you to understand your goals and
                    recommend the best option for you.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
