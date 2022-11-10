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
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage, setSubmitting } from "formik";
import "./GetInvolved.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import uprising from "../assets/daumier-the-uprising-1860.jpg";
import Axios from "axios";
//import { u, p } from '../config';
//testing
import { Buffer } from "buffer";
import construction from "../assets/construction1_op50.jpg";
import metalCutting from "../assets/metal-cutting.jpg";
import firefighter from "../assets/firefighter2.jpg";
import teacher from "../assets/teacher1.jpg";
import whiteBricks from "../assets/white-bricks.jpg";
import leaves from "../assets/leaves.jpg";

const GetInvolved = () => {
  const u = process.env.cyclicUser;
  const p = process.env.cyclicPword;

  window.Buffer = Buffer;

  const encAuth = Buffer.from(`${u}:${p}`).toString("base64");

  const handleSubmit = (values) => {
    console.log("form values: ", values);
    console.log("in JSON format: ", JSON.stringify(values));
  };

  const [count, setCount] = useState(null);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    Axios.get(`https://sore-pink-cow-sari.cyclic.app/api/getEmails`, {
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Basic ${Buffer.from(`${u}:${p}`).toString("base64")}`,
        //'Authorization': 'Basic YWxsd29ya2Vyc3VuaW9uOlNpY2t5YnJhaDkhMj8z',
      },
      withCredentials: false,
    }).then((response) => {
      setCount(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      await Axios.get(`https://sore-pink-cow-sari.cyclic.app/api/getEmails`, {
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': 'Basic YWxsd29ya2Vyc3VuaW9uOlNpY2t5YnJhaDkhMj8z',
        },
        // auth header examples - credentials no longer valid
        withCredentials: false,
      }).then((response) => {
        setCount(response.data);
        console.log(response.data);
      });
    }, 600000);
  });

  const addEmail = async (values) => {
    console.log("submitted values: " + JSON.stringify(values));
    await Axios.post(`https://sore-pink-cow-sari.cyclic.app/api/addEmail`, {
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Basic ${Buffer.from(`${u}:${p}`).toString("base64")}`,
      // },
      values,
    }).then((response) => {
      console.log("post: " + JSON.stringify(values));
      console.log("Email added: " + JSON.stringify(response));
    });
  };

  return (
    <Container className="full-width">
      <Row
        style={{
          backgroundImage: `url(${firefighter})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <Col className="text-center my-4 blshadow">
          <h2>
            Together, We will Create a Labor Strike that Will Force Corporations
            and the Government to Improve our Working Conditions and
            Compensation
          </h2>
          <h2>
            <em>
              Please <b>Spread the Word</b> about the All Workers Union!
            </em>
          </h2>
          <h4>
            Whether you Wish to Improve Working Conditions for yourself, your
            Friends, your Family or you Simply Want your Fellow Countrymen to
            have an Improved Quality of Life, Please Join our Movement.
          </h4>
        </Col>

        {/* Pledge Banner */}
        <Row>
          <Col className="banner1 text-center offset-1 col-10">
            <h3 className="my-2">
              Our Goal is to have 1 Million Workers Pledged to Strike
            </h3>
            <h3 className="mb-2">
              Enter Your Email Address below to pledge to be part of the All
              Workers Union Strike
            </h3>
            <h3 className="mb-2">
              Your Information is Safe and Private, You will be sent
              Notification when the Strike Date is Officially Planned
            </h3>
            <Formik
              initialValues={{
                email: "",
                strike: false,
                newsletter: false,
              }}
              onSubmit={addEmail}
              //validate={validateContactForm}
            >
              <Form>
                <FormGroup row>
                  <Col md="3">
                    <label htmlFor="email" style={{ fontSize: "1.3em" }}>
                      <b>Email Address:</b>
                    </label>
                  </Col>
                  <Col md={{ size: 7 }}>
                    <Field
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                    {/* <ErrorMessage name='email'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage> */}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label check md={{ size: 3, offset: 2 }}>
                    <Field
                      name="strike"
                      type="checkbox"
                      className="form-check-input"
                    />{" "}
                    Pledge to Strike
                  </Label>
                  <Label check md={{ size: 3 }}>
                    <Field
                      name="newsletter"
                      type="checkbox"
                      className="form-check-input"
                    />{" "}
                    Sign Up for Email Updates
                  </Label>
                  <Col md={{ size: 3 }}>
                    <Button type="submit" color="primary">
                      Let's Do This
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Formik>
            <h1 className="mt-2">{count} Workers have Pledged to Strike</h1>
          </Col>
        </Row>
        <Row className="my-4">
          <Col
            className="my-3 text-center"
            style={{ textShadow: "0 0 2px #000, 0 0 5px #000" }}
          >
            <h2>
              If you believe there is more purpose in life than making
              billionaires more money
            </h2>
            <h1>Join Our Movement!</h1>
            <h3>
              We will have strike meetup locations in major cities and, for
              those able to make it, we will march in Washington DC - We will
              make our voices heard!
            </h3>
          </Col>
        </Row>
      </Row>
      {/* End Pledge Banner */}

      <Row
        className="text-center"
        style={{
          backgroundImage: `url(${whiteBricks})`,
          backgroundSize: "cover",
        }}
      >
        <Col>
          <img
            className="mb-3 mt-4"
            href="/"
            src={uprising}
            style={{ maxWidth: "100%" }}
            alt="The Uprising by Honore Daumier (1860)"
          />
        </Col>
      </Row>

      <Row
        className="text-center blshadow"
        style={{
          backgroundImage: `url(${construction})`,
          backgroundSize: "cover",
        }}
      >
        <Col className="col-12">
          <h1>Across the USA workers are Unionizing</h1>
        </Col>
        <Col className="bggrn offset-1 col-10 col-lg-5 my-3">
          <h4 className="my-3">
            Corporations are spending hundreds of millions of dollars on
            union-busting consulting firms
            <sup>
              <a href="#sources">1</a>
            </sup>{" "}
            rather than improve working conditions and compensation
          </h4>
          <h4>
            We must bypass the companies' leadership who's goal is to keep
            workers producing profits every waking minute at sublivable wages.
          </h4>
          <h4 className="my-3">
            We will negotiate with the government and organize a movement with
            millions ready to strike.
          </h4>
        </Col>
        <Col className="bgornge offset-1 col-10 offset-lg-0 col-lg-5 my-3 mx-lg-3">
          <h4 className="my-3">
            Rather than support us, our government redistributes our tax dollars
            to the wealthy in the form of bailouts
            <sup>
              <a href="#sources">2</a>
            </sup>
            , "loans" that are not to be paid back
            <sup>
              <a href="#sources">3</a>
            </sup>{" "}
            and subsidies
            <sup>
              <a href="#sources">4</a>
            </sup>{" "}
            <sup>
              <a href="#sources">5</a>
            </sup>
          </h4>
          <h4>
            95%+ of Americans effectively have no representation in government
          </h4>
          <h4 className="my-3">
            The current system is designed to keep us indebted to banks and
            corporations for our entire lives and never be able to afford to
            retire
          </h4>
        </Col>
        <Col className="col-12">
          <h1>Our Power is in our Numbers</h1>
          <h2>
            Our first strike will be one day in length and one million strong to
            start negotiations and help spread the word
          </h2>
          <h3>
            If our demands aren't met we will strike for as long as it takes to
            have acceptable working conditions
          </h3>
          <h3>
            We will hit them where it hurts - their wallets. If there's one
            thing we can be sure of, it's billionaires' greed.
          </h3>
        </Col>

        <Row className="bannerlred text-center offset-1 col-10 mt-2 mb-5">
          <h3 className="my-2">
            Not in the USA but wish to join our movement?
          </h3>
          <h3 className="mb-3">
            We believe that extending this movement worldwide is inevitable. You
            are welcome to strike with us and together we will pressure
            governments and multinational corporations to treat us not as
            numbers, but as humans
          </h3>
          <h3 className="mb-2">
            We appreciate your support and welcome all workers looking to
            improve the lives of themselves, their families, friends and fellow
            countrymen
          </h3>
        </Row>
      </Row>

      <Row
        id="sources"
        style={{
          backgroundImage: `url(${leaves})`,
          backgroundSize: "cover",
          overflowWrap: "break-word",
          color: "rgb(255, 255, 255)",
        }}
      >
        <Col className="offset-1 col-10 my-5 bgdark">
          <p>
            <sup>1</sup>Nguyen, J. (2022, April 12). Companies like Amazon spend
            millions on anti-union efforts. where's that money going?&nbsp;.
            Marketplace. Retrieved November 2, 2022, from
            <a href="https://www.citationmachine.net/bibliographies/38d08ec9-bdb0-415c-a979-b670a603df0b">
              {" "}
              https://www.marketplace.org/2022/04/12/companies-like-amazon-spend-millions-on-anti-union-efforts-wheres-that-money-going/{" "}
            </a>
          </p>

          <p>
            <sup>2</sup>Abramson, A. (2020, June 18). Why the trillion-dollar
            bailout benefited the rich. Time. Retrieved November 2, 2022, from
            <a href="https://time.com/5845116/coronavirus-bailout-rich-richer/">
              {" "}
              https://time.com/5845116/coronavirus-bailout-rich-richer/{" "}
            </a>
          </p>

          <p>
            <sup>3</sup>CBS Interactive. (2022, January 22). Most of the $800
            billion in PPP loans did not go to workers, new study finds. CBS
            News. Retrieved November 2, 2022, from{" "}
            <a href="https://www.cbsnews.com/dfw/news/ppp-loans-workers-new-study/">
              https://www.cbsnews.com/dfw/news/ppp-loans-workers-new-study/{" "}
            </a>
          </p>

          <p>
            <sup>4</sup>Gillespie, N. (2021, March 6). 5 ways Elon Musk and
            other billionaires get welfare for the rich. Reason.com. Retrieved
            November 2, 2022, from{" "}
            <a href="https://reason.com/2021/03/05/5-ways-elon-musk-and-other-billionaires-get-welfare-for-the-rich/">
              https://reason.com/2021/03/05/5-ways-elon-musk-and-other-billionaires-get-welfare-for-the-rich/{" "}
            </a>
          </p>

          <p>
            <sup>5</sup>
            <a href="https://goodjobsfirst.org/">https://goodjobsfirst.org/ </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolved;
