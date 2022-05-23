import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import EventsPage from "./Components/EventsPage/EventsPage";
import HomePage from "./Components/HomePage/HomePage";
import ExternalPage from "./Components/External/ExternalPage";
import EventsDetailsPage from "./Components/EventsPage/EventsDetailsPage";
import EventCategoryPage from "./Components/HomePage/EventCatergoryPage"; //make this dynamic
import CollaborateDashboard from "./Components/Collaborate/CollaborateDashboard";
import Gallery from "./Components/Gallery/Gallery";
import GalleryEvent from "./Components/Gallery/GalleryEvent";
import Analytics from "./Components/Analytics/Analytics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/internal" element={<EventsPage />} />
          <Route path="internalPage/:eid" element={<EventsDetailsPage />} />
          <Route path="events/:cid" element={<EventCategoryPage />} />
          <Route path="/external" element={<ExternalPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/collaborate" element={<CollaborateDashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/galleryEvent" element={<GalleryEvent />} />
          <Route path="/analytics" element={< Analytics/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
