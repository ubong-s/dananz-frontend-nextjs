import { StatRoot, StatsRoot } from '../../styles/components/_common';
import { StatProps } from '../../types/global';

const Stat: React.FC<{
  text: string;
  count: number;
}> = ({ count, text }) => {
  return (
    <StatRoot>
      {count}+ <span>{text}</span>
    </StatRoot>
  );
};

export const Stats: React.FC<{ stats: StatProps[] }> = ({ stats }) => {
  return (
    <StatsRoot>
      {stats.map((stat) => (
        <Stat
          key={stat.id}
          count={stat.attributes.count}
          text={stat.attributes.text}
        />
      ))}
    </StatsRoot>
  );
};
