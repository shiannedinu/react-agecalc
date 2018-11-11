import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container, Col, Row,
Form,
FormGroup,
Label,
Input,
Alert
} from 'reactstrap';
import Moment from 'react-moment';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Calculate Your Age</h1>
        <Layout></Layout>
      </div>
    );
  }
}

class Layout extends Component{

  constructor(props){
    super(props);
    this.state={
      age: '',
      birthdate:'',
    };
  }

  handleSubmit(event){
    console.log('You requested your age');
    if (this.state.birthdate != '') {
      this.setState({
        birthdate: this.birthdate,
        age:<h2>You were born: <Moment fromNow add={{ years: 1 }}>{this.state.birthdate}</Moment></h2>
      })
    } else{
      this.setState({
        age:<Alert color="danger">Please enter valid date</Alert>
      })
    }
    
  }

  changeText(event)
  {
    this.setState({
      birthdate:event.target.value
    });
  }
  
  render(){
    return(
      <Container>
        <Row className='margin-10'>
          <Col sm="4"></Col>
          <Col sm="4">
          <Form>
          <FormGroup>
          <Label className='padding-10' for="exampleDate"><h4>Enter Your Birthday</h4></Label>
          <Input type="date" name="date" id="exampleDate" onChange={this.changeText.bind(this)} placeholder="dd/mm/yyyy" />
        </FormGroup>
        <Button color="success" onClick={() => this.handleSubmit()}>Calculate</Button>
        </Form>
           
          </Col>
          <Col sm="4"></Col>
        </Row>
        <Row>
        <Col sm="4"></Col>
        <Col className="margin-10" sm="4"><div>{this.state.age}</div></Col>
          <Col sm="4"></Col>
        </Row>
      </Container>
    );
  }

}


export default App;