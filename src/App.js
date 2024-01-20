import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
// import OnboardingPage2 from "./pages/OnboardingPage2/OnboardingPage2";
// import OnboardingPage3 from "./pages/OnboardingPage3/OnboardingPage3"
// import OnboardingPage4 from "./pages/OnboardingPage4/OnboardingPage4";
// import OnBoardingPage5 from "./pages/OnboardingPage5/OnBoardingPage5";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/onboarding2" element={<OnboardingPage2 />} />
        <Route path="/onboarding3" element={<OnboardingPage3 />} />
        <Route path="/onboarding4" element={<OnboardingPage4 />} />
        <Route path="/onboarding5" element={<OnBoardingPage5/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;