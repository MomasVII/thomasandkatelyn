import React, { useState } from "react";

function RSVP(props) {
  const [state, setState] = useState({
    submitting: false,
    attending: false,
  });

  //expose the state vars
  const { submitting, attending } = state;

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
            <p>Yes</p>
          </label>
          <label
            className="formControl"
            onClick={() => setState({ ...state, attending: false })}
          >
            <input type="radio" name="radio" />
            <p>No</p>
          </label>
        </div>
      </div>
      {attending && (
        <div className="textForm">
          <label>
            <p>Meal Preference</p>
            <select id="name" className="formInput" name="name">
              <option>Fish</option>
            </select>
          </label>
        </div>
      )}
      <div className="cancelContainer">
        <button type="submit" className="buttonContainer">
          <span className="buttonText">Submit Report</span>
        </button>
      </div>
    </form>
  );
}

export default RSVP;
