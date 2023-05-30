import { useState } from 'react'

import './App.css'

import Label from './components/Label'
import Word from './components/Input/Word'
import { getSynonyms } from './api/getSynonyms'
import Results from './components/Results'
import Button from './components/Button'
import { getAntonyms } from './api/getAntonyms'


function App() {
  const [word, setWord] = useState<string>()
  const [wordResults, setWordResults] = useState<string[]>()
  
  const handleSubmit =  async (event: React.FormEvent) => {
    event.preventDefault()
    
    const synonymsCall = await getSynonyms(word)
    const syn = synonymsCall.map((s: any) => s.word)
    setWordResults([...syn])
  }

  const handleAntonyms = async (event: any) => {
    event.preventDefault()

    const antonymsCall = await getAntonyms(word)
    const ant = antonymsCall.map((a: any)=> a.word)
    setWordResults([...ant])
    console.log(wordResults)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label id="word">Enter a word: </Label>
        <Word setWord={setWord} /> 
        <Button onClick={handleSubmit}>Get Synonyms!</Button>
        <Button onClick={handleAntonyms}>Get Antonyms!</Button>
      </form>
      {
        wordResults ? <Results words={wordResults} /> : ""
      }
    </div>

  )
}

export default App
