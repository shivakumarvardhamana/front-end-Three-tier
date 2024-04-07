// EmployeeList.js

import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/get/');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <strong>{employee.username}</strong> - ${employee.salary} - {employee.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
