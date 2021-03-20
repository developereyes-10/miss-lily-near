import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';
import RandomMessages from './components/RandomMessages';

const SUGGESTED_DONATION = '0';
const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // TODO: don't just fetch once; subscribe!
    contract.getMessages().then(setMessages);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const { fieldset, message, donation, name, email, ques_1, ques_2, ques_3, ques_4 } = e.target.elements;

    fieldset.disabled = true;
    let total_score = 0;
    if(ques_3.value == "Print advertising"){total_score++;}
    if(ques_4.value == "Videos"){total_score++;}

    // console.log(name.value + " " + email.value + " " + ques_1.value + " " + ques_2.value + " " + ques_3.value + " " + ques_4.value);

    // TODO: optimistically update page with new message,
    // update blockchain data in background
    // add uuid to each message, so we know which one is already known
    contract.addMessage(
      { text: " ", text1: name.value, text2: email.value, text3: total_score.toString(), text4: ques_2.value, text5: ques_1.value },
      BOATLOAD_OF_GAS,
      Big(donation.value || '0').times(10 ** 24).toFixed()
    ).then(() => {
      contract.getMessages().then(messages => {
        window.location.replace("offer-letter.html");
      });
    });
  };

  const signIn = () => {
    wallet.requestSignIn(
      nearConfig.contractName,
      'Volunteer Registration'
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <main>
      <header>
        <h1>Volunteer Registration</h1>
        { currentUser
          ? <p></p>
          : <button onClick={signIn}>Log in</button>
        }
      </header>
      { currentUser
        ? <Form onSubmit={onSubmit} currentUser={currentUser} />
        : <SignIn/>
      }
      { currentUser
        ? <button onClick={signOut}>Log out</button>
        : <p></p>
      }
      {/*{ !!currentUser && !!messages.length && <Messages messages={messages}/> }*/}
      {/*{ !!currentUser && !!messages.length && <RandomMessages messages={messages}/> }*/}

    </main>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    addMessage: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;
