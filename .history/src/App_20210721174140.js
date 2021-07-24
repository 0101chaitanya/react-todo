import "./App.css";
import TodoComp from "./components/todoComp";
import todosData  from "./todoExamples";
function App() {
  const todoItems = todosData.map((item) => <TodoComp item={item} key={item.id} />
  return todoItems
  );
}

export default App;
