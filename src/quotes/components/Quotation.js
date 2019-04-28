import React from 'react';
import styled from 'styled-components';
import { arrayOf, element, bool } from 'prop-types';
import moment from 'moment';
import { quotationType } from 'quotes/propTypes';
import { Toolbox, withToggle, DeleteButton, EditButton } from 'common';
import { Card, H5, Paragraph } from 'elements';
import { spacing, flexCenter, absolute, color } from 'utils';
import EditQuotation from 'quotes/containers/EditQuotation';
import DeleteQuotation from 'quotes/containers/DeleteQuotation';
import LikeQuotation from 'quotes/containers/LikeQuotation';
import ToCommentsButton from 'quotes/components/ToCommentsButton';

const DeleteQuotationWithToggle = withToggle({
  modalComponent: DeleteQuotation,
  toggleButton: DeleteButton
});

const EditQuotationWithToggle = withToggle({
  modalComponent: EditQuotation,
  toggleButton: EditButton
});

const quotation = ({ quotation, children, toolbox }) => (
  <Card>
    <Header>
      <Title data-testid="quotation-author">{quotation.politician}</Title>
    </Header>
    <Paragraph marginBottom={spacing[3]} data-testid="quotation-content">
      {quotation.content}
    </Paragraph>
    <Footer>
      <UserName data-testid="quotation-user">
        Opublikował {quotation.author.firstName} {quotation.author.lastName}
      </UserName>
      <Data data-testid="quotation-timestamp">
        {moment(quotation.createAt.toDate()).calendar()}
      </Data>
    </Footer>
    <Toolbox id={quotation.author.id}>
      <DeleteQuotationWithToggle quotation={quotation} />
      <EditQuotationWithToggle quotation={quotation} />
    </Toolbox>
    <ActionButtonsWrapper>
      <ToCommentsButton quotation={quotation} />
      <LikeQuotation quotation={quotation} />
    </ActionButtonsWrapper>
  </Card>
);

quotation.propTypes = {
  children: arrayOf(element),
  isToolboxDisplay: bool,
  quotation: quotationType,
  toolbox: element
};

quotation.defaultProps = {
  children: null,
  isToolboxDisplay: false,
  quotation: null,
  toolbox: null
};

export default quotation;

const Title = styled(H5)`
  width: 75%;
`;

const Header = styled.header`
  padding: ${spacing[2]} ${spacing[3]};
  background-color: ${color.secondary};
  /* width: 75%; */
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid ${color.action};
  margin-bottom: ${spacing[3]};
`;

const ActionButtonsWrapper = styled.aside`
  ${flexCenter({ justifyContent: 'space-between' })};
  padding: ${spacing[3]} ${spacing[2]};
  position: relative;
  /* border-top: 1px solid ${color.layoutBorder}; */

  &:before, &:after {
    content: '';
    background: ${color.secondary};
    position: absolute;
    top: 0;
  }

  &:before {
    right: 0;
    height: 1px;
    width: 82%;
  }

  &:after {
    right: 82%;
    height: 10px;
    width: 10px;
    border-radius: 100px;
    transform: translateY(-5px);
  }
`;

const UserName = styled.address`
  font-size: 0.85rem;
  font-style: normal;
  color: inherit;
`;

const Data = styled.time`
  font-size: 0.85rem;
  color: ${color.textSecondary};
`;

const ToolboxWrapper = styled.aside`
  ${absolute({ side: 'right' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 0;
`;

const Footer = styled.footer`
  margin-bottom: ${spacing[3]};
`;

// import React from 'react';
// import styled from 'styled-components';
// import { arrayOf, element, bool } from 'prop-types';
// import moment from 'moment';
// import { quotationType } from 'quotes/propTypes';
// import { Card } from 'elements';
// import { spacing, flexCenter, absolute } from 'utils';

// const quotation = ({ quotation, children, toolbox, isToolboxDisplay }) => (
//   <Card>
//     <p data-testid="quotation-content">{quotation.content}</p>
//     <Author data-testid="quotation-author">{quotation.politician}</Author>
//     <FlexContainer>{children}</FlexContainer>
//     <UserName data-testid="quotation-user">
//       Opublikował {quotation.author.firstName} {quotation.author.lastName}
//     </UserName>
//     <Data data-testid="quotation-timestamp">
//       {moment(quotation.createAt.toDate()).calendar()}
//     </Data>
//     <ToolboxWrapper isDisplay={isToolboxDisplay}>{toolbox}</ToolboxWrapper>
//   </Card>
// );

// quotation.propTypes = {
//   children: arrayOf(element),
//   isToolboxDisplay: bool,
//   quotation: quotationType,
//   toolbox: element
// };

// quotation.defaultProps = {
//   children: null,
//   isToolboxDisplay: false,
//   quotation: null,
//   toolbox: null
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

// const ToolboxWrapper = styled.aside`
//   ${absolute({ side: 'right' })};
//   ${flexCenter({ justifyContent: 'space-between' })};
//   display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
//   justify-content: space-between;
// `;
