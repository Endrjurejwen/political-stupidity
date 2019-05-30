import styled, { css, keyframes } from 'styled-components';
import { Card, H5, Paragraph } from 'elements';
import { spacing, flexCenter, color } from 'utils';

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
  }
  }
  100% { 
    opacity: 1; 
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${({ isAnimated }) =>
    isAnimated
      ? css`
          ${fadeIn} 0.2s ease-in-out
        `
      : null};
`;

const Title = styled(H5)`
  width: 70%;
  color: ${color.textLight};
`;

const Header = styled.header`
  padding: ${spacing[2]} ${spacing[3]};
  background-image: linear-gradient(
    70deg,
    #3542cc 0%,
    ${color.action} 65%,
    ${color.textLight} 65%
  );
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  border: 2px solid ${color.action};
  margin-bottom: ${spacing[3]};
`;

const ActionButtonsWrapper = styled.aside`
  ${flexCenter({ justifyContent: 'space-between' })};
  padding: ${spacing[3]} ${spacing[2]};
  position: relative;
  border-top: 1px solid ${color.layoutBorder};
`;

const Footer = styled.footer`
  margin-bottom: ${spacing[3]};
  padding: 0 ${spacing[3]};
`;

const TextContent = styled(Paragraph)`
  padding: 0 ${spacing[3]};
`;

export {
  AnimatedCard,
  TextContent,
  Title,
  Header,
  ActionButtonsWrapper,
  Footer
};
