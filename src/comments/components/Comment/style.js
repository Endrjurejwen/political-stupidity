import styled from 'styled-components';
import { Card, H6 } from 'elements';
import { spacing, flexCenter, color } from 'utils';

const Header = styled.header`
  padding: ${spacing[2]} ${spacing[3]} ${spacing[2]};
  /* border-bottom: 1px solid ${color.layoutBorder}; */
`;

const Footer = styled.footer`
  ${flexCenter({ justifyContent: 'space-between' })};
  padding: ${spacing[2]} ${spacing[1]} ${spacing[2]} ${spacing[3]};
  /* border-top: 1px solid ${color.action}; */
  position: relative;

  &:before, &:after {
    content: '';
    background: ${color.secondary};
    position: absolute;
    top: 0;
  }

  &:before {
    left: 0;
    height: 1px;
    width: 35%;
  }

  &:after {
    left: 35%;
    height: 10px;
    width: 10px;
    border-radius: 100px;
    transform: translateY(-5px);
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  padding: 0 ${spacing[3]} ${spacing[2]};
  margin-bottom: ${spacing[3]};
`;

export { Header, Footer, Text, Card, H6 };
