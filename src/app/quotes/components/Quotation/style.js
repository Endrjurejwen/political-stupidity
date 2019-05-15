import styled from 'styled-components';
import { Card, H5, Paragraph } from 'elements';
import { spacing, flexCenter, color } from 'utils';

const Title = styled(H5)`
  width: 75%;
`;

const Header = styled.header`
  padding: ${spacing[2]} ${spacing[3]};
  background-color: ${color.secondary};
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

const Footer = styled.footer`
  margin-bottom: ${spacing[3]};
`;

export { Card, Paragraph, Title, Header, ActionButtonsWrapper, Footer };
