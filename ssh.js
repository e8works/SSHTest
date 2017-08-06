var path, node_ssh, ssh, fs

fs = require('fs')
path = require('path')
node_ssh = require('node-ssh')
ssh = new node_ssh()
console.log(ssh);
console.log('here');
ssh.connect({
  host: 'mackadministrator@192.160.0.84',
  username: 'Mack-Administrators-iMac',
  privateKey: 'Users/andresespineira/.ssh/id_ecdsa'
}).then(function() {
  console.log('something happened at least');
  ssh.execCommand('ls').then(function(result) {
    console.log('STDOUT: ' + result.stdout)
    console.log('STDERR: ' + result.stderr)
  })
})
