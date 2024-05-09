import data from './data.json';

console.log(data); // Check what this prints

function App() {
  return (
    <div className="App">

      {data.employees.map( (item,index) => (
        <div key={index} className="data">
            <p>{JSON.stringify(item)}</p>
        </div>
      ))}
      
    </div>
  );
}

export default App;
