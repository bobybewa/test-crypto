import './App.css';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMyQoute, addFavorites } from './store/action'
import axios from 'axios'
function App() {
  const [coba, setCoba] = useState()
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoReducers.todos)
  const favorites = useSelector(state => state.todoReducers.favorites)
  let isLoading = false
  useEffect(() => {
    isLoading = true
    axios({
      method: 'GET',
      url : 'https://api.kanye.rest'
    })
    .then(data => {
      isLoading = false
      setCoba(data.data.quote)
    })
    .catch(err => {
      console.log(err);
    })
  },[])


  function getQoute(){
    axios({
      method: 'GET',
      url : 'https://api.kanye.rest'
    })
    .then(data => {
      setCoba(data.data.quote)
    })
    .catch(err => {
      console.log(err);
    })
  }
  function addFavorite(){
    let isExist = false;
    favorites.filter(f => {
      isExist = false
      if(f === coba){
        console.log('sama')
        isExist = true;
      }
    })
    if(!isExist){
      dispatch(addFavorites(coba))
    }
  }
  

  function submitMyQoute(e){
    e.preventDefault();
    if(!input){
      console.log('eror');
    }else{
      let isExist = false;
    todos.filter(f => {
      isExist = false
      if(f === input){
        console.log('sama')
        isExist = true;
      }
    })
    if(!isExist){
      dispatch(addMyQoute(input))
      setInput('')
    }
    }
    // if(input)
  }

  function handleChange(e){
    // console.log(e.);
    const value = e.target.value;
    setInput(value)
  }
  if(isLoading){
    return <h1>loading...</h1>
  }
  return (
    <div className="App">
      <div className="child">
        <header className="App-header">
          <img src='https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg' className="foto" alt="logo" />
          <h1>kenya-west qoute</h1>
        </header>
        <p>{coba}</p>
        {
          favorites.length > 0 ? 
            favorites.map(favorite => {
              return (
                <li>{favorite}</li>
              )
            }) : null
        }
        <div>
          <button onClick={getQoute}>get qoute</button>
          <button onClick={addFavorite}>add favorite</button>
        </div>
        <hr/>
        <h1>my qoute</h1>
        <form>

        <input onChange={handleChange} value={input}></input>
        <button type="submit" onClick={submitMyQoute}>submit</button>
        </form>
        {todos.length > 0 ?
          todos.map(todo => <li>{todo}</li>) : null
        }
      </div>
    </div>
  );
}

export default App;
