import Navbar from "./components/navbar";
import BioCard from "./components/BioCard";

export default function Home() {
  return (
    <div className="px-4 text-lg">
      <Navbar />
      <div className="max-w-[50rem] mx-auto mt-8">
        {/* <div className="w-96 h-96 mx-auto mb-12 rounded-2xl overflow-hidden">
          <img
            src="Portrait.jpg"
            alt="Picture of me"
            className="w-full h-full object-cover"
          />
        </div> */}
        <BioCard />
      </div>
    </div>
  );
}
