import React from "react";
import SubHeader from '../layouts/SubHeader'

const Contact: React.FC = (): JSX.Element => {
  return (
    <>
    <SubHeader title="contact us"/>
    <section className="main-content">
      <div className="row">
        <div className="span5">
          <div>
            <h5>ADDITIONAL INFORMATION</h5>
            <p>
              <strong>Phone:</strong>&nbsp;(123) 456-7890
              <br />
              <strong>Fax:</strong>&nbsp;+04 (123) 456-7890
              <br />
              <strong>Email:</strong>&nbsp;
              <a href="/">vietcuong_it@yahoo.com</a>
            </p>
            <br />
            <h5>SECONDARY OFFICE IN VIETNAM</h5>
            <p>
              <strong>Phone:</strong>&nbsp;(113) 023-1125
              <br />
              <strong>Fax:</strong>&nbsp;+04 (113) 023-1145
              <br />
              <strong>Email:</strong>&nbsp;
              <a href="/">vietcuong_it@yahoo.com</a>
            </p>
          </div>
        </div>
        <div className="span7">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <form method="post" action="/">
            <fieldset>
              <div className="clearfix">
                <label htmlFor="name">
                  <span>Name:</span>
                </label>
                <div className="input">
                  <input
                    size={18}
                    id="name"
                    name="name"
                    type="text"
                    value=""
                    className="input-xlarge"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="clearfix">
                <label htmlFor="email">
                  <span>Email:</span>
                </label>
                <div className="input">
                  <input
                    size={25}
                    id="email"
                    name="email"
                    type="text"
                    value=""
                    className="input-xlarge"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="clearfix">
                <label htmlFor="message">
                  <span>Message:</span>
                </label>
                <div className="input">
                  <textarea
                    className="input-xlarge"
                    id="message"
                    name="body"
                    rows={7}
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div className="actions">
                <button type="submit" className="btn btn-inverse">
                  Send message
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  </>
  );
};

export default Contact;
