import "dotenv/config";
import Paycheck from "./models/paycheck.js";

import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

/* Route handlers */
app.get("/api/paysheet", (req, res) => {
  Paycheck.find({}).then((paychecks) => res.json(paychecks));
});

app.post("/api/paysheet", (req, res) => {
  console.log("Before: ", req.body);
  const paycheckDocument = new Paycheck(req.body);
  console.log("after", paycheckDocument);
  paycheckDocument.save().then((savedPaycheck) => res.json(savedPaycheck));
});

app.delete("/api/paysheet/:id", (req, res) => {
  const sentPaycheckId = req.params.id;
  Paycheck.findByIdAndDelete(sentPaycheckId).then((deletedPaycheck) =>
    res.json(deletedPaycheck),
  );
});

app.put("/api/paysheet/:id", (req, res) => {
  const sentPaycheckId = req.params.id;
  const sentPaycheck = req.body;

  console.log(sentPaycheckId);
  Paycheck.findByIdAndUpdate(sentPaycheckId, sentPaycheck, {new: true}).then(
    (updatedPaycheck) => {
      console.log(updatedPaycheck)
      res.json(updatedPaycheck);
    },
  );
});
const PORT = process.env.PORT;
app.listen(PORT);

function errorHandler(error, req, res, next) {}

/* function that saves 5 mock Paychecks in the Database*/
function makeSamplePayChecks() {
  Paycheck.find({}).then((allPaychecks) => {
    if (allPaychecks.length < 1) {
      const samplePaychecks = [
        {
          weekStart: "2026-06-01",
          weekEnd: "2026-06-07",
          shifts: {
            Sun: "Full Day",
            Mon: "Dinner",
          },
          tips: {
            Sun: 180,
            Mon: 95,
          },
          expected: 425,
          received: null,
        },
        {
          weekStart: "2026-06-08",
          weekEnd: "2026-06-14",
          shifts: {
            Sun: "Lunch",
            Mon: "Full Day",
            Tue: "Dinner",
          },
          tips: {
            Sun: 75,
            Mon: 210,
            Tue: 120,
          },
          expected: 645,
          received: 640,
        },
        {
          weekStart: "2026-06-15",
          weekEnd: "2026-06-21",
          shifts: {
            Sun: "Dinner",
            Tue: "Full Day",
          },
          tips: {
            Sun: 135,
            Tue: 240,
          },
          expected: 575,
          received: 575,
        },
        {
          weekStart: "2026-06-22",
          weekEnd: "2026-06-28",
          shifts: {
            Mon: "Lunch",
            Tue: "Dinner",
          },
          tips: {
            Mon: 80,
            Tue: 145,
          },
          expected: 385,
          received: null,
        },
        {
          weekStart: "2026-06-29",
          weekEnd: "2026-07-05",
          shifts: {
            Sun: "Full Day",
            Tue: "Dinner",
          },
          tips: {
            Sun: 260,
            Tue: 110,
          },
          expected: 610,
          received: 600,
        },
        {
          weekStart: "2026-07-06",
          weekEnd: "2026-07-12",
          shifts: {
            Sun: "Lunch",
            Mon: "Dinner",
            Tue: "Dinner",
          },
          tips: {
            Sun: 90,
            Mon: 125,
            Tue: 140,
          },
          expected: 555,
          received: 555,
        },
        {
          weekStart: "2026-07-13",
          weekEnd: "2026-07-19",
          shifts: {
            Mon: "Full Day",
          },
          tips: {
            Mon: 230,
          },
          expected: 350,
          received: null,
        },
        {
          weekStart: "2026-07-20",
          weekEnd: "2026-07-26",
          shifts: {
            Sun: "Dinner",
            Mon: "Dinner",
            Tue: "Full Day",
          },
          tips: {
            Sun: 150,
            Mon: 130,
            Tue: 250,
          },
          expected: 770,
          received: 770,
        },
        {
          weekStart: "2026-07-27",
          weekEnd: "2026-08-02",
          shifts: {
            Sun: "Full Day",
            Mon: "Lunch",
          },
          tips: {
            Sun: 275,
            Mon: 85,
          },
          expected: 600,
          received: 590,
        },
        {
          weekStart: "2026-08-03",
          weekEnd: "2026-08-09",
          shifts: {
            Tue: "Dinner",
          },
          tips: {
            Tue: 155,
          },
          expected: 235,
          received: null,
        },
      ];
      samplePaychecks.forEach((paycheck) => {
        new Paycheck(paycheck).save();
      });
    } else {
      return;
    }
  });
}
