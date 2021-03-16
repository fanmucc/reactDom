import './App.css';
import Hooksdemo from './hooksdemo'
import UseContexts from './useContexts'
import UserReducer from './useReducer'
import UseRefs from './useRefs'
import UseHuanCun from './huanCun'
import Tables from './views/tables/tabs'
import TablesEdit from './views/tables/tablesEdit'
import Forms from './views/forms/index'

function App() {
  return (
    <div className="App">
      <h1>React Hooks, Hello World</h1>
      {/* <Hooksdemo /> */}
      {/* <UseContexts /> */}
      {/* <UserReducer /> */}
      {/* <UseRefs /> */}
      {/* <UseHuanCun/> */}
      {/* <Tables /> */}
      {/* <TablesEdit /> */}
      <Forms />
    </div>
  );
}

export default App;
