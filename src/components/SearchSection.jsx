import LaunguageLink from "./LaunguageLink";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";
import Button from "./Button";
import "../styles/searchsection.css";

const SearchSection = () => {
  return (
    <div>
      <Logo />
      <SearchMenu />
      <Button />
      <LaunguageLink />
    </div>
  );
};
export default SearchSection;
