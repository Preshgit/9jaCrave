function Reviews() {
  return (
    <div className="h-fit border rounded-lg">
      <figure className=" bg-white  rounded-lg p-0 md:p-0">
        <div className="float-left mx-3 mt-10">
          <img
            className="w-16 h-16 rounded-full mx-auto object-cover"
            src="/selfie.jpg"
            alt=""
          ></img>
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
          <blockquote>
            <p className="text-base font-semibold">
              “I got to hear about Naija Crave from a friend, fascinated and I
              decided to try some of the dishes I found on here. Now, my family
              have been craving for some of my recipes”
            </p>
          </blockquote>
          <figcaption className="font-medium text-center">
            <div className="text-cyan-600 text-sm">Sarah Dayan</div>
            <div className="text-gray-500 text-sm">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Reviews;
