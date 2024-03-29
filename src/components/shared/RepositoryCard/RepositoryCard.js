import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StarIcon from '../../../assets/images/star-icon.svg';
import colors from '../../../setup/colors';

const RepositoryCard = ({
  url, title, description, stars,
}) => (
  <Container>
    <Title href={url} target="_blank">{title}</Title>
    <Description>{description}</Description>
    <StarsContainer>
      <img src={StarIcon} alt="Repository Star Icon" />
      <Stars>{stars}</Stars>
    </StarsContainer>
  </Container>
);

const Container = styled.div`
  width: 750px;
  height: auto;
  background: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.a`
  font-family: 'Raleway';
  font-size: 35px;
  color: ${colors.purple};
  margin: 0;
  text-decoration: none;
`;

const Description = styled.p`
  font-family: Raleway;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  color: ${colors.black};
`;

const StarsContainer = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`;

const Stars = styled.span`
  font-family: Raleway;
  font-size: 20px;
  font-weight: 300;
  margin-left: 5px;
  color: ${colors.gray};
`;

RepositoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default RepositoryCard;

