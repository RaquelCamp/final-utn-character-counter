const ProgressBar = ({ letter }) => {
  return (
    <li className="progress-bar">
      <span className="progress-bar__letter">{letter.letterName.toUpperCase()}</span>
      <div
        className="progress-bar__track"
        role="meter"
        aria-valuenow={Math.round(letter.percentage)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar__fill" style={{ width: `${letter.percentage}%` }}></div>
      </div>
      <span className="progress-bar__count">{letter.amount} ({letter.percentage.toFixed(2)}%)</span>
    </li>
  )
}

export { ProgressBar }
