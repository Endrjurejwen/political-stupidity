import React from 'react';
import { element } from 'prop-types';
import { quotationType } from 'app/quotes/propTypes';
import { Toolbox, withToggle, DeleteButton, EditButton, Data } from 'app/common';
import { spacing } from 'utils';
import EditQuotation from 'app/quotes/containers/EditQuotation';
import DeleteQuotation from 'app/quotes/containers/DeleteQuotation';
import LikeQuotation from 'app/quotes/containers/LikeQuotation';
import TagsList from 'app/quotes/components/TagsList';
import Author from 'app/quotes/components/Author';

import * as S from './style';

const DeleteQuotationWithToggle = withToggle({
  modalComponent: DeleteQuotation,
  toggleButton: DeleteButton
});

const EditQuotationWithToggle = withToggle({
  modalComponent: EditQuotation,
  toggleButton: EditButton
});

const quotation = ({ quotation, navigateButton }) => (
  <S.Card>
    <S.Header>
      <S.Title>{quotation.politician}</S.Title>
    </S.Header>
    <TagsList topics={quotation.topics} />
    <S.Paragraph marginBottom={spacing[3]} data-testid="quotation-content">
      {quotation.content}
    </S.Paragraph>
    <S.Footer>
      <Author credentials={quotation.author} />
      <Data dataNumber={quotation.createAt} />
    </S.Footer>
    <Toolbox id={quotation.author.id}>
      <DeleteQuotationWithToggle quotation={quotation} />
      <EditQuotationWithToggle quotation={quotation} />
    </Toolbox>
    <S.ActionButtonsWrapper>
      {navigateButton}
      <LikeQuotation quotation={quotation} />
    </S.ActionButtonsWrapper>
  </S.Card>
);

quotation.propTypes = {
  navigateButton: element,
  quotation: quotationType
};

quotation.defaultProps = {
  navigateButton: null,
  quotation: null
};

export default quotation;
