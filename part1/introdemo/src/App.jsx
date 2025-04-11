const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/chankyulim'>chankyulim</a>
    </div>
  )
}

const App = () => {
  const friends = ['Peter', 'Maya']

  return (
    <>
      <p>{friends}</p>>
    </>
  )
}

export default App