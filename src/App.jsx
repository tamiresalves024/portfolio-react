import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div style={styles.page}>
      <Header />

      <main style={styles.main}>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f3ece6",
    minHeight: "100vh",
    fontFamily: "'Nunito', sans-serif",
    color: "#2e2e2e",
  },

  main: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
  },

  button: {
  width: "fit-content",
  padding: "14px 32px",
  backgroundColor: "#d9b79a",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  color: "#2e1f16",
  transition: "all 0.3s ease",  // Efeito suave de transição
},
  buttonHover: {
  backgroundColor: "#caa789", // Cor mais escura no hover
},

};

export default App;
