import { useState } from 'react'
import { Input } from './components/Input/Input'
import { Button } from './components/Button/Button'
import { Paragraph } from './components/Paragraph/Paragraph'

import './App.css'

function App() {
  const [firstInput, setFirstInput] = useState('');

  const [elem, setElem] = useState([]);

  const handleResetInputs = () => {
    setElem(prevState => ([firstInput, ...prevState]))

    setFirstInput('');
  }

  return (
    <>
      <div>
        <Input
          value={firstInput}
          onChange={(event) => setFirstInput(event.target.value)}
          placeholder='nnn'
        >
        </Input>
        <Button
          onClick={handleResetInputs}
        >
        </Button>
      </div>
      <div className='container'>
        {
          elem.map(text =>
            <Paragraph key={text}>
              {text}
            </Paragraph>
          )
        }
      </div>
    </>
  )
}

export default App
