import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <div className="bg-gray-200">
        <Header />

        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
