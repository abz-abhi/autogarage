const Infobox = ({ imgSrc, title, description }) => {
  return (
    <div className=" h-28 w-[30rem] flex items-center">
      <img className="h-24" src={imgSrc} alt="" />
      <div className="pl-10 text-white space-y-2 items-center">
        <h1 className="text-[22px]">{title}</h1>
        <p className="text-[14px] ">{description}</p>
      </div>
    </div>
  );
};

export default Infobox;
