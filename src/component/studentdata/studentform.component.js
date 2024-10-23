// src/components/StudentForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../store/actions/counter-actions';
import style from "./studentform.component.module.css";

function StudentForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = {
            id: Math.floor(Math.random()*900)+100,
            name,
            age,
        };
        dispatch(addStudent(student));
        setName('');
        setAge('');
        
    };

    return (
        <form className={style.formN} onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input 
                type="number"
                placeholder="Student Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default StudentForm;
