import React, { useState } from "react";
import "./App.css";
import myfile from "./Deepak_Resume_updated.pdf";

function App() {
  const [wide, setWide] = useState(false);

  const Print = () => {
    window.print();
  };

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
    // <>
    //   <div className="container p-4">
    //     <div className="row">
    //       <div className="col-12 d-flex" style={{ gap: 2 }}>
    //         <button className="btn btn-dark" onClick={() => setWide((e) => !e)}>
    //           Screen Type
    //         </button>
    //         <a href={myfile} download>
    //           <button className="btn btn-success" onClick={handleDownload}>Download</button>
    //         </a>
    //         <button className="btn btn-primary" onClick={Print}>
    //           Print
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={wide ? "container-fluid" : "container"}>
    //     <div className="row">
    //       <div className="col-4 bg-light p-4">
    //         <h1 className="bg-light text-secondary">DEEPAK</h1>
    //         <p>React.js Developer</p>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-4 bg-light p-4 pt-0 mt-0">
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="bg-light text-secondary ">CONTACT</h5>
    //           </div>
    //           <b>Address:</b>
    //           <p>
    //             10307, Street no. 321, Sec-23 Sanjay Colony, Faridabad (Haryana)
    //             | India
    //           </p>
    //           <span className="d-flex">
    //             <b>phone:</b>
    //             <p>+91 8447517162</p>
    //           </span>
    //           <span className="d-flex">
    //             <b>Email:</b>
    //             <p>
    //               <a href="mailto:deepakchauhan2096@gmail.com" target="_blank" rel="noreferrer">
    //                 deepakchauhan2096@gmail.com
    //               </a>
    //             </p>
    //           </span>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="bg-light text-secondary ">LANGUAGES</h5>
    //           </div>
    //           <p>Hindi, English</p>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="bg-light text-secondary ">SKILLS</h5>
    //           </div>
    //           <p>
    //             <b>Frontend Technologies:</b> React.js, Gatsby.Js JavaScript
    //             (ES6+), HTML5, CSS3, Material-UI, Bootstrap,wordpess
    //           </p>
    //           <p>
    //             <b>State Management:</b> Redux, Context-API
    //           </p>
    //           <p>
    //             <b>Version Control:</b> Git
    //           </p>
    //           <p>
    //             <b>API Integration: </b> RESTful APIs
    //           </p>
    //           <p>
    //             <b>Testing </b> Unit testing (Jest, React Testing Library)
    //           </p>
    //           <p>
    //             <b>Agile Methodologies: </b>Agile
    //           </p>
    //           <p>
    //             <b>Debugging and Troubleshooting</b>
    //           </p>
    //           <p>
    //             <b>Team Collaboration and Communication</b>
    //           </p>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="bg-light text-secondary ">LINKS</h5>
    //           </div>
    //           <p>
    //             <a href="https://www.linkedin.com/in/deepakchauhan2096">
    //               Linkedin.com/deepakchauhan2096
    //             </a>
    //           </p>
    //           <p>
    //             <a href="https://www.github.com/in/deepakchauhan2096">
    //               Github.com/deepakchauhan2096
    //             </a>
    //           </p>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="bg-light text-secondary ">PROJECT</h5>
    //           </div>
    //           <p>
    //             <b>TryScrum.com</b> | web platform designed to facilitate agile
    //             project management
    //           </p>

    //           <p>
    //             <b>TryBusinessAgility.com</b> | web platform designed to
    //             facilitate agile project management
    //           </p>
    //           <p>
    //             <b>Point of Sales (POS) Application</b> | Developed a
    //             user-friendly POS system to streamline sales processes, manage
    //             inventory, and enhance customer experiences
    //           </p>

    //           <p>
    //             <b>Attendance Management System</b> | Created an automated
    //             attendance tracking system.
    //           </p>

    //           <p>
    //             <b>AAnalytics Dashboards and Customer Screens</b> | Designed and
    //             implemented interactive analytics dashboards and customer-facing
    //             screens to visualize and present data insights effectively
    //           </p>
    //         </div>
    //       </div>

    //       <div className="col-8">
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="text-secondary ">OBJECTIVE </h5>
    //           </div>
    //           <p>
    //             Experienced React JS Developer with 2 years of expertise in
    //             frontend web development, proficient in JavaScript, React.js,
    //             Redux, and HTML5/CSS. Seeking a challenging role to leverage my
    //             skills and contribute to creating innovative and usercentric web
    //             applications. Passionate about optimizing user experiences
    //             through clean and efficient code while staying updated with the
    //             latest industry trends and technologies.
    //           </p>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="text-secondary ">WORK EXPERIENCIES </h5>
    //           </div>
    //           <div>
    //             <p>
    //               <b>VerveBot | Gurugram, Haryana</b> | Gurugram, Haryana
    //             </p>
    //             <p>
    //               <b>React JS Developer | 31 May 2022 - Present </b>
    //             </p>
    //             <p>
    //               - Developed and maintained interactive and responsive web
    //               applications using React.js.
    //             </p>
    //             <p>
    //               - Utilized Redux for efficient state management, enhancing
    //               application performance.
    //             </p>
    //             <p>
    //               - Integrated RESTful APIs for seamless data exchange and
    //               improved user experiences.
    //             </p>

    //             <p>
    //               - conducted unit testing and participated in code reviews to
    //               ensure code quality.
    //             </p>
    //           </div>
    //           <div>
    //             <p>
    //               <b>Material Library Pvt. Ltd</b> | Gurugram, Haryana
    //             </p>
    //             <p>
    //               <b>React JS Developer | 12 July 2021 to 26 May 2022</b>
    //             </p>
    //             <p>- Wrote and reviewed code for JS.</p>
    //             <p>- Managed intern.</p>
    //             <p>
    //               - Designed and develop a fully responsive websites. Used PHP
    //               MySQLi as a - backend.
    //             </p>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="text-secondary ">CERTIFICATIONS </h5>
    //           </div>
    //           <p>
    //             <h6 className="pt-1 text-secondary">Embedded (C) </h6>
    //             National Institute of Open Schooling
    //           </p>
    //           <p>
    //             <h6 className="pt-1 text-secondary">Internshala.com </h6>
    //             Web Development Training (PHP, JavaScript & MySQL)
    //           </p>
    //           <p>
    //             <h6 className="pt-1 text-secondary">Coding Ninjas </h6>
    //             Data Structure & Algorithms (DSA IN JAVA)
    //           </p>
    //         </div>
    //         <div>
    //           <div className="border-bottom border-dark">
    //             <h5 className="text-secondary ">ACHIEVEMENTS </h5>
    //           </div>
    //           <p>
    //             <b className="pt-1">TECH-FEST-19 Lingya’s University</b>|
    //             Project Demonstration
    //           </p>

    //           <p>
    //             <b className="pt-1">TECHSHALA - 2018 YMCA University</b> |
    //             Presentation of Idea
    //           </p>

    //           <p>
    //             <b className="pt-1">NHPC Limited</b> | Poster Presentation
    //           </p>

    //           <p>
    //             <b className="pt-1">DOORDARSHAN Kendra </b> | Video Presentation
    //             on Solar Energy
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <embed
        src={`${myfile}#toolbar=0&navpanes=0&scrollbar=0`}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
        style={{height:"100vh",overflow:"hidden"}}
      />
    </>
  );
}

export default App;
