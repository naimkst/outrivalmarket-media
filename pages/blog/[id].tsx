import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import { TogetherToday } from "@/components/Home/TogetherToday";
import Image from "next/image";
import React from "react";

export default function SingleBlog() {
  return (
    <div>
      <Seo />
      <div className="pt-[150px]">
        <div className="container m-auto">
          <div className="text-center max-w-[723px] m-auto pb-[98px] border-b-[1px] border-[#9197A6] tablet:pb-[50px]">
            <p className="text-white text25 mb-[20px]">
              Published on <span className="font-bold"> November 15th</span>
            </p>
            <h2 className="text48 text-white mb-[36px]">
              The Simple Art of <br /> Not
              <span className="gradientText"> Being Miserable</span>
            </h2>
            <div className="flex items-center justify-evenly max-w-[80%] m-auto">
              <div className="flex items-center gap-[20px]">
                <Image
                  src={"/assets/images/blog/book.svg"}
                  alt="books"
                  height={35}
                  width={35}
                />
                <p className="text-[16] text-white">10 Min Read</p>
              </div>
              <span className="h-[39px] w-[1px] bg-[#4E555A]"></span>
              <div className="flex items-center gap-[20px]">
                <Image
                  src={"/assets/images/blog/bookmark.svg"}
                  alt="books"
                  height={29}
                  width={16}
                />
                <p className="text-[16] text-white">10 Min Read</p>
              </div>
            </div>
          </div>

          <div className="pt-[98px] blogContainer m-auto tablet:pt-[50px]">
            <p className="text-white text25">
              In Herman Hesse’s novel Siddhartha, the title character and his
              friend leave home, disowning all possessions, to seek spiritual
              enlightenment. <br /> <br />
              They decide to live on the road, homeless, journeying away from
              the known towards the unknown. It’s not a life of ease, but it is
              one they embrace. <br />
              <br />
              When they are hungry, they fast. When they are unoccupied, they
              meditate. When they are looking for answers, they wait. And as
              they move from place to place, they get more and more fixated on
              their goal. <br />
              <br />
              Eventually, however, they separate — it occurs due to their
              meeting with the Buddha himself. After hearing the legends about
              the Enlightened One and then seeking him out, they are both
              impressed with his calm poise and the simple profundity of his
              teachings. The friend, Govinda, stays behind to become his
              student, while Siddhartha — although appreciating what he has
              learned — decides to continue on a more individualistic pursuit.{" "}
              <br />
              <br />
              This pursuit takes him through both space and time: He settles
              down in a city, falls for a woman, and over the years, becomes a
              successful businessman. This, of course, doesn’t fulfill him
              either, so he leaves. His next stop, his final stop, is a small
              home by a river where he lives with a ferryman.
            </p>
          </div>

          <div className="containerSmall bg-[#0A131A] rounded-[20px] text-center py-[53px] mt-[100px] mb-[100px]">
            <h2 className="heading gradientText mb-[34px]">
              Still not convinced??
            </h2>

            <p className="text25 text-white mb-[25px]">
              How about we have a free 15 min phonecall ($150 value) To see how
              we can help <br /> you boost your brand? Just click the button
              below and lets get stated!
            </p>
            <button className="buttonText">Connect with us here</button>
          </div>

          <div className="max-w-[1280px] m-auto">
            <div className="grid grid-cols-2 items-center tablet:grid-cols-1">
              <div className="relative">
                <img
                  src={"/assets/images/blog/image-shape.png"}
                  alt="blog title"
                  className="absolute"
                />
                <div className="p-[115px] tablet:p-[130px] phone:p-[70px]">
                  <Image
                    src={"/assets/images/blog/shape-image.jpg"}
                    alt="blog title"
                    width={537}
                    height={780}
                    className="rounded-[20px] relative"
                  />
                </div>
              </div>
              <div>
                <p className="text-white text25 font-normal">
                  In Herman Hesse’s novel Siddhartha, the title character and
                  his friend leave home, disowning all possessions, to seek
                  spiritual enlightenment. <br /> <br />
                  They decide to live on the road, homeless, journeying away
                  from the known towards the unknown. It’s not a life of ease,
                  but it is one they embrace. <br />
                  <br />
                  When they are hungry, they fast. When they are unoccupied,
                  they meditate. When they are looking for answers, they wait.
                  And as they move from place to place, they get more and more
                  fixated on their goal. <br />
                  <br />
                  Eventually, however, they separate — it occurs due to their
                  meeting with the Buddha himself. After hearing the legends
                  about the{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[98px] blogContainer m-auto">
            <p className="text-white text25">
              In Herman Hesse’s novel Siddhartha, the title character and his
              friend leave home, disowning all possessions, to seek spiritual
              enlightenment. <br /> <br />
              They decide to live on the road, homeless, journeying away from
              the known towards the unknown. It’s not a life of ease, but it is
              one they embrace. <br />
              <br />
              When they are hungry, they fast. When they are unoccupied, they
              meditate. When they are looking for answers, they wait. And as
              they move from place to place, they get more and more fixated on
              their goal. <br />
              <br />
              Eventually, however, they separate — it occurs due to their
              meeting with the Buddha himself. After hearing the legends about
              the Enlightened One and then seeking him out, they are both
              impressed with his calm poise and the simple profundity of his
              teachings. The friend, Govinda, stays behind to become his
              student, while Siddhartha — although appreciating what he has
              learned — decides to continue on a more individualistic pursuit.{" "}
              <br />
              <br />
              This pursuit takes him through both space and time: He settles
              down in a city, falls for a woman, and over the years, becomes a
              successful businessman. This, of course, doesn’t fulfill him
              either, so he leaves. His next stop, his final stop, is a small
              home by a river where he lives with a ferryman.
            </p>
          </div>

          <TogetherToday />
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
