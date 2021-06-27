import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class ParagraphForm extends React.Component {
 
  render() {
    console.log("page editor opened")
    return (
          <form id="ParagraphForm-form" onSubmit={this.handleSubmit} method="post">
            <Editor
              // editorState={editorState}
              // toolbarClassName="toolbarClassName"
              // wrapperClassName="wrapperClassName"
              // editorClassName="editorClassName"
              // onEditorStateChange={this.onEditorStateChange}
            />
            <div>
              <button type="submit" className="btn">Envoyer</button>
            </div>
          </form>
    );
  }



}



export default ParagraphForm;
