import Infobox from "../components/headfooter";
import Page1Head from "../components/page1head";

function Page1() {
  return (
    <div className=" max-w-[2000px] ">
      <Page1Head />
      {/* <div className="bg-blue-800 h-[166px] flex items-center justify-around">
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
      </div> */}
    </div>
  );
}
export default Page1;
