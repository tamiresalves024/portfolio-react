function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>
        Desenvolvedora Full Stack focada em interfaces claras e funcionais
      </h1>

      <p style={styles.subtitle}>
        Trabalho com React, JavaScript e CSS criando aplicações modernas,
        responsivas e bem estruturadas.
      </p>

      <button
  style={styles.button}
  onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
  onMouseLeave={(e) => e.target.style.backgroundColor = "#d9b79a"}
>
  Ver projetos
</button>

    </section>
  );
}

const styles = {
 hero: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",   // 👈 centraliza tudo
  textAlign: "center",    // 👈 centraliza o texto
  gap: "24px",
},

  title: {
  fontSize: "40px",
  fontWeight: "700",
  margin: "0",
  paddingBottom: "15px",
  color: "#2e1f16",
  lineHeight: "1.3", 
},
subtitle: {
  fontSize: "20px",
  maxWidth: "700px",
  lineHeight: "1.6",
  color: "#5c4638",
  margin: "0 auto", 
},


  button: {
    width: "fit-content",
    padding: "14px 28px",
    backgroundColor: "#d9b79a",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    color: "#2e1f16",
  },
};

export default Hero;
