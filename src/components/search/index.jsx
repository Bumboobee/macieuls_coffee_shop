import { useContext } from "react";
import * as SearchItem from "./style";
import ProductContext from "../../context";

function SearchBox({ placeholder }) {
  const {
    handleSearchInputChange,
  } = useContext(ProductContext);
    return (
      <SearchItem.Container>
        <SearchItem.Input
          placeholder={placeholder}
          onChange={handleSearchInputChange}
        ></SearchItem.Input>
      </SearchItem.Container>
    );
  }
  
export default SearchBox;
