import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { allCampaigns } from "../../assets/data";
import Nav from "../../components/Navigation/Nav";
import { dateFormatter } from "../../helpers";

const SingleCampaign = () => {
  const [campaign, setCampaign] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const { id } = useParams();

  const close = () => setIsOpen(false);

  useEffect(() => {
    const filteredList = allCampaigns.filter(
      (campaign) => campaign.id === parseInt(id as string)
    );
    setCampaign(filteredList[0]);
  }, []);

  const onSuccess = () => {
    console.log("Successful");
    close();
  };
  const onClose = () => {
    close();
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: "devjaykes@gmail.com",
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
  };
  const initializePaystack = usePaystackPayment(config);

  const handlePayments = () => {
    if (amount === 0 || amount < 0) {
      return;
    }
    initializePaystack(onSuccess, onClose);
  };

  return (
    <div className="">
      <Nav />
      <div className="single__campaign">
        <div className="campaign__head">
          <h5>{campaign?.title}</h5>
          <p>{dateFormatter(campaign?.datePosted)}</p>
        </div>
        <div className="posted__by">Posted By: </div>
        <p>{campaign?.description}</p>
        <div className="target">
          ${campaign?.amountRaised}/{campaign?.target}
        </div>
        <div className="images">
          {campaign?.images?.map((image: string) => (
            <img src={image} alt="Campaign avatar" />
          ))}
        </div>
        <button onClick={() => setIsOpen(true)}>Donate</button>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isOpen} onClosed={close}>
        <ModalHeader toggle={close} />
        <ModalBody>
          <div className="form__area">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
          <div className="form__area">
            <button onClick={handlePayments}>Pay</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SingleCampaign;
