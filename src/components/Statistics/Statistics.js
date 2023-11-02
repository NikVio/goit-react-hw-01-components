export const Statistics = ({label, percentage}) => {
    return <ul>
    <li>
      <span>{label}</span>
        <span>{percentage}</span>
    </li>
  </ul>
}