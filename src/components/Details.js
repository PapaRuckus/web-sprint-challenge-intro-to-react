import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const DetailItem = styled.li`
  /* align-items: flex-start; */
  margin-bottom: 10px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  margin-left: 5px;
`;

export default function Details({ character }) {
  return (
    <DetailsContainer>
      <DetailItem>
        <DetailLabel>Height:</DetailLabel>
        <DetailValue>{character.height}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Mass:</DetailLabel>
        <DetailValue>{character.mass}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Hair Color:</DetailLabel>
        <DetailValue>{character["hair_color"]}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Skin Color:</DetailLabel>
        <DetailValue>{character["skin_color"]}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Eye Color:</DetailLabel>
        <DetailValue>{character["eye_color"]}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Birth Year:</DetailLabel>
        <DetailValue>{character["birth_year"]}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>Gender:</DetailLabel>
        <DetailValue>{character.gender}</DetailValue>
      </DetailItem>
    </DetailsContainer>
  );
}
