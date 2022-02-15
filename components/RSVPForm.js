import React, { useState } from "react";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../styles/animations";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Ring } from "react-awesome-spinners";

function RSVP(props) {
  const [state, setState] = useState({
    submitting: false,
    attending: false,
    otherAttending: false,
    anotherGuest: false,
    thanks: false,
  });

  //expose the state vars
  const { submitting, attending, otherAttending, anotherGuest, thanks } = state;

  const rsvpMe = async (event) => {
    setState({
      ...state,
      submitting: true,
    });

    event.preventDefault();

    const data = {
      person1: event.target.person1.value,
      person1Attending: event.target.person1Attending.value,
      person1Meal: attending ? event.target.person1Meal.value : "none",
      person2: anotherGuest ? event.target.person2.value : "none",
      person2Attending: anotherGuest
        ? event.target.person2Attending.value
        : "none",
      person2Meal: anotherGuest ? event.target.person2Meal.value : "none",
    };
    try {
      const res = await fetch("/api/rsvp", {
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
    <>
      {submitting ? (
        <Ring size={40} color="white" />
      ) : (
        <form onSubmit={rsvpMe} className="myForm">
          <FadeInWhenVisible delay="0">
            <div className="textForm">
              <label>
                <p>Name</p>
                <input
                  id="person1"
                  className="formInput"
                  name="person1"
                  type="text"
                />
              </label>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay="0.2">
            <div className="attending">
              <p>Are you attending?</p>
              <div className="attendingRadio">
                <label
                  className="formControl"
                  onClick={() => setState({ ...state, attending: true })}
                >
                  <input type="radio" name="person1Attending" />
                  <div
                    className={`radioButton ${
                      attending ? "highlightButton" : ""
                    }`}
                  >
                    Yes
                  </div>
                </label>
                <label
                  className="formControl"
                  onClick={() => setState({ ...state, attending: false })}
                >
                  <input type="radio" name="person1Attending" />
                  <div
                    className={`radioButton ${
                      !attending ? "highlightButton" : ""
                    }`}
                  >
                    No
                  </div>
                </label>
              </div>
            </div>
          </FadeInWhenVisible>
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
                  <select
                    id="person1Meal"
                    className="formInput"
                    name="person1Meal"
                  >
                    <option value="Chicken">Chicken</option>
                    <option value="Beef">Beef</option>
                    <option value="Vegetarian">Vegetarian</option>
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
                <input type="radio" name="rsvpFor" />
                <div
                  className={`radioButton ${
                    !anotherGuest ? "highlightButton" : ""
                  }`}
                >
                  Just Me
                </div>
              </label>
              <label
                className="formControl"
                onClick={() => setState({ ...state, anotherGuest: true })}
              >
                <input type="radio" name="rsvpFor" />
                <div
                  className={`radioButton ${
                    anotherGuest ? "highlightButton" : ""
                  }`}
                >
                  Another Guest
                </div>
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
              <motion.div variants={fadeInUp}>
                <div className="textForm">
                  <label>
                    <p>Name</p>
                    <input
                      id="person2"
                      className="formInput"
                      name="person2"
                      type="text"
                    />
                  </label>
                </div>
                <div className="attending">
                  <p>Is this person attending?</p>
                  <div className="attendingRadio">
                    <label
                      className="formControl"
                      onClick={() =>
                        setState({ ...state, otherAttending: true })
                      }
                    >
                      <input type="radio" name="person2Attending" />
                      <div
                        className={`radioButton ${
                          otherAttending ? "highlightButton" : ""
                        }`}
                      >
                        Yes
                      </div>
                    </label>
                    <label
                      className="formControl"
                      onClick={() =>
                        setState({ ...state, otherAttending: false })
                      }
                    >
                      <input type="radio" name="person2Attending" />
                      <div
                        className={`radioButton ${
                          !otherAttending ? "highlightButton" : ""
                        }`}
                      >
                        No
                      </div>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            key={1}
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {otherAttending && anotherGuest && (
              <motion.div variants={fadeInUp} className="textForm">
                <label>
                  <p>Meal Preference</p>
                  <select
                    id="person2Meal"
                    className="formInput"
                    name="person2Meal"
                  >
                    <option value="Chicken">Chicken</option>
                    <option value="Beef">Beef</option>
                    <option value="Vegetarian">Vegetarian</option>
                  </select>
                </label>
              </motion.div>
            )}
          </motion.div>
          <button type="submit" className="submitContainer">
            <span className="buttonText">RSVP</span>
          </button>
        </form>
      )}{" "}
    </>
  );
}

export default RSVP;
