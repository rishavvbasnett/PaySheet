const Notes = (props) => {
  const setNotes = props.setNotes;
  const notes = props.notes;

  return (
    <div className="notes">
      <p className="notes__title">Notes</p>
      <textarea
        className="notes__input"
        value={notes}
        placeholder="Optional"
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
};

export default Notes;
