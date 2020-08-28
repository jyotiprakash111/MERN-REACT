import React from "react";
import Menu from "./Menu";

// const Base = ({
//   title = "My Title",
//   description = "My desription",
//   className = "bg-dark text-white p-4",
//   children
// }) => (
//   <div>
//     <Menu />
//     <div className="container-fluid">
//       <div className="jumbotron bg-dark text-white text-center">
//         <h2 className="display-6">{title}</h2>
//         <p className="lead">{description}</p>
//       </div>
//       <div className={className}>{children}</div>
//     </div>
//     <footer className="footer bg-dark mt-auto py-6">
//       <div className="container-fluid bg-success text-white text-center p-9">
//         <h4>If you got any questions, feel free to reach out!</h4>
//         <button className="btn btn-warning btn-lg">Contact Us</button>
//       </div>
//       <div className="container">
//         <span className="text-muted">
//           An Amazing <span className="text-white">MERN</span> Bootcamp
//         </span>
//       </div>
//     </footer>
//   </div>
// );

// export default Base;

// import React from 'react';
// import Menu from './Menu';


const Base = ({
    title = "My Tittle",
    description = "My Description",
    className = "bg-dark text-white p-4",
    children
}) => (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto pu-3">
                <div className="container-fluid bg-success text-white text-center p-3">
                    <h4>If You Got Any Questions, Feel free to reach out</h4>
                    <button className="btn btn-warning btn-lg">Contact US</button>
                </div>
                <div className="container">
                    <span className="text-muted">
                        An Amazing <span className="text-white">MERN</span> Bootcamp
                </span>
                </div>
            </footer>
        </div>
    );

export default Base;