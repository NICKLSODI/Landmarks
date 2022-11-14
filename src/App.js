import React,{useState, useEffect} from 'react';
import MyBar from './MyBar';
import MyCard from './MyCard';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.mecallapi.com/api/attractions/")
      .then(res => res.json())
      .then((result) => { 
        setData(result); 
      })
  }, [])
  
  return (
    <> 
      <MyBar />
      <MyHeader />
      <div className='grid-container'>
      {data.map(item => (
          <MyCard key={item.id} name={item.name} coverimage={item.coverimage} detail={item.detail} />
        ))}
      </div>
      <MyFooter/>
    </>
  );
}

export default App;
