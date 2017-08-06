const { spawn } = require('child_process');
const ssh = spawn('ssh', ['mackadministrator@192.168.0.84', 'say test']);
// const ChildProcess=require('child_process')
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
