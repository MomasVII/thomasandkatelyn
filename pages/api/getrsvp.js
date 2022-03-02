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

  const rsvpPerson = await query(prepare`SELECT * FROM rsvps`);
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
    payload: rsvpPerson.data,
  });

  return;
};
