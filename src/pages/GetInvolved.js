import {
  Col,
  Container,
  Row,
  Input,
  InputGroup,
  InputGroupText,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage, setSubmitting } from 'formik';
import './GetInvolved.css'
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import uprising from '../assets/daumier-the-uprising-1860.jpg';
import Axios from "axios";
//import backend from '../config';


const GetInvolved = () => {

  const backend = process.env.backendString;

  const handleSubmit = (values) => {
    console.log('form values: ', values);
    console.log('in JSON format: ', JSON.stringify(values));
  }
  
  const [count, setCount] = useState(null);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    const interval = setInterval( async () => {
      await Axios.get(`${backend}/getEmails`).then((response) => {
      setCount(response.data);
      console.log(response);
    });
    }, 2000);    
  });

  const addEmail = async (values) => {
    await Axios.post(`${backend}/addEmail`, {
      values
    }).then((response) => {
      console.log("post: " + values );
      console.log("Email added: " + response)
    });
  }


  return (
    <Container className="full-width">
      <h2 className='text-center mt-4 lrmargin'>Together, We will Create a Labor Strike that Will Force Corporations and the Government to Improve our Working Conditions and Compensation</h2>
      <h2 className='text-center'><em>Please <b>Spread the Word</b> about the All Workers Union!</em></h2>
      <h4 className='text-center my-3 lrmargin'>Whether you Wish to Improve Working Conditions for yourself, your Friends, your Family or you Simply Want your Fellow Countrymen to have an Improved Quality of Life, Please Join our Movement.</h4>
      <Row className='banner1 text-center lrmargin10'>
      <h3 className='my-2'>Our Goal is to have 1 Million Workers Pledged to Strike</h3>
      <h3 className='mb-2'>Enter Your Email Address below to pledge to be part of the All Workers Union Strike</h3>
      <h3 className='mb-2'>Your Information is Safe and Private, You will be sent Notification when the Strike Date is Officially Planned</h3>
      <Formik
        initialValues={{
          email: '',
          strike: false,
          newsletter: false
        }}
        onSubmit={addEmail}
        //validate={validateContactForm}
        >
      <Form>
        <FormGroup row>
          <Col md='3'>
          <label htmlFor='email' style={{fontSize: "1.3em"}}>
            <b>Email Address:</b>
          </label>
          </Col>
          <Col md={{size: 7, }}>
            <Field className='form-control' name='email' placeholder='Email' />
            {/* <ErrorMessage name='email'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage> */}
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 3, offset: 2 }}>
            <Field
              name='strike'
              type='checkbox'
              className='form-check-input'
            />{' '}
            Pledge to Strike
            </Label>
          <Label check md={{ size: 3, }}>
            <Field
              name='newsletter'
              type='checkbox'
              className='form-check-input'
            />{' '}
            Sign Up for Email Updates
            </Label>
            <Col md={{ size: 3, }} >
            <Button type='submit' color='primary'>Let's Do This</Button>
            </Col>
        </FormGroup>
      </Form>
      </Formik>
      <h1 className='mt-2'>{count} Workers have Pledged to Strike</h1>
      </Row>
      <Row>
        <Col className='mt-4 text-center'>
        <h2>If you believe your purpose in life is not to make a billionaire more money</h2>
        <h1>Join Our Movement!</h1>
        </Col>
      </Row>

      <Row className='mt-4 lrmargin25 text-center'>
        <Col>
          <img className='mb-3' href='/' src={uprising} style={{maxWidth: '100%'}} alt='The Uprising by Honore Daumier (1860)' />
        </Col>
      </Row>

      <Row className='text-center lrmargin4'>
        <Col className='col-12'>
        <h1>Across the USA workers are Unionizing</h1>
        </Col>
        <Col className='bggrn lrmargin4 my-3 col-12 col-lg-5'>
        <h4 className='my-3'>Corporations are spending hundreds of millions of dollars on union-busting consulting firms rather than improve working conditions and compensation</h4>
        <h4>We must bypass the companies' leadership who's goal is to keep workers producing profits every waking minute at sublivable wages.</h4>
        <h4 className='my-3'>We will negotiate with the government and organize a movement with millions ready to strike.</h4>
        </Col>
        <Col className='bgornge my-3 lrmargin4 col-12 col-lg-5' >
        <h4 className='my-3'>Rather than support us, our government redistributes our tax dollars to the wealthy in the form of bailouts, "loans" that are not to be paid back and subsidies</h4>
        <h4>95%+ of Americans effectively have no representation in government</h4>
        <h4 className='my-3'>The current system is designed to keep us indebted to banks and corporations for our entire lives and never be able to afford to retire</h4>
        </Col>
        <Col className='col-12'>
        <h1>Our Power is in our Numbers</h1>
        <h2>Our first strike will be one million strong to start negotiations and help spread the word</h2>
        <h3>If our demands aren't met we will strike for as long as it takes to have acceptable working conditions</h3>
        <h3>We will hit them where it hurts - their wallets. If there's one thing we can be sure of, it's billionaires' greed.</h3>
        </Col>
      </Row>

      <Row className='bannerlred text-center mt-2 mb-5'>
      <h3 className='my-2'>Not in the USA but wish to join our movement?</h3>
      <h3 className='mb-3'>We believe that extending this movement worldwide is inevitable. You are welcome to strike with us and together we will pressure governments and multinational corporations to treat us not as numbers, but as humans</h3>
      <h3 className='mb-2'>We appreciate your support and welcome all workers looking to improve the lives of themselves, their families, friends and fellow countrymen</h3>
      </Row>

    </Container>
  );
}

export default GetInvolved;