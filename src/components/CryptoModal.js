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
    alert(`${wallet} was copied to your clipboard`)
  }


  //Make first modal show wallet addresses and nested modal is form
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
                Bitcoin: <button onClick={() => copyAlert('1KkDmRxa8W6e8W1jDkuwauJxmTkt19z2k6')}>1KkDmRxa8W6e8W1jDkuwauJxmTkt19z2k6</button><br/>
                ETH (ERC20): <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')
                }>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button><br/>
                BNB (BEP20): <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')}>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button><br/>
                SOL: <button onClick={() =>  copyAlert('24mgBhnf411Phwhk9PH2un3Scmv8i9G8B9PitL6Bwwoh')}>24mgBhnf411Phwhk9PH2un3Scmv8i9G8B9PitL6Bwwoh</button><br/>
                USDT (ERC20): <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')}>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button><br/>
                USDC (ERC20): <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')}>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button><br/>
                DOGE: <button onClick={() =>  copyAlert('DPMqbcGgBMnupUokDGULSpYgUoB4erznqe')}>DPMqbcGgBMnupUokDGULSpYgUoB4erznqe</button><br/>
                AVAX: <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')}>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button><br/>
                MATIC: <button onClick={() =>  copyAlert('0x5c9c9310e181c0776d2cba71a07173549cd24b1d')}>0x5c9c9310e181c0776d2cba71a07173549cd24b1d</button><br/>
                LTC: <button onClick={() =>  copyAlert('LMokCdGtYX7ruXbcTT2LGjHqZQkFSQdcnY')}>LMokCdGtYX7ruXbcTT2LGjHqZQkFSQdcnY</button><br/> 
              </h5>   
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
            <Label htmlFor="firstName" md="6">
              First Name
            </Label>
            <Label htmlFor="lastName" md="6">
              Last Name
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col md="6">
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
            <Label htmlFor="address" md="6">
              Address
            </Label>
            <Label htmlFor="city" md="6">
              City
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col md="6">
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
            <Label htmlFor="state" md="4">
              State
            </Label>
            <Label htmlFor="zipcode" md="4">
              Zip Code
            </Label>
            <Label htmlFor="country" md="4">
              Country
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col md="4">
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
            <Label htmlFor="employer" md="6">
              Employer
            </Label>
            <Label htmlFor="occupation" md="6">
              Occupation
            </Label>
          </FormGroup>
          <FormGroup row>
            <Col md="6">
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
