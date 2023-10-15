import Card from 'react-bootstrap/Card';
import './App.css'

function TextExample() {
  return (
    <Card style={{ width: '18rem' }} className='onss'>
      <Card.Body>
        <Card.Title>Ons Lassoued</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ons lassoued</Card.Subtitle>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero non dui pharetra auctor. 

        </Card.Text>
        <Card.Link href="#">Checkpoint score</Card.Link>
        <Card.Link href="#">100%</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;