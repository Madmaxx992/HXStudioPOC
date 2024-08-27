// Search.js
import styled from "styled-components";
import Tabs from "./Tabs";

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #6366f1; // Tailwind blue
  color: white;
  border-radius: 8px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4f46e5;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  max-width: 1100px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transform: translateY(40px)
`;

const Search = () => {
  return (
    <SearchContainer className="px-8 align-center justify-center w-full mx-auto">
      {/* <SearchInput placeholder="Type your keyword here..." /> */}
      <input
        id="keyword"
        type="text"
        placeholder="Type your keyword here..."
        className="p-3 flex-1 w-full bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-0 shadow-none"
      />
      <SearchButton>Search Mockup</SearchButton>
    </SearchContainer>
  );
};

export default Search;
