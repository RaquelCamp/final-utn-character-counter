const formatReadingTime = (minutes) => {
  if (minutes === 0) return "0 minute"
  if (minutes < 1) return "< 1 minute"
  const rounded = Math.round(minutes)
  return `${rounded} minute${rounded === 1 ? "" : "s"}`
}

const Controlls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValue,
  readingTime }) => {
  return (
    <div className="controls">
      <div className="controls__options">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => handleExcludeSpaces(!excludeSpaces)}
          />
          <span className="checkbox__box"></span>
          Exclude Spaces
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          <span className="checkbox__box"></span>
          Set Character Limit
        </label>

        {
          limitCharacter &&
          <input
            className="controls__limit-input"
            type="number"
            min="0"
            value={limitValue}
            onChange={(e) => handleLimitValue(e.target.value)}
          />
        }
      </div>

      <p className="controls__reading-time">Approx. reading time: {formatReadingTime(readingTime)}</p>
    </div>
  )
}

export { Controlls }