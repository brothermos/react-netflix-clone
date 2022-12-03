import { useState } from "react";
import "./App.css";
import Download from "./components/Download/Download";
import Enjoy from "./components/Enjoy/Enjoy";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Kids from "./components/Kids/Kids";
import Questions from "./components/Questions/Questions";
import Watch from "./components/Watch/Watch";
import data from "./data";

function App() {
   const [questions, setQuestions] = useState(data);
   return (
      <div>
         <Header />
         <Enjoy />
         <Download />
         <Watch />
         <Kids />
         <div style={{ padding: "3rem", background: "#000", color: "#fff", borderBottom: "8px solid #222" }}>
            <h3 style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "center" }}>Frequently Asked Questions</h3>
            {questions.map((question) => {
               return <Questions keys={question.id} {...question} />;
            })}
            <p style={{ margin: "2rem 0", fontSize: "1.rem", textAlign: "center" }}>
               Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div style={{ textAlign: "center" }}>
               <input style={{ padding: "1.5rem", width: "500px" }} type="email" placeholder="Email address" />
               <button
                  style={{
                     backgroundColor: "#e50914",
                     color: "#fff",
                     padding: "17.5px 1rem",
                     width: "200px",
                     border: "none",
                     fontSize: "1.625rem",
                     position: "relative",
                     top: "5px",
                  }}
                  type="submit"
               >
                  Get Started
               </button>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default App;
