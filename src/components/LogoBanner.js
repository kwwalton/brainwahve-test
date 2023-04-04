import logo from "../assets/logo-text-right-brainwahve.svg";

function LogoBanner(props) {
  return (
    <header className="pt-[16px] pl-[20px] mb-[40px] md:mb-0">
      <img src={logo} alt="brainwahve logo and text" className="h-[40px]"></img>
    </header>
  );
}

export default LogoBanner;
