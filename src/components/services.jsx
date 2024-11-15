const Services = ({ imageSrc, title }) => {
  return (
    <div className=" flex flex-col bg-white items-center">
      <img className="" src={imageSrc} alt="" />
      <div className=" w-full h-16 flex justify-center items-center">
        <h1 className=" text-[18px] text-blue-600">{title}</h1>
      </div>
    </div>
  );
};

export default Services;
