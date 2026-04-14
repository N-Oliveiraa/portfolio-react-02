import { projetos } from "../data/projetos";

export default function Projects() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div className="projetos-container">
        {projetos.map((p) => (
          <div className="card-projeto" key={p.id}>
            <img src={p.imagem} alt={p.titulo} />

            <div className="info-projetos">
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className="botoes-projeto">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ver-projeto"
                >
                  Ver projeto
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}