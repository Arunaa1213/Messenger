import React from "react";

const Register = () => {
  return (
    <section>
      <h3>Create An Account</h3>
      <form className="form">
        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="input_container">
          <label htmlFor="password">password</label>
          <input type="text" name="password" />
        </div>
      </form>
    </section>
  );
};
export default Register;
