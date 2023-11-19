import ContentSection from "../components/content/content";
import FooterSection from "../components/footer/footer";
import HeaderSection from "../components/header/header";
import { BiArrowToTop } from "react-icons/bi";
const HomePage = () => {

  return (
    <section
    id="header"
     className="w-full min-h-[200vh] bg-slate-50 relative scroll-smooth">
      <HeaderSection />
      <ContentSection />
      <FooterSection />
      <button
        id="goUp"
        className={`right-7 top-[88vh] fixed z-50 flex w-12 h-14 items-center justify-center text-[2.5em]
        bg-yellow-400 bg-opacity-90 hover:scale-105 transition-all`}
      >
        <BiArrowToTop />
      </button>
    </section>
  );
};

export default HomePage;
