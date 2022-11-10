import { useEffect, useMemo, useRef } from "react";

let counter = 0;

const generateId = () => {
  return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

const PaypalDonateButton = () => {
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  let ignore = false;
  useEffect(() => {
    const button = window.PayPal.Donation.Button({
      env: "test",
      hosted_button_id: "RV2XJ3DR5VHFS",
      image: {
        src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
        alt: "Donate with PayPal button",
        title: "PayPal - The safer, easier way to pay online!",
      },
    });
    if (!ignore) {
      // console.log("rendered!")
      button.render(`#${buttonRef.current.id}`); // you can change the code and run it when DOM is ready
    }
    return () => {
      ignore = true;
    };
  }, []);

  return <div ref={buttonRef} id={buttonId} />;
};

export default PaypalDonateButton;
