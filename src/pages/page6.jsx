import HelpBox from "../components/rightside";
import ContactBox from "../components/leftside";

function Page6() {
  return (
    <div className="bg-[rgb(243,243,244)] max-w-[2000px] w-screen   ">
      <div>
        <div className=" pt-20 w-fit mt-20  ">
          {/* background image  */}
          <div className="bg-blue-700 w-[95rem]  h-[48rem] flex justify-end items-end">
            <div className="relative bg-blue-700 w-[70rem] h-[40rem]">
              <img
                className="object-cover ml-28 h-full w-full filter brightness-75"
                src="../public/track tires.png"
                alt="Tire"
                flex
                justify-end
                items-end
              />
              <div className="absolute top-0 left-0 h-full w-full bg-blue-700 bg-opacity-30"></div>
            </div>
          </div>
          {/* right left box */}
          <div className="relative bottom-[40rem] left-40 max-w-[120rem]">
            <div className="  flex justify-between ">
              <ContactBox />
              <HelpBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
