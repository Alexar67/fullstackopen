const Header = (props) => {
  return (
    <div>
      <p>
        Header : {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0].part} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[1].part} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].part} exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total : {props.total}
      </p>
    </div>
  )
} 

const App = () => {
  const course = 'Half Stack Aplication development'
  const parts = [
    {part: 'Fundaments of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'Satate of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App
