import React, { useState } from "react";
import styled from "styled-components";
import Details from "./Details";

const CenteredContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterContainer = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CharacterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CharacterName = styled.h2`
  margin: 0;
  font-family: "Exo 2", sans-serif;
`;

const ToggleButton = styled.button`
  font-family: "Exo 2", sans-serif;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function Character({ character }) {
  const [hide, setHide] = useState(true);

  const handleToggle = () => {
    setHide(!hide);
  };

  return (
    <CenteredContainer>
      <CharacterContainer>
        <CharacterHeader>
          <CharacterName>{character.name}</CharacterName>
          <ToggleButton onClick={handleToggle}>
            {hide ? "See Details" : "Hide Details"}
          </ToggleButton>
        </CharacterHeader>
        {hide ? null : <Details character={character} />}
      </CharacterContainer>
    </CenteredContainer>
  );
}
