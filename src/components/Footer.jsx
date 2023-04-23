import CountryName from "./CountryName";
import CopywrightLogo from "./CopywrightLogo";
import Services from "./Services";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <CountryName />
      <div className="service-container">
        <div className="left">
          <Services title={"About"} />
          <Services title={"Advertising"} />
          <Services title={"Business"} />
          <Services title={"How Search works"} />
        </div>
        <div className="middle-service">
          <CopywrightLogo />
        </div>
        <div className="right-service">
          <Services title={"Privacy"} />
          <Services title={"Terms"} />
          <Services title={"Settings"} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
