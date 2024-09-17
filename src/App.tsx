import "./App.scss";
import { Header } from "./components/ui/header/header";
import { Sidebar } from "./components/ui/sidebar/sidebar";
import { Banner } from "./components/ui/banner/banner";
import { Footer } from "./components/ui/footer/footer";
import { Products } from "./components/screens/products/products";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar children={<Banner />} />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
