export default function registerUser(req, res) {
  if (req.body) {
    console.log(req.body);
    res.send(req.body);
  } else {
    res.send("No Data Found!");
  }
}
