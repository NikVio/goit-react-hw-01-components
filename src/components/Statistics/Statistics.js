export const Statistics = ({title, data}) => {
  return (
    <section>
      <h2>{title}</h2>
          <ul>
        {data.map(stat => {
          return (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  )

}


