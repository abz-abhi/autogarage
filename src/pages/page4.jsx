import P4note from "../components/P4content";

function Page4() {
  return (
    <div className=" flex flex-col justify-center ">
      <div
        className="flex flex-row items-center pl-[24rem] pt-32
         xxs:flex xxs:flex-col xxs:pl-0 xxs:pt-5
         md:flex md:flex-col 
         lg:flex lg:flex-row lg:pl-0 lg:pt-28
         xl:pl-[23rem] xl:pt-32 "
      >
        <div>
          <P4note />
        </div>
        <div className="max-h-[50rem] max-w-[85rem]">
          <img
            className="h-full w-full"
            src="/pexels-cottonbro-studio-4489734 2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Page4;
