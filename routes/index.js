var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/say', function(req, res, next) {
  const ssh = spawn('ssh', ['mackadministrator@192.168.0.84', 'say test']);
  console.log(ssh.stdin)
  ssh.stdin.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  ssh.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ssh.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ssh.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  res.render('index', { title: 'Express' });
});
module.exports = router;

// const ChildProcess=require('child_process')
