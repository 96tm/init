import Counter from "../Counter/Counter"
import heart from '../../shared/assets/icons/heart.svg'
import './App.scss'

const App = () => {
  return (
    <div className="wrapperApp">
      <h3 className="heading"><span>Counter</span><img src={heart} alt="" /></h3>
      <Counter />
    </div>
  )
}

export default App