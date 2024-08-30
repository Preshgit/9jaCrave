import { Link } from "react-router-dom";

function ImageDiv({
  text,
  image,
  link,
  linkName,
}: {
  text: string;
  image: string;
  link: string;
  linkName: string;
}) {
  return (
    <div className="flex items-center w-3/4 h-[400px] shadow-md mx-auto rounded-lg bg-white mb-10">
      <div className="w-2/4 h-full rounded-lg">
        <img
          src={image}
          className="object-cover h-full w-full rounded-lg"
        ></img>
      </div>
      <div className="w-2/4 xxs:text-sm lg:text-xl poppins-regular leading-[20px] px-5 flex flex-col justify-evenly h-full gap-5 items-center rounded-lg">
        <p className="xxs:leading-7 md:leading-8 lg:leading-10 text-sm lg:text-base">
          {text}
        </p>
        <div className="flex bg-green-900 text-white p-2 rounded-lg capitalize text-sm">
          <Link to={link} />
          {linkName}
          <span>
            <img
              src="/svgs/arrow-narrow-up-right.svg"
              className="inline-block"
            ></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageDiv;
