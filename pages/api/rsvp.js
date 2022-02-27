import query from "../../lib/db";
import prepare from "sql-template-strings";

export default async (req, res) => {
  if (req.method !== "POST") {
    if (process.env.DEBUG >= 1) {
      console.log("[DEBUG] Pending Bets Lookup: Request must be POST");
    }
    res.statusCode = 405;
    res.send("Method Not Allowed");
    return;
  }

  let insertTime = Math.round(Date.now() / 1000);
  const rsvpPerson = await query(
    prepare`INSERT INTO rsvps (name1, meal1, name2, meal2, dietary, date) VALUES (${req.body.person1}, ${req.body.person1Meal}, ${req.body.person2}, ${req.body.person2Meal}, ${dietary}, ${insertTime})`
  );
  if (!rsvpPerson.response.boolean) {
    res.statusCode = 200;
    res.json({
      response: {
        boolean: false,
        alert: "danger",
        message: "Could not RSVP",
      },
      payload: {},
    });

    return;
  }

  //return success
  res.statusCode = 200;
  res.json({
    response: {
      boolean: true,
      alert: "",
      message: "",
    },
  });

  return;
};
