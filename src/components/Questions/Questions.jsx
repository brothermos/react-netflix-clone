import React, { useState } from "react";
import { QuestionsCon } from "./styled";

function Questions({ title, info }) {
   const [showInfo, setShowInfo] = useState(false);

   return (
      <QuestionsCon>
         <div style={{ display: "flex", justifyContent: "center" }}>
            <div
               style={{
                  background: "#303030",
                  fontSize: "1.5rem",
                  width: "750px",
                  borderBottom: "2px solid #000",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.7rem 2rem",
               }}
            >
               <p style={{ display: "flex", alignItems: "center" }}>{title}</p>
               <button style={{ border: "none", background: "transparent", fontSize: "3rem", color: "#fff" }} onClick={() => setShowInfo(!showInfo)}>
                  {showInfo ? "-" : "+"}
               </button>
            </div>
         </div>
         <div style={{ display: "flex", justifyContent: "center" }}>
            {showInfo && (
               <p
                  style={{
                     background: "#303030",
                     fontSize: "1.2rem",
                     width: "750px",
                     padding: "1rem 2rem",
                     marginBottom: "0.5rem",
                  }}
               >
                  {info}
               </p>
            )}
         </div>
      </QuestionsCon>
   );
}

export default Questions;
