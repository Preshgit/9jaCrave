/* eslint-disable react-hooks/exhaustive-deps */
import ImageDiv from "../../components/imageDiv";
import NavBar from "../../components/navBar";
import SmallReview from "../../components/smallReview";
import { useEffect, useState } from "react";
import { AboutUsImage } from "../../utils/functions";
import { exploreDiv } from "../../utils/types";
import Footer from "../../components/footer";
import Reviews from "../../components/reviews";

function HomePage() {
  const [info, setInfoDisplay] = useState<string>("");
  const [explorer, setExplorerDiv] = useState<exploreDiv>();

  useEffect(() => {
    const information = AboutUsImage("Discover");
    setExplorerDiv(information);
    setInfoDisplay("Discover");
  }, []);

  useEffect(() => {
    const information = AboutUsImage(info);
    setExplorerDiv(information);
  }, [info]);

  return (
    <main className="w-screen h-screen meshWhite pt-3 flex flex-col gap">
      <NavBar />
      <div className="h-screen flex flex-col mt-10 gap-0">
        <h1 className="raleway text-6xl font-bold w-4/4 mx-auto text-center">
          The Intersection of Taste and Talent
        </h1>
        <div className="text-center mt-5 raleway italic class">
          <h2 className="font-semibold text-xl">
            Discover, Share, and Create Together
          </h2>
          <div className="w-3/4 mx-auto h-[450px] rounded-lg relative">
            {/* <img
              src="/svgs/starburst-four-point-icon.svg"
              className="absolute h-28 w-28 bottom-10 opacity-45"
            ></img> */}
            <div className="  bg-black h-3 w-3  rounded-3xl border-2 border-yellow  mb-5 absolute top-60">
              <div className="bg-red-500 h-3 w-3   rounded-full hover:visible hidden hover:cursor-pointer animate-pulse"></div>
              <SmallReview />
            </div>

            <img
              src="images/14906d5f95f91f5dcd263116f6a9a84d-removebg-preview.png"
              className="w-full h-full object-contain rounded-lg"
            ></img>
            <img
              src="svgs/swirly-arrow-pointing-upwards-svgrepo-com.svg"
              className="absolute h-40 w-40 right-0 top-0 -rotate-45 opacity-80"
            ></img>
          </div>
        </div>
        <p></p>
      </div>
      <div className="mt-0 bg-white text-black" id="about">
        <h2 className="text-center text-6xl poppins-semibold text-gray-700 mb-10 mt-5">
          Become a Flavor Explorer
        </h2>
        <div className="mx-auto w-fit p-2 shadow-lg shadow-green-700/20 rounded-xl mb-10">
          <ul className="flex gap-10">
            <li
              className={
                info.includes("Discover")
                  ? "poppins-bold cursor-pointer bg-green-950 text-white transition-all duration-300 p-2 rounded-md"
                  : "poppins-bold cursor-pointer p-2"
              }
              onClick={() => setInfoDisplay("Discover")}
            >
              Explore Naija Flavors
            </li>
            <li
              className={
                info.includes("Share")
                  ? "poppins-bold cursor-pointer bg-green-950 text-white transition-all duration-300 p-2 rounded-md"
                  : "poppins-bold cursor-pointer p-2"
              }
              onClick={() => setInfoDisplay("Share")}
            >
              Share your masterpiece
            </li>
            <li
              className={
                info.includes("Chronicles")
                  ? "poppins-bold cursor-pointer bg-green-950 text-white transition-all duration-300 p-2 rounded-md"
                  : "poppins-bold cursor-pointer p-2"
              }
              onClick={() => setInfoDisplay("Chronicles")}
            >
              Food Chronicles
            </li>
          </ul>
        </div>
        <ImageDiv
          text={(explorer && explorer.text) || ""}
          image={(explorer && explorer.image) || ""}
          link={(explorer && explorer.link) || ""}
          linkName={explorer?.linkName || ""}
        />
      </div>
      <div className="flex flex-col mb-10 p-5  relative bg-white text-black">
        <h3 className="poppins-semibold text-3xl text-center">
          What People Have To say
        </h3>
        <div className="mt-10 relative  grid xxs:grid-cols-2 lg:grid-cols-3 gap-5">
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;
