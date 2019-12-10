import React, { useState } from "react";
import { Input } from "antd";

export const Form = ({ handleSubmitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleClickBuy = e => {
    e.preventDefault();
    handleSubmitForm({ name, email });
  };

  return (
    <form className="form-buy">
      <div className="input-block">
        <label htmlFor="name">Name</label>
        <Input value={name} name="name" onChange={handleChangeName} />
      </div>
      <div className="input-block">
        <label htmlFor="email">E-mail</label>
        <Input value={email} name="email" onChange={handleChangeEmail} />
      </div>
      <div className="btn-container">
        <div
          onClick={handleClickBuy}
          className="btn btn-primary btn-buy"
          disabled={!name && !email}
        >
          <span>Buy</span>
        </div>
      </div>
    </form>
  );
};
