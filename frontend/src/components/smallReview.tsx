function SmallReview() {
  return (
    <div className="flex flex-col w-[200px] h-fit p-2 gap-5 items-center shadow-md rounded-lg">
      <figure className="w-[50px] h-[50px] rounded-full mr-auto">
        <img src="selfie.jpg" className="rounded-full w-full h-full" />
      </figure>
      <p className="text-sm font-bold text-left">
        I loved every moment looking up recipes for my woman to make
      </p>
    </div>
  );
}

export default SmallReview;
