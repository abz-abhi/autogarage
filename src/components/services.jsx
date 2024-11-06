const Services = ({ imageSrc, title }) => {
  return (
    <div className="bg-green-400 w-fit flex flex-col items-center">
      <img src={imageSrc} alt="" />
      <h1>{title}</h1>
    </div>
  );
};

export default Services;
