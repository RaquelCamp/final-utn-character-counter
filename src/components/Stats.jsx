import bg1 from "../assets/bg1.png"
import bg2 from "../assets/bg2.png"
import bg3 from "../assets/bg3.png"

const pad = (n) => String(n).padStart(2, "0")

const Stats = ({ characters, words, sentences }) => {
  return (
    <div className="stats">
      <div className="stats__card stats__card--characters" style={{ backgroundImage: `url(${bg1})` }}>
        <span className="stats__number">{pad(characters)}</span>
        <span className="stats__label">Total Characters</span>
      </div>

      <div className="stats__card stats__card--words" style={{ backgroundImage: `url(${bg2})` }}>
        <span className="stats__number">{pad(words)}</span>
        <span className="stats__label">Word Count</span>
      </div>

      <div className="stats__card stats__card--sentences" style={{ backgroundImage: `url(${bg3})` }}>
        <span className="stats__number">{pad(sentences)}</span>
        <span className="stats__label">Sentence Count</span>
      </div>
    </div>
  )
}

export { Stats }
