import Services from "../components/services";
function Page3() {
  return (
    <div className="bg-[rgb(243,243,244)] max-w-[2000px]  w-screen ">
      <div className=" flex justify-center ">
        <div className="flex flex-col items-center mt-36 ">
          {/* head container */}
          <div className=" mr-[61rem] ">
            <div className="flex gap-2 ">
              <img src="../public/separator-carsblue.svg" alt="" />
              <h1 className="text-[18px] text-blue-600">WHAT WE OFFERS</h1>
            </div>
            <h1 className="text-[33px]">EXPLORE OUR SERVICES</h1>
          </div>
          {/* service container */}
          <div className="flex gap-8 w-fit mt-8 justify-center">
            <Services
              imageSrc="../public/pexels-artem-podrez-8985915 1.png"
              title="OIL & FLUIDS SERVICES"
            />
            <Services
              imageSrc="../public/pexels-artem-podrez-8985915 1 (1).png"
              title="WHEEL BALANCING SERVICE"
            />
            <Services
              imageSrc="../public/pexels-artem-podrez-8985915 1 (2).png"
              title="OVERHAUL SERVICE"
            />
          </div>
          <button className="text-blue-600 text-[18px] h-12 w-[20rem] mt-10 pt-2 border border-blue-600">
            VIEW MORE SERVICE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Page3;
