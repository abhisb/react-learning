// src/components/StudentList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent, updateStudent } from '../../store/actions/counter-actions';
import styles from "./studentlist.component.module.css";



function StudentList() {
    const students = useSelector((state) => state.students);
    console.log(students); 
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeStudent(id));
    };

    const handleUpdate = (student) => {
        const updatedName = prompt("Update Name", student.name);
        const updatedAge = prompt("Update Age", student.age);
        if (updatedName && updatedAge) {
            dispatch(updateStudent({ ...student, name: updatedName, age: updatedAge }));
        }
    };

    
    return (
      <ul className={styles.update1}>
          {Array.isArray(students) && students.length > 0 ? (
              students.map((student) => (
                  <li key={student.id}>
                      {student.name} (Age: {student.age}) 
                      <button onClick={() => handleUpdate(student)}>Update</button>
                      <button onClick={() => handleRemove(student.id)}>Remove</button>
                  </li>
              ))
          ) : (
              <li className={styles.list} > No students found.</li>
          )}
      </ul>
  );
}

export default StudentList;
