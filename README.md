# Meteor DNSCache

Wraps [https://www.npmjs.com/package/dnscache](dnscache) for use in Meteor.

# Installation

  meteor add infinitedg:dnscache

# Usage
This package exports `DNSCACHE`, which is a direct link to the module. To use it, run...
  var dnscache = DNSCACHE({
  	"enable": true, // Not default, but required for use
  	"ttl": 300, // Default
  	"cachesize": 1000 // Default
  });

Future calls to Node's DNS package or to `dnscache` (which is API-compatible with Node's `dns`) will utilize this caching mechanism.