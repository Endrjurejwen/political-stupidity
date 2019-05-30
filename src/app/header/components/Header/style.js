import styled from 'styled-components';
import { H1 } from 'elements';
import { spacing, color, elevation, media } from 'utils';

const Title = styled(H1)`
  transform: rotate(-2.5deg);
  ${elevation[2]};
  padding: 0 ${spacing[4]};
  margin-bottom: ${spacing[3]};
  margin-left: -5px;
  background-color: ${color.action};
  display: inline-block;
  color: ${color.textLight};
`;

const Header = styled.header`
  overflow: hidden;
  ${elevation[1]};
  margin: -${spacing[4]} -${spacing[1]} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing[5]} 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
    110deg,
    ${color.backgroundLight} 0%,
    ${color.backgroundLight} 0%,
    ${color.action} 0%,
    #3542cc 100%
  );

  ${media.phone`
    margin: -${spacing[4]} -${spacing[4]} 0;
    border: 2px solid ${color.action};
    border-top: none;
    border-bottom: 1px solid ${color.layoutBorder};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(
        110deg,
        ${color.backgroundLight} 0%,
        ${color.backgroundLight} 45%,
        ${color.action} 45%,
        #3542CC 100%
      );
  `}
`;

const Claim = styled.p`
  transform: rotate(2deg);
  margin-left: -5px;
  margin-top: -10px;
  z-index: 2;
  ${elevation[2]};
  padding: 0 ${spacing[4]};
  background-color: ${color.action};
  color: ${color.textLight};
  display: inline-block;
`;

const Logo = styled.div`
  margin-top: ${spacing[3]};
  color: ${color.textLight};
  font-size: 2rem;

  ${media.phone`
    margin-right: 16%;
    font-size: 2.5rem;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.phone`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;

export { Title, Header, Claim, Logo, Wrapper };
