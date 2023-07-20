const { Signup, Login } = require("../Controllers/AuthController");
const { AddProblem, ListAllProblem, ListSingleProblem, AllProbOfUser, DeleteProb } = require("../Controllers/problemController");
const { SubmitSol, AllSolForProb, MySolStat, RunInput, AllSolForUser, DeleteSol } = require("../Controllers/solController");
const { uploadFile, DeleteTest } = require("../Controllers/testController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);

router.post('/addproblem', AddProblem);
router.post('/upload', uploadFile);

router.post('/submit', SubmitSol);
router.post('/run', RunInput);

router.get('/allproblems', ListAllProblem);
router.get('/singleproblem/:id', ListSingleProblem);

router.get('/allsolproblem/:id', AllSolForProb);
router.get('/allsoluser/:id', AllSolForUser);
router.get('/allprobuser/:id', AllProbOfUser);
router.get('/mysolstat/:id', MySolStat);

router.delete('/deleteproblem/:id', DeleteProb);
router.delete('/deletetestcase/:id', DeleteTest);
router.delete('/deletesolutions/:id', DeleteSol);

router.post('/',userVerification);

module.exports = router;