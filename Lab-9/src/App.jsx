

import Counter from '../components/Counter'
import StudentCard from '../components/StudentCard'
import StudentProfile from '../components/StudentProfile'
import './App.css'

function App() {


  return (
    <>
     <StudentProfile/>
         <div style={{ display: "flex", justifyContent: "center" }}>
      <StudentCard name="Pratyush" department="CSE" marks="85" />
      <StudentCard name="Rahul" department="ECE" marks="78" />
      <StudentCard name="Anjali" department="IT" marks="92" />
    </div>
    <Counter/>
    </>
  )
}

export default App
