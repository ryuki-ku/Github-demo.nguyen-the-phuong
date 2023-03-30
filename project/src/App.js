import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

//useReducer
//1. initState = 0
//2. Actions: Up(state + 1), Down(State - 1) => tạo các thao tác mà người dùng có thể nhập
//3. Reducer
//4. Dispatch

const lessons = [
  {
    id: 1,
    name: 'ReactJS'
  },

  {
    id: 2,
    name: 'SPA/MPA la gi?'
  },

  {
    id: 3,
    name: 'Arrow Function'
  }
]

function App() {
  const [lessonID, setLessonID] = useState(1);

  useEffect(() => {

    const handleComment = (e) => {
      console.log(e);
    }

    window.addEventListener('lesson-1', handleComment)
  }, [])

  return (
    <div style={{padding: 20}}>
      <ul>
        {lessons.map(lesson => (
          <li
            key={lesson.id}
            style={{
              color: lessonID === lesson.id ? 'red' : '#333'
            }}
            onClick={() => setLessonID(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
