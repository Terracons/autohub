import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Listing type="cars" />} />
          <Route path="/parts" element={<Listing type="parts" />} />
          <Route path="/cars/:id" element={<ProductDetail type="cars" />} />
          <Route path="/parts/:id" element={<ProductDetail type="parts" />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
