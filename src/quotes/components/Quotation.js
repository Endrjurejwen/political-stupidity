import React from 'react';
import styled from 'styled-components';
import { arrayOf, element } from 'prop-types';
import moment from 'moment';
import { quotationType } from 'quotes/propTypes';
import { Card } from 'elements';
import { spacing, flexCenter } from 'utils';

const quotation = ({ quotation, children, closeButton, id }) => (
  <Card id={id}>
    <p data-testid="quotation-content">{quotation.content}</p>
    <Author data-testid="quotation-author">{quotation.politician}</Author>
    <FlexContainer>{children}</FlexContainer>
    <UserName data-testid="quotation-user">
      Opublikował {quotation.author.firstName} {quotation.author.lastName}
    </UserName>
    <Data data-testid="quotation-timestamp">
      {moment(quotation.createAt.toDate()).calendar()}
    </Data>
    {closeButton}
  </Card>
);

quotation.propTypes = {
  children: arrayOf(element),
  closeButton: element,
  quotation: quotationType
};

quotation.defaultProps = {
  children: null,
  closeButton: null,
  quotation: null
};

export default quotation;

const Author = styled.div`
  margin: ${spacing[2]} 0;
  font-size: 0.9rem;
`;

const FlexContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  padding-bottom: ${spacing[3]};
  border-bottom: 1px solid lightgrey;
  margin-bottom: ${spacing[2]};
`;

const UserName = styled.div`
  font-size: 0.85rem;
`;

const Data = styled.time`
  font-size: 0.85rem;
  color: grey;
`;

// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import moment from 'moment';
// import { LikeButton, CloseButton } from 'common';
// import { Button, Card } from 'elements';
// import { spacing, flexCenter } from 'utils';

// const quotation = ({
//   quotation,
//   navigationClick,
//   likeClick,
//   deleteClick,
//   userId
// }) => (
//   <Card>
//     <p data-testid="quotation-content">{quotation.content}</p>
//     <Author data-testid="quotation-author">{quotation.author}</Author>
//     <FlexContainer>
//       <Button
//         secondary
//         data-testid="quotation-comments-button"
//         onClick={navigationClick}
//       >
//         Komentarze ({quotation.commentsCount})
//       </Button>
//       <LikeButton
//         likes={quotation.likesCount}
//         click={likeClick}
//         full={userId in quotation.likes}
//       />
//     </FlexContainer>
//     <UserName data-testid="quotation-user">
//       Opublikował {quotation.userFirstName} {quotation.userLastName}
//     </UserName>
//     <Data data-testid="quotation-timestamp">
//       {moment(quotation.createAt.toDate()).calendar()}
//     </Data>
//     <CloseButton
//       click={deleteClick}
//       isDisplay={quotation.authorId === userId}
//     />
//   </Card>
// );

// quotation.propTypes = {
//   quotation: PropTypes.shape().isRequired
// };

// export default quotation;

// const Author = styled.div`
//   margin: ${spacing[2]} 0;
//   font-size: 0.9rem;
// `;

// const FlexContainer = styled.div`
//   ${flexCenter({ justifyContent: 'space-between' })};
//   padding-bottom: ${spacing[3]};
//   border-bottom: 1px solid lightgrey;
//   margin-bottom: ${spacing[2]};
// `;

// const UserName = styled.div`
//   font-size: 0.85rem;
// `;

// const Data = styled.time`
//   font-size: 0.85rem;
//   color: grey;
// `;
