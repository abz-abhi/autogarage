const Reviews = ({ rev, imgSrc, person, job }) => {
  return (
    <div className="h-[280px] w-[300px] bg-white flex justify-center items-center">
      <div className="h-[230px] w-[250px] bg-white space-y-4">
        <img src="../../public/Vector.png" alt="" />
        <p className="text-[12px]">{rev}</p>
        <div className="flex items-center pt-4">
          <img src={imgSrc} alt="" />
          <div className="ml-4 leading-tight"><h1 className="text-blue-600">{person}</h1>
          <p className="text-[10px]">{job}</p></div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
