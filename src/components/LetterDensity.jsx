import { useState } from "react"
import { ProgressBar } from "./ProgressBar"
import arrow from "../assets/arrow.png"

const LetterDensity = ({ sortLetters }) => {
  const [expanded, setExpanded] = useState(false)

  const visibleLetters = expanded ? sortLetters : sortLetters.slice(0, 5)

  return (
    <section className="letter-density">
      <h2>Letter Density</h2>

      {
        sortLetters.length === 0
          ? <p className="letter-density__empty">No characters found. Start typing to see letter density.</p>
          : <>
              <ul className="letter-density__list">
                {
                  visibleLetters.map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
                }
              </ul>

              {
                sortLetters.length > 5 &&
                <button
                  type="button"
                  className="letter-density__toggle"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "See less" : "See more"}
                  <img
                    src={arrow}
                    alt=""
                    className={`letter-density__arrow ${expanded ? "letter-density__arrow--open" : ""}`}
                  />
                </button>
              }
            </>
      }
    </section>
  )
}

export { LetterDensity }
