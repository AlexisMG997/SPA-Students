import React from 'react'
import StudentEngCount from "../../components/dashboard/StudentEngCount";
import StudentGrades from "../../components/dashboard/StudentGrades";
import StudentCount from "../../components/dashboard/GroupCount";

function dashboard() {
  return (
    <div className="flex">
    <div className="flex-col">
      <StudentCount/>
      <StudentEngCount />
    </div>
    <StudentGrades/>
  </div>
  )
}

export default dashboard