import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Detail from "./pages/Detail";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
