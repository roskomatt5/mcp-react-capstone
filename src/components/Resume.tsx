// import { useState, useEffect } from "react";

// const PDFViewer = () => {
//   const [pdfData, setPdfData] = useState("");

//   useEffect(() => {
//     // Function to fetch PDF data from localStorage
//     const fetchPdfData = () => {
//       const storedPdfData = localStorage.getItem("pdfData");
//       if (storedPdfData) {
//         setPdfData(storedPdfData);
//       }
//     };

//     fetchPdfData();
//   }, []);
//   const handleFileChange = (event: { target: { files: any[] } }) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       if (e.target && typeof e.target.result === "string") {
//         const pdfBase64 = e.target.result;
//         localStorage.setItem("pdfData", pdfBase64);
//         setPdfData(pdfBase64);
//       }
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={() => handleFileChange} />
//       {pdfData && (
//         <embed
//           src={pdfData}
//           type="application/pdf"
//           width="100%"
//           height="600px"
//         />
//       )}
//     </div>
//   );
// };

// export default PDFViewer;
import { useState, useEffect, ChangeEvent } from "react";

const PDFViewer = () => {
  const [pdfData, setPdfData] = useState("");

  useEffect(() => {
    // Function to fetch PDF data from localStorage
    const fetchPdfData = () => {
      const storedPdfData = localStorage.getItem("pdfData");
      if (storedPdfData) {
        setPdfData(storedPdfData);
      }
    };

    fetchPdfData();
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === "string") {
        const pdfBase64 = e.target.result;
        localStorage.setItem("pdfData", pdfBase64);
        setPdfData(pdfBase64);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    localStorage.removeItem("pdfData");
    setPdfData("");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {pdfData && (
        <div>
          <embed
            src={pdfData}
            type="application/pdf"
            width="100%"
            height="600px"
          />
          <button onClick={handleDelete}>Delete PDF</button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
