const Infobox = ({ imgSrc, title, description }) => {
  return (
    <div className=" max-h-20 max-w-[30rem] flex items-center">
      <img className=" max-h-24 h sm:h-24 xs:h-12 xxs:h-10" src={imgSrc} alt="" />
      <div className="pl-10 text-white space-y-2 items-center">
      <h1 className="text-[20px] lg:text-[22px] sm:text-[20px] xs:text-[16px] xxs:text-[14px]">{title}</h1>
        <p className="text-[15px] lg:text-[15px] sm:text-[14px] xs:text-[14px] xxs:text-[10px] ">{description}</p>
      </div>
    </div>
  );
};

export default Infobox;
