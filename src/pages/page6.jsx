import HelpBox from "../components/rightside";
import ContactBox from "../components/leftside";

function Page6() {
  return (
    <div className="pt-44 max-w-[2000px] bg-[rgb(243,243,244)]">
      <div className="bg-blue-700 w-[93rem] h-[48rem] relative flex justify-end items-end">
        <div className="relative w-[70rem] h-[40rem] overflow-hidden">
          <img
            className="object-cover ml-28 h-full w-full filter brightness-75"
            src="../public/track tires.png"
            alt="Tire"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-blue-700 bg-opacity-30 z-10"></div>
        </div>        
        <div className="absolute pt-[90px]  left-28 flex w-full h-full z-20">
          <ContactBox />
          <HelpBox />
        </div>
      </div>
    </div>
  );
}

export default Page6;
