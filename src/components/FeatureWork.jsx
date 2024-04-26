import dashboard from "../assets/dashboard.png";

function FeatureWork() {
  return (
    <>
      <div className="text-[] lg:flex md:flex lg:justify-center md:justify-center md:items-center lg:items-center lg:pb-10 my-10">
        <img
          src={dashboard}
          alt="dashboard sample"
          title="This is a typical example of a dashboard"
          className="m-auto"
        />
        <div className="text-left px-5 lg:w-2/4">
          <h2 className="font-bold text-xl mt-5">Designing Dashboards</h2>
          <div className="mt-5">
            <span className="bg-[#21243D] text-white font-extrabold py-1 px-5 rounded-full mr-10">
              2020
            </span>
            <span className="text-[#8695A4]">Dashboards</span>
          </div>
          <p className="mt-5 pb-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud am
          </p>
        </div>
      </div>
      <hr className="w-[90%] m-auto" />
    </>
  );
}

export default FeatureWork;
