import express from "express";

const router = express.Router();
router.get("/name", (req, res) => {
  res.send("Mrigendra Parmar");
});

router.get("/greeting", (req, res) => {
  res.send("Name: Mrigendra Parmar <br>Student Number: N01706125");
});

router.get("/add/:x/:y", (req, res) => {
  // Get x and y from query parameters
  console.log(req.params.x);
  let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);

  res.send(`${x + y}`);

  
});


router.get("/calculate/:x/:y/:operator", (req, res) => {
  let operator = req.params.operator;
let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);
  switch (operator) {
    case "+":
      return res.send(`${x + y}`);
    case "-":
      return res.send(`${x - y}`);
    case "*":
      return res.send(`${x * y}`);
    case "/":
      if (y != 0) {
        return res.send(`${x / y}`);
      } else {
        return res.send("y cannot be 0");
      }
    default:
      break;
  }
});
router.get("/", (req, res) => {});

router.get("/", (req, res) => {});

export default router;
