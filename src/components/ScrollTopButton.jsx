import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const contato = document.getElementById("contato");

      if (!contato) return;

      const rect = contato.getBoundingClientRect();

      const nearContato = rect.top < window.innerHeight - 100;

      setShow(nearContato);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    show && (
      <button id="btn-topo" onClick={scrollTop}>
        ↑
      </button>
    )
  );
}