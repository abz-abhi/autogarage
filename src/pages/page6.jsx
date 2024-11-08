import HelpBox from "../components/rightside";
import ContactBox from "../components/leftside";

function Page6() {
  return (
    <div className="bg-[rgb(243,243,244)] max-w-[2000px] mt-10 flex flex-col items-start justify-center">
      <div className="pt-20 flex  w-screen max-w-[1905px] justify-start items-start">
        <div className="relative bg-blue-700 w-[95rem] h-[48rem] flex justify-end items-end">
          <div className="relative w-[70rem] h-[40rem]">
            <img
              className="object-cover ml-28 h-full w-full filter brightness-75"
              src="../public/track tires.png"
              alt="Tire"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-blue-700 bg-opacity-30"></div>
          </div>
          <div className="absolute flex gap-[40rem] left-10 top-1/2 transform -translate-y-1/2 z-20">
            <ContactBox />
            <HelpBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
