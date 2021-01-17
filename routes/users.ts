import express, { RequestHandler } from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource user");
} as RequestHandler);

router.get("/xxx", function (req, res) {
  res.send("xxx 发送这句话123");
} as RequestHandler);

export default router;
