import React from 'react';
import styled from 'styled-components';
import { arrayOf, element } from 'prop-types';
import moment from 'moment';
import { quotationType } from 'quotes/propTypes';
import { Card } from 'elements';
import { spacing, flexCenter, absolute } from 'utils';

const quotation = ({ quotation, children, toolbox, id, isToolboxDisplay }) => (
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
    <ToolboxWrapper isDisplay={isToolboxDisplay}>{toolbox}</ToolboxWrapper>
  </Card>
);

quotation.propTypes = {
  children: arrayOf(element),
  quotation: quotationType,
  toolbox: HTMLBodyElement
};

quotation.defaultProps = {
  children: null,
  quotation: null,
  toolbox: null
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

const ToolboxWrapper = styled.aside`
  /* width: 200px;
  height: 100px; */
  ${absolute({ side: 'right' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: space-between;
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
