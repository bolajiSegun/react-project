import heroImg from "../assets/hero-img.png";
import MiniBlog from "../components/MiniBlog";
import FeatureWork from "../components/FeatureWork";
import { useAuth } from "../ContextAPI/AuthUpdate";

function Home() {
  const { user } = useAuth();

  return (
    <div className="bg-[#EDF7FA] ">
      <div className="bg-white pb-5 lg:flex lg:mt-20 lg:justify-between lg:items-center lg:flex-row-reverse">
        <img
          src={user ? user.displayPhoto : heroImg}
          alt="my-hero-img"
          title="This is the image of myself in the hero section"
          className="mt-14 lg:mt-0 w-44 lg:w-60 m-auto rounded-full aspect-square"
        />
        <div className="text-[#21243D] lg:mx-auto mb-20 lg:w-2/3">
          <h1 className="font-bold text-3xl lg:text-4xl mt-9 text-center">
            Hi, I am{" "}
            <span>{user ? user.username : "Creative Technologist"}</span>,
            Creative Technologist
          </h1>

          <p className="text-center mt-5 mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a
            href="#"
            className="bg-[#FF6464] text-white rounded-sm px-5 py-2 text-center m-auto"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="bg-[#EDF7FA] px-5 pt-10">
        <h3 className="text-[#21243D] mb-5 text-lg">Recent Post</h3>
        <MiniBlog />
        <MiniBlog />
      </div>
      <div className="text-[#21243D] bg-white py-10">
        <h3 className="pb-8 text-lg">Featured Works</h3>
        <FeatureWork />
      </div>
    </div>
  );
}

export default Home;
