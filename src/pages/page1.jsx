import Infobox from "../components/headfooter";

function Page1() {
    return(
        <div>
          {/* head baground image  */}
          <div className="relative">
            <img
              className="h-[52rem] w-screen object-cover"
              src="../public/pexels-artem-podrez-8986100 1.png"
              alt=""
            />
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent"></div>
            {/* discription box container */}
            <div className="bg  absolute top-80 left-40 ">
              <div className="flex flex-col gap-6">
                <h1 className="text-white text-[50px] leading-[4rem]">
                  EXPERT CAR REPAIR <br />
                  SERVICE CERTIFIED
                </h1>
                <p className="text-[15px] text-white ">
                  We offering well-trained machanics and exeellent coustomer{" "}
                  <br />
                  services,all at competitive prices of vehicle repair at your
                  home <br />
                  or place of work.
                </p>
              </div>
              <div className=" flex gap-8 mt-4">
                <button className="bg-blue-700 text-white w-60">
                  MAKE APPOINTMENT
                </button>
                <div className="flex items-center">
                  <img className="h-7" src="../public/phone-call 1.png" alt="" />
                  <div className=" flex flex-col pl-2 w-56 -space-y-2 items-center text-white">
                    <h1 className="text-[27px]">123 456 678 0</h1>
                    <h1 className="text-[10px]">24-HOUR EMERGENCY ASSISTANCE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* head footer */}
          <div className="bg-blue-800  h-[166px] flex items-center justify-around">
            <Infobox
              imgSrc="../public/best-prices.png"
              title="BEST PRICES"
              description="All mechanical repairs and services are available at affordable rates"
            />
            <Infobox
              imgSrc="../public/guarantee.png"
              title="100% GUARANTEE"
              description="All of our repairs and services come with a guarantee period"
            />
            <Infobox
              imgSrc="../public/certified.png"
              title="CERTIFIED MECHANICS"
              description="All of our mechanics are qualified and are regularly trained"
            />
          </div>
        </div>)
}
export default Page1;