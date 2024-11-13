import Page1Background from "../components/page1head";
import P1Footter from "../components/page1footer";
import P1Content from "../components/page1content";

function Page1() {
  return (
    <div className="max-w-[2000px] bg-yellow-300 flex justify-center items-center">
      <Page1Background />
      <P1Content />
      {/* <P1Footter /> */}
    </div>
  );
}
export default Page1;
