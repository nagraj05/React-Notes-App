import PropTypes from "prop-types";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}

Sidebar.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,

  setCurrentNoteId: PropTypes.func.isRequired,

  currentNote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,

  newNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
