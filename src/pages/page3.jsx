import Services from "../components/services";
function Page3() {
  return (
    <div className="bg-[rgb(243,243,240)] max-w-[2000px] ">
      <div className=" flex justify-center mt-36
      xxs:mt-5
      lg:mt-36
      ">
        <div
          className="flex flex-col items-center space-y-9 ">
          {/* head container */}
          <div className="w-full">
            <div className=" ">
              <div className="flex gap-2 ">
                <img src="/separator-carsblue.svg" alt="" />
                <h1 className="text-[18px] text-blue-600">WHAT WE OFFERS</h1>
              </div>
              <h1 className="text-[33px]">EXPLORE OUR SERVICES</h1>
            </div>
          </div>
          {/* service container */}

          <div
            className="flex flex-row gap-8 w-fit justify-center
            xxs:flex xxs:flex-col
          xs:flex xs:flex-col
          sm:flex sm:flex-col
          md:flex md:flex-row
          "
          >
            <Services
              imageSrc="/pexels-artem-podrez-8985915 1.png"
              title="OIL & FLUIDS SERVICES"
            />
            <Services
              imageSrc="/pexels-artem-podrez-8985915 1 (1).png"
              title="WHEEL BALANCING SERVICE"
            />
            <Services
              imageSrc="/pexels-artem-podrez-8985915 1 (2).png"
              title="OVERHAUL SERVICE"
            />
          </div>
          <button className="text-blue-600 text-[18px] bg-white h-12 w-[20rem]  border border-blue-600">
            VIEW MORE SERVICE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Page3;
