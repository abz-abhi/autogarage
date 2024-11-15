import Page1Background from "../components/P1head";
import P1Footter from "../components/P1footer";
import P1Content from "../components/P1content";

function Page1() {
  return (
    <div>
      <div className="max-w-[2000px] bg-violet-600 flex justify-center items-center  ">
        <Page1Background />
        <P1Content />
      </div>
      <P1Footter />
    </div>
  );
}
export default Page1;
