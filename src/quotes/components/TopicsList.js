import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';
import { spacing, color } from 'utils';
import { H6 } from 'elements';

const topicsList = ({ topics }) => (
  <TagsWrapper>
    <Title>Temat:</Title>
    {topics.map(topic => (
      <Tag key={topic}>{topic}</Tag>
    ))}
  </TagsWrapper>
);

topicsList.propTypes = {
  topics: arrayOf(string)
};

topicsList.defaultProps = {
  topics: null
};

export default topicsList;

const TagsWrapper = styled.div`
  margin-bottom: ${spacing[3]};
`;

const Tag = styled.span`
  font-size: 0.85rem;
  border: 1px solid ${color.action};
  border-radius: 100px;
  padding: ${spacing[0]} ${spacing[2]};
  margin-right: ${spacing[1]};
`;

const Title = styled(H6)`
  display: inline;
  margin-right: ${spacing[1]};
`;
