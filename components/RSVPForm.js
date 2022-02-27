import React, { useState } from "react";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../styles/animations";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Ring } from "react-awesome-spinners";

function RSVP(props) {
  const [state, setState] = useState({
    submitting: false,
    attending: 2,
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
      person1Meal:
        attending == 1 ? event.target.person1Meal.value : "Not Attending",
      person2: anotherGuest ? event.target.person2.value : "No Other Guests",
      person2Meal: otherAttending
        ? event.target.person2Meal.value
        : "Not Attending",
      dietary: event.target.dietary.value,
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

      if (result.response.boolean) {
        setState({
          ...state,
          submitting: false,
          thanks: true,
        });
      } else {
        setState({
          ...state,
          submitting: false,
        });
      }
    } catch (err) {
      if (process.env.DEBUG >= 1) {
        console.log("[DEBUG] Submit New Bet Form");
      }
    }
  };

  return (
    <>
      {thanks ? (
        <div className="thanksContainer">Cheers legends.</div>
      ) : submitting ? (
        <div className="loader"><Ring size={40} color="white" /></div>
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
                  required
                />
              </label>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay="0.2">
            <div className="attending">
              <p>Will we be celebrating with you?</p>
              <div className="attendingRadio">
                <label
                  className="formControl"
                  onClick={() => setState({ ...state, attending: 1 })}
                >
                  <input
                    type="radio"
                    name="person1Attending"
                    value="Attending"
                    required
                  />
                  <div
                    className={`radioButton ${
                      attending == 1 ? "highlightButton" : ""
                    }`}
                  >
                    Yes, can&apos;t wait!
                  </div>
                </label>
                <label
                  className="formControl"
                  onClick={() => setState({ ...state, attending: 0 })}
                >
                  <input
                    type="radio"
                    name="person1Attending"
                    value="NotAttending"
                  />
                  <div
                    className={`radioButton ${
                      attending == 0 ? "highlightButton" : ""
                    }`}
                  >
                    Sorry, celebrating in spirit 
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
            {attending == 1 && (
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
                    <option value="Vegetarian">Fish</option>
                    <option value="Vegetarian">Vegetarian</option>
                  </select>
                </label>
              </motion.div>
            )}
          </motion.div>
          <FadeInWhenVisible delay="0.4">
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
          </FadeInWhenVisible>
          <motion.div
            key={2}
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
                      required
                    />
                  </label>
                </div>
                <div className="attending">
                  <p>Will we be celebrating with you?</p>
                  <div className="attendingRadio">
                    <label
                      className="formControl"
                      onClick={() =>
                        setState({ ...state, otherAttending: true })
                      }
                    >
                      <input
                        type="radio"
                        name="person2Attending"
                        required
                        defaultChecked={otherAttending}
                      />
                      <div
                        className={`radioButton ${
                          otherAttending ? "highlightButton" : ""
                        }`}
                      >
                        Yes, can&apos;t wait!
                      </div>
                    </label>
                    <label
                      className="formControl"
                      onClick={() =>
                        setState({ ...state, otherAttending: false })
                      }
                    >
                      <input
                        type="radio"
                        name="person2Attending"
                        defaultChecked={!otherAttending}
                      />
                      <div
                        className={`radioButton ${
                          !otherAttending ? "highlightButton" : ""
                        }`}
                      >
                        Sorry, celebrating in spirit
                      </div>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            key={3}
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
                    <option value="Vegetarian">Fish</option>
                    <option value="Vegetarian">Vegetarian</option>
                  </select>
                </label>
              </motion.div>
            )}
          </motion.div>
          <FadeInWhenVisible delay="0">
            <div className="textForm">
              <label>
                <p>Dietary Requirements</p>
                <input
                  id="dietary"
                  className="formInput"
                  name="dietary"
                  type="text"
                />
              </label>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay="0.6">
            <button type="submit" className="submitContainer">
              <span className="buttonText">RSVP</span>
            </button>
          </FadeInWhenVisible>
        </form>
      )}
    </>
  );
}

export default RSVP;
