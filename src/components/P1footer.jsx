import Infobox from "./headfooter";

function P1Footer() {
  return (
    <div className="bg-blue-800 min-h-[156px] flex flex-col gap-4 items-center justify-around sm:flex-row md:flex-row   ">
      <Infobox
        imgSrc="/best-prices.png"
        title="BEST PRICES"
        description="All mechanical repairs and services are available at affordable rates"
      />
      <Infobox
        imgSrc="/guarantee.png"
        title="100% GUARANTEE"
        description="All of our repairs and services come with a guarantee period"
      />
      <Infobox
        imgSrc="/certified.png"
        title="CERTIFIED MECHANICS"
        description="All of our mechanics are qualified and are regularly trained"
      />
    </div>
  );
}

export default P1Footer;
