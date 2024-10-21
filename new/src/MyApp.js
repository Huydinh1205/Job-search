import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Job from "./Job";
import Search from "./Search";

function MyApp() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Job />
      <Footer />
    </div>
  );
}

export default MyApp;
