import React from "react";

class ParagraphForm extends React.Component {
 
  render() {
    console.log(this.state)
    return (<main className="container">
        <form id="ParagraphForm-form" onSubmit={this.handleSubmit} method="post">
         <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="Titre de l'article" />
          </div>
        </form>
    </main>
    );
  }
}
export default ParagraphForm;
