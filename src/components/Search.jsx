// Search.js
import styled from "styled-components";

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
`;

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
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  width: 500px;
  position: absolute;
  left: 320px;
  top: 150px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

const Search = () => {
  return (
    <SearchContainer className="px-12">
      <SearchInput placeholder="Type your keyword here..." />
      <SearchButton>Search Mockup</SearchButton>
    </SearchContainer>
  );
};

export default Search;
