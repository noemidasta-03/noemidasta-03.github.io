import "./Presentation.css";
import fotonoemi from "./foto-noemi.png";
export default function Presentation() {
  return (
    <div className="container-presentation">
      <div className="introduction">
        <h1>Ciao, sono Noemi D'Asta</h1>
        <div className="description">
          <strong>Junior Full Stack Web Developer</strong>
          <p>
            con esperienza in HTML, CSS, JavaScript, React, Node.js e SQL. Sono
            appassionata di tecnologia, problem solving e sempre alla ricerca di
            nuove sfide per crescere e perfezionarmi come sviluppatrice.
          </p>
        </div>
        <div>
          <img src={fotonoemi} className="style-img" />
        </div>
      </div>
    </div>
  );
}
