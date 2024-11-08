import Reviews from "../components/reviews";

function Page5() {
  return (
    <div>
      <div className="space-y-4 flex pt-20 flex-col max-w-[2000px] bg-[rgb(243,243,244)] justify-center items-center">
        <div className="flex flex-col space-y-1 mr-[38rem]">
          <h1 className="flex gap-4">
            <img src="../public/separator-carsblue.svg" alt="" />
            TESTIMONIALS
          </h1>
          <h1 className="text-[24px]">WHAT OUR CLIENTS SAYS</h1>
        </div>
        <div className="flex justify-around gap-5  w-[60rem]">
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
