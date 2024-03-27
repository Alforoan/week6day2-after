import { useEffect, useState } from 'react'

function App() {

  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    async function fetchCatFacts(){
      try{
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
        const data = await response.json();
        setRandomFact(data.text);
      }catch(err){
        console.log(err);
      }
    }
    fetchCatFacts();
  }, [])

  const handleClick = async () => {
    try{
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
        const data = await response.json();
        setRandomFact(data.text);
      }catch(err){
        console.log(err);
      }
  }

  return (
    <>
      <h1>Random Cat Fact of the Day!</h1>
      <button onClick={handleClick}>Click for a random cat fact</button>
      {randomFact}
    </>
  )
}

export default App
