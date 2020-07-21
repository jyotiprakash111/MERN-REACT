import React, { useEffect } from 'react';

localStorage.setItem('myCat', '2');


const UserDashBoard = () => {
    useEffect(() => {
        // Update the document title using the browser API
        // setTimeout(function () {
        //     localStorage.removeItem('myCat');
        //     alert("Token Removed")
        // }, 4000);
        // setInterval(function () { alert("Token Removed"); }, 6000);

    });

    const Student = {
        name: "bikash",
        age: "26"
    }
    // old way of descturing
    const { name, age } = Student;


    // Desturing art 2
    const person = {
        name: "Fred",
        age2: 23,
        work: {
            job: "blogger"
        },

    }

    // const { work: { job }, age2 } = person;
    const { work: { job = "NA", salary = "NA" } } = person;

    return (
        <div>
            <h3>{job}</h3>
            <h3>{salary}</h3>
            {/* <h3>{age}</h3> */}
        </div>
    );
};

export default UserDashBoard;