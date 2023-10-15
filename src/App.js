import React from 'react'
import ColorSchemesExample from './ColorSchemesExample'
import TextExample from './TextExample'
import AlertDismissibleExample from './AlertDismissibleExample'
import './App.css'

function App() {
  return (
    <>
    <div>
      <ColorSchemesExample></ColorSchemesExample>
    </div> 
    <div>
      <AlertDismissibleExample></AlertDismissibleExample>
    </div>
    <div className='ons'>
      <TextExample ></TextExample>
      <TextExample></TextExample>
      <TextExample></TextExample>
    </div>
</> 
  )
}

export default App
