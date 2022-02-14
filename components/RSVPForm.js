import React, { useState } from "react";
import { motion } from "framer-motion"
import { stagger, fadeInUp, heightChange } from '../styles/animations'

function RSVP(props) {


  const [state, setState] = useState({
    submitting: false,
    attending: false,
    otherAttending: false,
    anotherGuest: false
  });

  //expose the state vars
  const { submitting, attending, otherAttending, anotherGuest } = state;

  const rsvpMe = async (event) => {
    setState({
      ...state,
      submitting: true,
    });

    event.preventDefault();

    const data = {
      cid: event.target.club.value,
      bid: event.target.bid.value,
      description: event.target.description.value,
      date: new Date().getTime() / 1000,
    };
    try {
      const res = await fetch("/api/bets/reportbet", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();

      //Bet successfully placed
      if (result.response.boolean) {
        setState({
          ...state,
          submitting: false,
          thanks: true,
        });
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
        props.previous();
        setState({
          ...state,
          thanks: false,
        });
      }
    } catch (err) {
      if (process.env.DEBUG >= 1) {
        console.log("[DEBUG] Submit New Bet Form");
      }
    }
    setState({
      ...state,
      submitting: false,
    });
  };

  return (
    <form onSubmit={rsvpMe} className="myForm">
      <div className="textForm">
        <label>
          <p>Name</p>
          <input id="name" className="formInput" name="name" type="text" />
        </label>
      </div>
      <div className="attending">
        <p>Are you attending?</p>
        <div className="attendingRadio">
          <label
            className="formControl"
            onClick={() => setState({ ...state, attending: true })}
          >
            <input type="radio" name="radio" />
            <div className={`radioButton ${attending ? 'highlightButton' : ''}`}>Yes</div>
          </label>
          <label
            className="formControl"
            onClick={() => setState({ ...state, attending: false })}
          >
            <input type="radio" name="radio" />
            <div className={`radioButton ${!attending ? 'highlightButton' : ''}`}>No</div>
          </label>
        </div>
      </div>
      <motion.div
          key={1}
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          variants={stagger}
        >
        {attending && (
          <motion.div className="textForm" variants={fadeInUp}>
            <label>
              <p>Meal Preference</p>
              <select id="name" className="formInput" name="name">
                <option>Chicken</option>
                <option>Beef</option>
                <option>Vegetarian</option>
              </select>
            </label>
          </motion.div>
        )}
      </motion.div>
      <div className="attending">
        <p>RSVP for:</p>
        <div className="attendingRadio">
          <label
            className="formControl"
            onClick={() => setState({ ...state, anotherGuest: false })}
          >
            <input type="radio" name="radio" />
            <div className={`radioButton ${!anotherGuest ? 'highlightButton' : ''}`}>Just Me</div>
          </label>
          <label
            className="formControl"
            onClick={() => setState({ ...state, anotherGuest: true })}
          >
            <input type="radio" name="radio" />
            <div className={`radioButton ${anotherGuest ? 'highlightButton' : ''}`}>Another Guest</div>
          </label>
        </div>
      </div>
      <motion.div
          key={1}
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          variants={stagger}
        >
      {anotherGuest && (
      <>
        <div className="textForm">
          <label>
            <p>Name</p>
            <input id="name" className="formInput" name="name" type="text" />
          </label>
        </div>
        <div className="attending">
          <p>Is this person attending?</p>
          <div className="attendingRadio">
            <label
              className="formControl"
              onClick={() => setState({ ...state, otherAttending: true })}
            >
              <input type="radio" name="radio" />
              <div className={`radioButton ${otherAttending ? 'highlightButton' : ''}`}>Yes</div>
            </label>
            <label
              className="formControl"
              onClick={() => setState({ ...state, otherAttending: false })}
            >
              <input type="radio" name="radio" />
              <div className={`radioButton ${!otherAttending ? 'highlightButton' : ''}`}>No</div>
            </label>
          </div>
        </div>
      </>
      )}
      </motion.div>
      {otherAttending && anotherGuest && (
        <div className="textForm">
          <label>
            <p>Meal Preference</p>
            <select id="name" className="formInput" name="name">
              <option>Chicken</option>
              <option>Beef</option>
              <option>Vegetarian</option>
            </select>
          </label>
        </div>
      )}
        <button type="submit" className="submitContainer">
          <span className="buttonText">RSVP</span>
        </button>
    </form>
  );
}

export default RSVP;
