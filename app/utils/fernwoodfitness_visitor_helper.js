/*
 Implementation for the visitor's scenario at website "https://admin.fernwoodfitness.com.au"
*/

var config = {
    url: 'https://admin.fernwoodfitness.com.au',
    username: 'reception.user',
    password: 'Asdf1234'
};

var casper = require('casper').create();

casper.start(config.url, function() {
    // fill login form with username and password
    this.fill('form#login', {
        'txtUserName': config.username,
        'txtPassWord': config.password
    }, false);
});

casper.then(function() {
    // click on login button
    this.click('input[id="btnLogin"]');
});

casper.then(function() {
    // click on the visit submenu
    this.click('div[id="menuItemText10"] a');
});

function testAlert(message) {
    this.echo(message);
}

casper.then(function() {
    // temporarily registering listener
    this.on('remote.alert', testAlert);
});

casper.then(function() {
    // input member id
    casper.echo("Member ID: " + casper.cli.args[0]);
    this.fill('form#frmServer', {
        'txtMemberID':    casper.cli.args[0]
    }, false);
});

casper.then(function() {
    // click on visit button
    this.click('input[id="btnUpdate"]');
});

casper.then(function() {
    this.removeListener('remote.alert', testAlert);
});
/*
casper.waitForAlert(function(response) {
    // log the alert message which appears after visit.
    casper.log(response.data);
});
*/
casper.run(function() {
    this.exit();
});
