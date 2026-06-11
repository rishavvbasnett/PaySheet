import "dotenv/config";
import Paycheck from "./models/paycheck.js";

import express, { response } from "express";

const app = express();
app.use(express.json());

mockPaychecks();

/* Route handlers */
app.get("/api/paysheet", (req, res) => {
  Paycheck.find({}).then((paychecks) => res.json(paychecks));
});

app.post("/api/paysheet", (req, res) => {
  const paycheckDocument = new Paycheck(req.body);
  console.log(paycheckDocument);
  paycheckDocument.save().then((savedPaycheck) => res.json(savedPaycheck));
});

app.delete("/api/paysheet/:id", (req, res) => {
  const sentPaycheckId = req.params.id;
  Paycheck.findByIdAndDelete(sentPaycheckId).then((deletedPaycheck) =>
    res.json(deletedPaycheck),
  );
});

const PORT = process.env.PORT;
app.listen(PORT);

function errorHandler(error, req, res, next) {}

/* function that saves 5 mock Paychecks in the Database*/
function mockPaychecks() {
  Paycheck.find({}).then((allPaychecks) => {
    if (allPaychecks.length < 1) {
      const examplePaychecks = [
        {
          week: "May 20, 2026 - May 26, 2026",
          shifts: { Mon: "Full", Tue: "Dinner", Fri: "Full", Sat: "Dinner" },
          tips: { Mon: 120, Tue: 85, Fri: 145, Sat: 200 },
          paid: false,
          expected: 650,
          received: null,
        },
        {
          week: "May 27, 2026 - Jun 2, 2026",
          shifts: { Wed: "Dinner", Thu: "Full", Sat: "Full", Sun: "Dinner" },
          tips: { Wed: 95, Thu: 130, Sat: 180, Sun: 110 },
          paid: true,
          expected: 720,
          received: 720,
        },
        {
          week: "Jun 3, 2026 - Jun 9, 2026",
          shifts: { Mon: "Dinner", Fri: "Full", Sat: "Full", Sun: "Full" },
          tips: { Mon: 90, Fri: 160, Sat: 210, Sun: 175 },
          paid: false,
          expected: 800,
          received: null,
        },
        {
          week: "Jun 10, 2026 - Jun 16, 2026",
          shifts: { Tue: "Full", Wed: "Dinner", Thu: "Full", Sat: "Dinner" },
          tips: { Tue: 140, Wed: 100, Thu: 155, Sat: 190 },
          paid: true,
          expected: 740,
          received: 700,
        },
        {
          week: "Jun 17, 2026 - Jun 23, 2026",
          shifts: { Mon: "Full", Thu: "Dinner", Fri: "Full", Sun: "Dinner" },
          tips: { Mon: 125, Thu: 95, Fri: 170, Sun: 130 },
          paid: false,
          expected: 690,
          received: null,
        },
      ];
      examplePaychecks.forEach((paycheck) => {
        new Paycheck(paycheck).save();
      });
    } else {
      return;
    }
  });
}
