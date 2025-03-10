import "./style.css";
import React from "react";
import Swal from "sweetalert2";

export default function Connect() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_WEB3_FORM_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
              });
              form.reset();
        }
      };
  return (
    <section
      className="container-fluid p-5 rounded-top-5"
      id="connect"
      style={{ minHeight: "60vh" }}
    >
      <h2 className="connect-title mb-4">Connect</h2>
      <div className="container row">
        <div className="col-sm-4">
          <h5 className="fw-bolder">Message</h5>
          <form onSubmit={onSubmit}>
            <fieldset>
              <div className="mb-2 row">
                <div className="col-4 col-sm-3 text-start">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>
                <div className="col-sm-9 col-8">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="mb-2 row">
                <div className="col-4 col-sm-3 text-start">
                  <label htmlFor="msg">Message</label>
                </div>
                <div className="col-8 col-sm-9">
                  <textarea name="msg" id="msg" className="w-100 p-2"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-sm w-100 btn-msg mb-4">
                Send
              </button>
            </fieldset>
          </form>
        </div>
        <div className="col-sm-4 d-flex flex-column nav-bottom">
          <h5 className="fw-bolder mb-3">Navigation</h5>
          <a href="/" className="mb-2 nav-bottom-link">
            Home
          </a>
          <a href="#projects" className="mb-2 nav-bottom-link">
            Project
          </a>
          <a href="#skill" className="mb-2 nav-bottom-link">
            Skill
          </a>
          <a href="#connect" className="active nav-bottom-link mb-4">
            Connect
          </a>
        </div>

        <div className="col-sm-4">
          <h5 className="fw-bolder mb-4">Social</h5>
          <div className="d-flex flex-row justify-content-evenly mb-2">
          <a href="mailto:flora.jiang1990@gmail.com?subject=Connect%20with%20Flora">
            <i className="fa-solid fa-envelope connect"></i>
            </a>
            <a href="https://github.com/FloraWebDesigner">
            <i className="fa-brands fa-github connect"></i>
            </a>
            <a href="https://www.linkedin.com/in/flora-j/">
            <i className="fa-brands fa-linkedin connect"></i>
            </a>
          </div>
          <p>Feel free to Contact me, I'm looking forward to talking to you.</p>
        </div>
      </div>
    </section>
  );
}
