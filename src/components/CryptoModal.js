import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Alert,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Axios from "axios";
import { rgbToHex } from "@mui/material";

const CryptoModal = (wallet) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const cryptoSubmit = async (values) => {
    console.log("submitted values: " + JSON.stringify(values));
    await Axios.post(`https://sore-pink-cow-sari.cyclic.app/api/cryptoDonation`, {
      values,
    }).then((response) => {
      console.log("post: " + JSON.stringify(values));
      console.log("Email added: " + JSON.stringify(response));
    });
  };

  
  const copyAlert = (wallet) => {
    navigator.clipboard.writeText(wallet);
    alert(`${wallet} has been copied to your clipboard`)
  }

  return (
    <div style={{ color: "rgb(0,0,0)" }}>
          <Row>
            <Col className="text-center">
            <Button color="primary" size="lg" onClick={toggle}>
                  Donation Form
                </Button>
            </Col>
          </Row>

            <Row>
            <Col>
            <br/>
              <h4>Please send funds to the following wallet addresses:</h4>
              <h5>
                Click to copy address <br/>
              </h5>
            </Col>
            </Row>
            <Row>
              <Col md="2">Bitcoin:</Col>
              <Col md="10">
              <button onClick={() => copyAlert('1KkDmRxa8W6e8W1jDkuwauJxmTkt19z2k6')}>1KkDmRxa8W6e8W1jDkuwauJxmTkt19z2k6</button>
              </Col>
              <br/><br/>
              <Col md="2">ETH (ERC20):</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button>
              </Col>
              <br/><br/>
              <Col md="2">BNB (BEP20):</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button>
              </Col>
              <br/><br/>
              <Col md="2">SOL:</Col>
              <Col md="10">
              <button onClick={() =>  copyAlert('24mgBhnf411Phwhk9PH2un3Scmv8i9G8B9PitL6Bwwoh')}>24mgBhnf411Phwhk9PH2un3Scmv8i9G8B9PitL6Bwwoh</button>
              </Col>
              <br/><br/>
              <Col md="2">USDT (ERC20):</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button>
              </Col>
              <br/><br/>
              <Col md="2">USDC (ERC20):</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button>
              </Col>
              <br/><br/>
              <Col md="2">DOGE:</Col>
              <Col md="10">
              <button onClick={() =>  copyAlert('DPMqbcGgBMnupUokDGULSpYgUoB4erznqe')}>DPMqbcGgBMnupUokDGULSpYgUoB4erznqe</button>
              </Col>
              <br/><br/>
              <Col md="2">AVAX:</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button>
              </Col>
              <br/><br/>
              <Col md="2">MATIC:</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button>
              </Col>
              <br/><br/>
              <Col md="2">LTC:</Col>
              <Col md="10"> 
              <button onClick={() =>  copyAlert('LMokCdGtYX7ruXbcTT2LGjHqZQkFSQdcnY')}>LMokCdGtYX7ruXbcTT2LGjHqZQkFSQdcnY</button>
              </Col>       
          </Row>

      <Modal
          isOpen={modal}
          toggle={toggle}
          style={{ color: "rgb(0,0,0)" }}
          className="modal-lg"
        >
          <ModalHeader toggle={toggle} className='text-center'>
            As a 501(c)4 we are required to collect this information to accept donations.  Be assured that your information is private. 
          </ModalHeader>
          <ModalBody>
          
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          road: "",
          town: "",
          zipCode: "",
          employer: "",
          occupation: "",
        }}
        onSubmit={cryptoSubmit}
        //validate={validateContactForm}
      >
        <Form>
        <FormGroup row>
        <Col md="6">
            <Label htmlFor="firstName">
              First Name
            </Label>
            <br/>
            <Field
                className="form-control"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
          </Col>
          <Col md="6">
            <Label htmlFor="lastName">
              Last Name
            </Label>
            <br/>
            <Field
                className="form-control"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage name="lastName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
              </Col>
          </FormGroup>

          <FormGroup row>
          <Col md="6">
            <Label htmlFor="address">
              Address
            </Label>
            <Field
                className="form-control"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage name="address">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
            <Col md="6">
            <Label htmlFor="city" md="6">
              City
            </Label>
            <Field
                className="form-control"
                name="city"
                placeholder="City"
              />
              <ErrorMessage name="city">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          
          <FormGroup row>
          <Col md="4">
            <Label htmlFor="state" md="4">
              State
            </Label>
            <Field
                className="form-control"
                name="state"
                placeholder="State"
              />
              <ErrorMessage name="state">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
            <Col md="4">
            <Label htmlFor="zipcode" md="4">
              Zip Code
            </Label>
            <Field
                className="form-control"
                name="zipcode"
                placeholder="Zip Code"
              />
              <ErrorMessage name="zipcode">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
            <Col md="4">
            <Label htmlFor="country" md="4">
              Country
            </Label>
            <Field
                className="form-control"
                name="country"
                placeholder="Country"
              />
              <ErrorMessage name="country">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>          

          <FormGroup row>
          <Col md="6">
            <Label htmlFor="employer" md="6">
              Employer
            </Label>
            <Field
                className="form-control"
                name="employer"
                placeholder="employer"
              />
              <ErrorMessage name="employer">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
            <Col md="6">
            <Label htmlFor="occupation" md="6">
              Occupation
            </Label>
            <Field
                className="form-control"
                name="occupation"
                placeholder="occupation"
              />
              <ErrorMessage name="occupation">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
         
          <FormGroup row className="justify-content-end">
            <Col md={{ size: 3 }}>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Col>
          </FormGroup>          
        </Form>
      </Formik>
      </ModalBody>
          <ModalFooter className='text-center'>
            We appreciate your support and promise to use your donation towards improving the lives of workers. Through outreach and organization, we will form the largest union in the United States. With the strength of numbers, we can make positive change for the entire nation. 
          </ModalFooter>
        </Modal>
    </div>
  );
};

export default CryptoModal;
