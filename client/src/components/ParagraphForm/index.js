import React from "react";

class ParagraphForm extends React.Component {
 
  render() {
    console.log(this.state)
    return (<main className="container">
      <section>
        <form id="ParagraphForm-form" onSubmit={this.handleSubmit} method="post">
          <div className="form-group">
            <textarea name="message" className="form-control" placeholder="Paragraphe ici..." rows="5"></textarea>
          </div>
          <div>
            <button type="submit" className="btn">Envoyer</button>
          </div>
        </form>
      </section>
    </main>
    );
  }



}



export default ParagraphForm;
