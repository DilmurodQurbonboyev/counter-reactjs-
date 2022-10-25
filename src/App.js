import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header/>
        <main>
            <Section />
            <Table />
        </main>
        <Footer />
    </div>
  );
}

export default App;
