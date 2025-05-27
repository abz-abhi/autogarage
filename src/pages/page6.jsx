import HelpBox from "../components/rightside";
import ContactBox from "../components/leftside";

function Page6() {
  return (
    <div className=" max-w-[2000px] ">
      <div className="w-fit pt-[15rem]
      xxs:pt-5
      md:pt-[10rem]
      lg:pt-[15rem]
      ">
        <div
          className=" relative bg-blue-700 h-[45rem] w-[90rem] max-h-[45rem] max-w-[90rem] flex justify-end items-end
     xxs:h-fit xxs:w-fit
     md:h-[45rem] md:w-[90rem]
     "
        >
          <div className=" bg-bue-700 h-fit w-fit opacity-30 flex">
            <img
              className="w-full h-full"
              src="/track tires.png"
              alt="Tire"
            />
          </div>
        </div>
        <div
          className="relative  ml-[10rem] space-x-[35rem] w-fit flex flex-row justify-between 
     xxs:flex xxs:flex-col xxs:space-x-0 xxs:mt-0 xxs:ml-0 xxs:space-y-5 
     md:flex md:flex-row md:space-x-[15rem] md:pl-[22rem] md:bottom-[37rem]
     lg:flex lg:flex-row lg:pl-[17rem]
     xl:flex xl:flex-row xl:space-x-[35rem] xl:pl-[10rem]

     "
        >
          <ContactBox />
          <HelpBox />
        </div>
      </div>
    </div>
  );
}

export default Page6;
