import styled from 'styled-components';
import { breakpoints } from '../../styles';

interface StatProps {
  count: number;
  text: string;
}

const StatRoot = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  font-size: 32px;
  padding: 1rem 2rem 1.5rem;
  border-bottom: dashed 1px ${(props) => props.theme.colors.grayScale.lightGray};
  margin-bottom: 0;

  span {
    display: block;
    font-size: 16px;
  }

  &:last-of-type {
    border-bottom: none;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 40px;
    border-right: dashed 1px
      ${(props) => props.theme.colors.grayScale.lightGray};
    border-bottom: none;

    &:last-of-type {
      border-right: none;
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
    text-align: center;
    font-size: 52px;
    border: none;
    padding: 25px 50px;
  }
`;

const StatsRoot = styled.div`
  background-color: ${(props) => props.theme.colors.main.primary100};

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${breakpoints.large}) {
    grid-template-columns: 1fr;
    padding: 25px 0;
  }
`;

const Stat: React.FC<StatProps> = ({ count, text }) => {
  return (
    <StatRoot>
      {count}+ <span>{text}</span>
    </StatRoot>
  );
};

export const Stats = (): React.ReactElement => {
  return (
    <StatsRoot>
      <Stat count={250} text='Project Completed' />
      <Stat count={23} text='Professional Teams' />
      <Stat count={15} text='Years Experience' />
    </StatsRoot>
  );
};
