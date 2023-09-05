import { SectionWrapper } from "../hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className=" text-lg text-white bottom-0 z-40 bg-transparent w-full h-[120px] sm:h-[60px] flex flex-col sm:flex-row align-middle items-center justify-between">
      <a href="https://drive.google.com/file/d/1L-VbTj2CM9-O4bYMMfIIlf_Ru_NqgBJp/view?usp=sharing" target="_blank">
        <button
          type="submit"
          className="hover:bg-tertiary py-3 px-8 outline-none w-fit hover:text-white font-bold shadow-md shadow-primary rounded-xl bg-white text-black transition-all ease-in-out"
        >
          Download CV
          <i className="ml-2">
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </i>
        </button>
      </a>
        <div className=" flex items-center justify-evenly gap-4">
            <a href="https://wa.me/7980042981" target="_blank"><FontAwesomeIcon className="h-[40px] w-[40px] hover:text-green-600" icon={faWhatsapp} /></a>
            <a href="mailto:guptarishabh244@gmail.com" target="_blank"><FontAwesomeIcon className="h-[40px] w-[40px] hover:text-red-600" icon={faEnvelope} /></a>
            <a href="https://www.linkedin.com/in/rishabh-gupta-b987b0211/" target="_blank"><FontAwesomeIcon className="h-[40px] w-[40px] hover:text-blue-600" icon={faLinkedinIn} /></a>
            <a href="https://github.com/codeRishabh/" target="_blank"><FontAwesomeIcon className="h-[40px] w-[40px] hover:text-[#4e15dfe6]" icon={faGithub} /></a>
        </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
