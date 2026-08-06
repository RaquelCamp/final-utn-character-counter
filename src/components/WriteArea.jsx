const WriteArea = ({ handleChangeTextarea, text }) => {
  return (
    <textarea
      className="write-area"
      placeholder="Start typing here"
      onChange={handleChangeTextarea}
      value={text}
    ></textarea>
  )
}

export { WriteArea }
