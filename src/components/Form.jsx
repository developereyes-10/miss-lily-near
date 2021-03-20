import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Start the application, { currentUser.accountId }!</p>
        <p className="highlight">
          <label htmlFor="name">Name:</label>
          <input
            autoComplete="off"
            autoFocus
            id="name"
            required
          />
        </p>
        <p className="highlight">
          <label htmlFor="email">Email:</label>
          <input
            autoComplete="off"
            autoFocus
            id="email"
            required
          />
        </p>
        {/*<p className="highlight">*/}
        {/*  <label htmlFor="message">Message:</label>*/}
        {/*  <input*/}
        {/*    autoComplete="off"*/}
        {/*    autoFocus*/}
        {/*    id="message"*/}
        {/*    required*/}
        {/*  />*/}
        {/*</p>*/}
        <h3><strong>Question 1.</strong> How do you want to assist us?</h3>
        <ol>
          <li><p>Volunteer</p></li>
          <li><p>Contribute with my existing skills</p></li>
          <li><p>Help in Fundraising</p></li>
          <li><p>Partner</p></li>
        </ol>
        <p className="highlight">
          <label htmlFor="message">Answer:</label>
          <input
            autoComplete="off"
            autoFocus
            id="ques_1"
            required
          />
        </p>

        <h3><strong>Question 2.</strong> What are your educational qualifications?</h3>
        <ol>
          <li><p>I haven't been to college</p></li>
          <li><p>I hold a Bachelor's degree</p></li>
          <li><p>I have a Master's</p></li>
          <li><p>I am a Post Doctrate</p></li>
        </ol>
        <p className="highlight">
          <label htmlFor="message">Answer:</label>
          <input
            autoComplete="off"
            autoFocus
            id="ques_2"
            required
          />
        </p>

        <h3><strong>Question 3.</strong> Which of the following is not a type of digital marketing
          activity?</h3>
        <ol>
          <li><p>Print advertising</p></li>
          <li><p>Social media marketing</p></li>
          <li><p>Email-marketing</p></li>
          <li><p>search engine marketing</p></li>
        </ol>
        <p className="highlight">
          <label htmlFor="message">Answer:</label>
          <input
            autoComplete="off"
            autoFocus
            id="ques_3"
            required
          />
        </p>

        <h3><strong>Question 4.</strong>
          Which is the most important medium of delivering content in digital marketing?</h3>
        <ol>
          <li><p>Articles</p></li>
          <li><p>Videos  </p></li>
          <li><p>Audio</p></li>
          <li><p>Pictorial or Graphical</p></li>
        </ol>
        <p className="highlight">
          <label htmlFor="message">Answer:</label>
          <input
            autoComplete="off"
            autoFocus
            id="ques_4"
            required
          />
        </p>

        <p>
          <label htmlFor="donation">Donation (optional):</label>
          <input
            autoComplete="off"
            defaultValue={'0'}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit">
          Submit →
        </button>
        <br></br>
        <br></br>
        <br></br>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
