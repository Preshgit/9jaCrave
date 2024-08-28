import NavBar from "../../components/navBar";
import SmallReview from "../../components/smallReview";

function HomePage() {
  return (
    <main className="w-screen h-screen meshWhite pt-3">
      <NavBar />
      <div className="h-screen mt-14">
        <h1 className="raleway text-6xl font-bold w-4/4 mx-auto text-center">
          The Intersection of Taste and Talent
        </h1>
        <div className="text-center mt-5 raleway italic class">
          <h2 className="font-semibold text-xl">
            Discover, Share, and Create Nigerian Recipes Together
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
    </main>
  );
}

export default HomePage;
