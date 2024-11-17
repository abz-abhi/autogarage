import Reviews from "../components/reviews";

function Page5() {
  return (
    <div className="bg-[rgb(243,243,244)] mt-36 flex justify-center  
    xxs:mt-5
    lg:mt-20
    xl:mt-36
    ">
      <div className="space-y-4 ">
        <div className="flex flex-col space-y-1  w-full">
          <h1 className="flex gap-4">
            <img src="../public/separator-carsblue.svg" alt="" />
            TESTIMONIALS
          </h1>
          <h1 className="text-[24px]">WHAT OUR CLIENTS SAYS</h1>
        </div>
        <div className="flex flex-row justify-around gap-5  max-w-[60rem]
        xxs:flex xxs:flex-col
        md:flex md:flex-col
        lg:flex lg:flex-row
        ">
          <Reviews
            rev="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
            imgSrc="../public/face-1.png"
            person="Bradford B. Pounds"
            job="Santa Cruz, CA"
          />
          <Reviews
            rev="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
            imgSrc="../public/face-2.png"
            person="Catherine Lopez"
            job="Santa Cruz, CA"
          />
          <Reviews
            rev="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
            imgSrc="../public/face-3.png"
            person="Mechael M.Brown"
            job="Santa Cruz, CA"
          />
        </div>
      </div>
    </div>
  );
}
export default Page5;
