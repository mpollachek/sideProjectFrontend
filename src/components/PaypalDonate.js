import { useEffect, useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  ButtonGroup,
  Input,
} from "reactstrap";
import uprising from "../assets/daumier-the-uprising-1860.jpg";

// There are 3 ways to keep the amount from being stale in our createOrder callback:
// 1. Use amountRef.current to keep track of amount changes
// 2. Use the forceReRender prop (which causes flashing)
// 3. Use the key property (which also causes flashing)

const PaypalDonate = ({ currency, amount }) => {
  const amountRef = useRef(amount);
  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  return (
    <PayPalButtons
      // forceReRender={[currency, amount]}
      style={{ color: "black", label: "donate" }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                },
              },
              items: [
                {
                  name: "Cat Fundraiser",
                  description:
                    "All proceeds directly support Furby's care and recovery.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        });
      }}
    />
  );
};

function DonateForm() {
  const [amount, setAmount] = useState(null);
  return (
    <form className="DonateForm">
      <AmountPicker
        onAmountChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <PaypalDonate currency="USD" amount={amount} />
    </form>
  );
}

function AmountPicker({ onAmountChange }) {
  const [rSelected, setRSelected] = useState(null);
  return (
    <fieldset onChange={onAmountChange}>
      <h1>Donation Amount</h1>
      <Row className="justify-content-center">
        <Col className="col-md-1">
          <Button
            className="px-4 py-2"
            color="primary"
            outline
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
            value="10.00"
            name="amount"
            size="lg"
          >
            $10
          </Button>
        </Col>
        <Col className="col-md-1">
          <Button
            className="px-4 py-2"
            color="primary"
            outline
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
            value="25.00"
            name="amount"
          >
            $25
          </Button>
        </Col>
        <Col className="col-md-1">
          <Button
            className="px-4 py-2"
            color="primary"
            outline
            onClick={() => setRSelected(3)}
            active={rSelected === 3}
            value="50"
            name="amount"
          >
            $50
          </Button>
        </Col>
        <Col className="col-md-1">
          <Button
            className="px-4 py-2"
            color="primary"
            outline
            onClick={() => setRSelected(4)}
            active={rSelected === 4}
            value="100"
            name="amount"
          >
            $100
          </Button>
        </Col>
        <Col className="col-md-2">
          <Input
            placeholder="Any Amount"
            className="px-4 py-2"
            color="primary"
            outline
            onClick={() => setRSelected(5)}
            active={rSelected === 5}
            value=""
            name="amount"
          />
        </Col>
      </Row>
    </fieldset>
  );
}

export function PaypalDonateApp() {
  return (
    <Container className="full-width text-center">
      <Row>
        <Col>
          <PayPalScriptProvider
            options={{
              "client-id": "test",
              components: "buttons",
              currency: "USD",
            }}
          >
            <h1>Donate to All Workers Union</h1>
            <img
              className="mb-3 mt-4"
              href="/"
              src={uprising}
              style={{ maxWidth: "100%" }}
              alt="The Uprising by Honore Daumier (1860)"
            />
            <DonateForm />
          </PayPalScriptProvider>
        </Col>
      </Row>
    </Container>
  );
}
