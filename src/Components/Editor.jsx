import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import PropTypes from 'prop-types';


export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="paneeditor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
                className="mark"
            />
        </section>
    )
}
Editor.propTypes = {
    currentNote: PropTypes.object.isRequired,
    updateNote: PropTypes.func.isRequired,
  };
  