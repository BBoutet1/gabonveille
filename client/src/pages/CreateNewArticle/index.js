import React from "react";
import NewParagraphForm from "../../components/ParagraphForm";
import ArticleTitleForm from "../../components/ArticleTitleForm";
const NewArticleForm = () => (
    
  <div className="container">
    <h5><strong>Ajouter un artile...</strong></h5>
    <ArticleTitleForm/>
    <NewParagraphForm/>
  </div>
 
);
export default NewArticleForm;