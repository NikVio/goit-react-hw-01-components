import {
  StaticList,
  StaticItem,
  StaticSection,
  StaticPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StaticSection>
      {title && <h2>{title}</h2>}
      <StaticList>
        {data.map(stat => {
          return (
            <StaticItem key={stat.id}>
              <span>{stat.label}</span>
              <StaticPercentage>{stat.percentage}%</StaticPercentage>
            </StaticItem>
          );
        })}
      </StaticList>
    </StaticSection>
  );
};
