import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { CreatePage } from "./pages/CreatePage/CreatePage";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { EditPage } from "./pages/EditPage/EditPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pirates/new" element={<CreatePage />} />
          <Route path="/pirates/:id" element={<DetailsPage />} />
          <Route path="/pirates/:id/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
