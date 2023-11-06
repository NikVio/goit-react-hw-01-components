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
            <StaticItem
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span>{stat.label}</span>
              <StaticPercentage>{stat.percentage}%</StaticPercentage>
            </StaticItem>
          );
        })}
      </StaticList>
    </StaticSection>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
