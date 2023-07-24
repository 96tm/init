import Counter from "../Counter/Counter"
import './style.scss'

const App = () => {
  return (
    <div className="wrapperApp">
      <h3 className="heading">Counter</h3>
      <Counter />
    </div>
  )
}

export default App