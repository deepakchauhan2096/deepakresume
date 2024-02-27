import React from "react";
import "./App.css";
import myfile from "./Deepak_Resume_updated.pdf";

function App() {
  // const [wide, setWide] = useState(false);

  // const Print = () => {
  //   window.print();
  // };

  // const handleDownload = () => {
  //   const filePath = myfile; // Replace with the actual path to your PDF file

  //   // Create a temporary link element
  //   const link = document.createElement("a");
  //   link.href = filePath;
  //   link.download = "downloaded_file.pdf"; // Change the name of the downloaded file if needed

  //   // Append the link to the document body
  //   document.body.appendChild(link);

  //   // Trigger a click on the link to start the download
  //   link.click();

  //   // Remove the link from the document body
  //   document.body.removeChild(link);
  // };

  return (
    <>
  
      <iframe
        src={`${myfile}#toolbar=0&navpanes=0&scrollbar=0`}
        // frameBorder="0"
        // scrolling="auto"
        height="100%"
        width="100%"
        style={{ height: "100vh", overflow: "hidden" }}
      ></iframe>
    </>
  );
}

export default App;
