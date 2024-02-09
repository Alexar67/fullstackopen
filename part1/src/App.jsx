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
      <Part part = {props.part1.name} exercise = {props.part1.exercises} />
      <Part part = {props.part2.name} exercise = {props.part2.exercises} />
      <Part part = {props.part3.name} exercise = {props.part3.exercises} />
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
  const part1 = {
    name: 'Fundaments of React', 
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7 
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1}  part2 = {part2} part3 = {part3}/>
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
