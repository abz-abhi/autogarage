

function Page1Background() {
  return (
    <div className=" w-screen flex flex-col max-w-[2000px]">
      <div className="relative top-0 left-0 w-full h-full flex sm:min-w-[640px] md:min-w-[768px]  ">
        <div className=" h-full w-full object-contain">
          <img
            className="object-contain h-full w-full"
            src="/pexels-artem-podrez-8986100 1.png"
            alt=""
          />
        </div>
        <div className="absolute inset-0  bg-gradient-to-tr from-black to-transparent"></div>
      </div>
    </div>
  );
}
export default Page1Background;


