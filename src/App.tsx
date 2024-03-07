import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './Utils/hooks';
import { exampleFetchDataAsync, exampleFetchDataWithParamsAsync } from './Data/slices/example';
import Loader from './Components/Loader';

function App() {

  //Here we are selecting values from store 📕
  const {loading,data}=useAppSelector(state=>state.example)
  
  //Here we are dispatching actions 🕹️
  const dispatch=useAppDispatch()
  useEffect(()=>{
    // dispatch(exampleFetchDataAsync())
    dispatch(exampleFetchDataWithParamsAsync({fields:'name,capital,currencies'}))
  },[dispatch])

  console.log('data',data)
  return (
    <div className="App">
        {loading ? (
        <Loader isLoading={true}/>
      ) : (
        <>
          <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         </header>
        </>
      )
    }
    </div>
  );
}

export default App;
