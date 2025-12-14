function Projects() {
  const projects = [
    {
      title: "Landing Page Profissional",
      description:
        "Landing page desenvolvida em React com foco em layout limpo, responsividade e boas práticas.",
      link: "#",
    },
    {
      title: "Mini E-commerce",
      description:
        "Aplicação front-end com listagem de produtos, carrinho e organização de componentes.",
      link: "#",
    },
    {
      title: "Dashboard de Estudos",
      description:
        "Projeto em React para organização de estudos, utilizando componentes reutilizáveis.",
      link: "#",
    },
  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.title}>Projetos</h3>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} style={styles.card}>
            <h4 style={styles.cardTitle}>{project.title}</h4>
            <p style={styles.cardText}>{project.description}</p>
            <a href={project.link} style={styles.link}>
              Ver código
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginTop: "100px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#4b2e21",
    marginBottom: "32px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  cardTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "700",
    color: "#2e1f16",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#5c4638",
  },

  link: {
    marginTop: "auto",
    fontSize: "14px",
    fontWeight: "600",
    color: "#8b5e3c",
    textDecoration: "none",
  },
};

export default Projects;
