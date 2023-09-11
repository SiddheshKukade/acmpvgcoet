import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/About/About";
import Events from "./screens/Events/Events";
// Components import
import Home from "./screens/Home/Home";
import Team from "./screens/Team/Team";
import Why from "./screens/Why/Why";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route index element={<Home />} />
    //       {/* <Route path="*" element={<Team />} /> */}
    //     </div>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route index eement={<Home />} /> */}
        <Route path="events" element={<Events />} />
        <Route path="why" element={<Why />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
