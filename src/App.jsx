import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './features/counterSlice';

function App() {
  const count = useSelector((c) => c.counter.value ) 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={()=> dispatch(increment())}>Increment</button>
      
      <button  onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
