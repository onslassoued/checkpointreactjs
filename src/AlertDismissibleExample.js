import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './App.css'

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible className='onsss'>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero non dui pharetra auctor. 

        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissibleExample;