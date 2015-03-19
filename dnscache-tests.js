var Future = Npm.require('fibers/future');

Tinytest.add('dnscache-basic-server', function (test) {
	var dnscache = DNSCACHE({
		'enable': true
	});

	function dnsTest(methodName, host) {
		var fut = new Future();
		dnscache[methodName](host, Meteor.bindEnvironment(function(err, res) {
			test.isNull(err);
			if (err) {
				fut.throw(err);
			} else {
				fut.return(res);
			}
		}));
		fut.wait();
	}

	// We don't implement tests for every DNS method (Skipping reverse, Soa, and Srv)
	// Mostly due to a lack of permanent examples of srv and soa in the wild
	dnsTest('lookup', 'www.google.com');
	dnsTest('resolve', 'www.google.com');
	dnsTest('resolve4', 'google.com');
	dnsTest('resolve6', 'google.com');
	dnsTest('resolveMx', 'google.com');
	dnsTest('resolveTxt', 'google.com');
	dnsTest('resolveNs', 'google.com');
	dnsTest('resolveCname', 'www.meteor.com');
});