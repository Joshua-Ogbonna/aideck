import React, { useState, useRef } from "react";
import Nav from "../Navigation/Nav";
import AppLoader from "../Reusables/AppLoader";

interface IMissionary {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  nationality: string;
  meansOfIdentification: string;
  denominationalAffiliation: string;
  denominationalLicense: string;
  bankName: string;
  accountNo: string;
  accountName: string;
  guarantorName: string;
  guarantorEmail: string;
  guarantorPhone: string;
  guarantorAddress: string;
  guarantorNationality: string;
  guarantorMeansOfIdentification: string;
}

// Form Steps
const FirstStep = ({
  user,
  handlePosition,
  handleFormOnChange,
}: {
  user: IMissionary;
  handlePosition: () => void;
  handleFormOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <h5>Create Missionary Account - Personal Information</h5>
      <div className="form__area">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="00000000000"
          value={user.phone}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="address">House Address</label>
        <input
          type="text"
          name="address"
          placeholder="House Address"
          value={user.address}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          value={user.nationality}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <button onClick={handlePosition}>Continue</button>
      </div>
    </>
  );
};

const SecondStep = ({
  user,
  handlePosition,
  handleFormOnChange,
}: {
  user: IMissionary;
  handlePosition: () => void;
  handleFormOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const inputOneRef = useRef<any>(null);
  const inputTwoRef = useRef<any>(null);

  const handleOptionOneClick = () => inputOneRef.current.click();
  const handleOptionTwoClick = () => inputTwoRef.current.click();

  return (
    <>
      <h5>Create Missionary Account - Personal Identification</h5>
      <div className="form__area">
        <label htmlFor="denominational_affiliation">
          Denominational Affiliation
        </label>
        <input
          type="text"
          name="denominationalAffiliation"
          placeholder="e.g Winners Chapel"
          value={user.denominationalAffiliation}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area identification">
        <label htmlFor="Means of Identification">Means of Identification</label>
        <div className="upload__field shadow" onClick={handleOptionOneClick}>
          <i className="bx bxs-file-blank"></i> <br />
          <span>
            e.g National Identity Card, Passport, or any means of identification
            by your country
          </span>
          <input ref={inputOneRef} type="file" style={{ display: "none" }} />
        </div>
      </div>
      <div className="form__area identification" onClick={handleOptionTwoClick}>
        <label htmlFor="denominational_license">Denominational License</label>
        <div className="upload__field shadow">
          <i className="bx bxs-file-blank"></i> <br />
          <span>
            Upload a proof that you're a certified missionary from your
            denomination
          </span>
          <input ref={inputTwoRef} type="file" style={{ display: "none" }} />
        </div>
      </div>
      <div className="form__area">
        <button onClick={handlePosition}>Continue</button>
      </div>
    </>
  );
};

const ThirdStep = ({
  user,
  handlePosition,
  handleFormOnChange,
}: {
  user: IMissionary;
  handlePosition: () => void;
  handleFormOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <h5>Guarantor Information</h5>
      <div className="form__area">
        <label htmlFor="name">Guarantor's Name</label>
        <input
          type="text"
          name="guarantorName"
          placeholder="Guarantor's Name"
          value={user.guarantorName}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="email">Guarantor's Email Address</label>
        <input
          type="email"
          name="guarantorEmail"
          placeholder="Guarantor's Email"
          value={user.guarantorEmail}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="phone">Guarantor's Phone Number</label>
        <input
          type="text"
          name="guarantorPhone"
          placeholder="00000000000"
          value={user.guarantorPhone}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="address">Guarantor's House Address</label>
        <input
          type="text"
          name="guarantorAddress"
          placeholder="House Address"
          value={user.guarantorAddress}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <label htmlFor="nationality">Guarantor's Nationality</label>
        <input
          type="text"
          name="guarantorNationality"
          placeholder="Nationality"
          value={user.guarantorNationality}
          onChange={handleFormOnChange}
        />
      </div>
      <div className="form__area">
        <button onClick={handlePosition}>Continue</button>
      </div>
    </>
  );
};

const FourthStep = ({
  user,
  handleFormOnChange,
  handleSubmitForm,
  loading,
}: {
  user: IMissionary;
  handleFormOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: () => void;
  loading: boolean;
}) => {
  const inputOneRef = useRef<any>(null);

  const handleOptionOneClick = () => inputOneRef.current.click();
  return (
    <>
      <h5>Guarantor's Identification</h5>

      <div className="form__area identification">
        <label htmlFor="Means of Identification">Means of Identification</label>
        <div className="upload__field shadow" onClick={handleOptionOneClick}>
          <i className="bx bxs-file-blank"></i> <br />
          <span>
            e.g National Identity Card, Passport, or any means of identification
            by your country
          </span>
          <input ref={inputOneRef} type="file" style={{ display: "none" }} />
        </div>
      </div>
      <div className="form__area">
        <button onClick={handleSubmitForm}>
          {loading ? <AppLoader /> : "Submit"}
        </button>
      </div>
    </>
  );
};

const MissionaryAccount = () => {
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const [missionary, setMissionary] = useState<IMissionary>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    nationality: "",
    meansOfIdentification: "",
    denominationalAffiliation: "",
    denominationalLicense: "",
    bankName: "",
    accountNo: "",
    accountName: "",
    guarantorName: "",
    guarantorEmail: "",
    guarantorAddress: "",
    guarantorNationality: "",
    guarantorPhone: "",
    guarantorMeansOfIdentification: "",
  });

  const handlePosition = () => {
    setPosition((position) => position + 1);
  };

  const handleFormOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMissionary({ ...missionary, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    setLoading(true);
    try {
      setTimeout(() => {
        sessionStorage.setItem(
          "user",
          JSON.stringify({ ...missionary, role: "missionary" })
        );
        setLoading(false)
        window.location.reload()
      }, 1500);
    } catch (error) {
      setLoading(false)
    }
  };

  const steps = [
    {
      component: (
        <FirstStep
          user={missionary}
          handlePosition={handlePosition}
          handleFormOnChange={handleFormOnChange}
        />
      ),
    },
    {
      component: (
        <SecondStep
          user={missionary}
          handlePosition={handlePosition}
          handleFormOnChange={handleFormOnChange}
        />
      ),
    },
    {
      component: (
        <ThirdStep
          user={missionary}
          handlePosition={handlePosition}
          handleFormOnChange={handleFormOnChange}
        />
      ),
    },
    {
      component: (
        <FourthStep
          user={missionary}
          handleFormOnChange={handleFormOnChange}
          handleSubmitForm={handleSubmitForm}
          loading={loading}
        />
      ),
    },
  ];

  return (
    <div className="user__account">
      <Nav />
      <div className="form__group">{steps[position].component}</div>
    </div>
  );
};

export default MissionaryAccount;
