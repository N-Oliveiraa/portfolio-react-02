export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Mensagem enviada!");
  }

  return (
    <section id="contato">
      <h2>Contato</h2>

      <form id="meu-formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label>Nome:</label>
          <input type="text" required />
        </div>

        <div className="campo">
          <label>E-mail:</label>
          <input type="email" required />
        </div>

        <div className="campo">
          <label>Mensagem:</label>
          <textarea />
        </div>

        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}