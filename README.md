OmniBypass (v1.0.0)
===========

This script is used to detect ad blockers.


Valid on
---------------------
- Google Chrome
- Mozilla Firefox
- Internet Explorer (8+)
- Safari
- Opera

Install via
---------------------
Manual:
```
Download "omniBypass.js" and add it to your website.
```

Run and test
---------------------
Go to root directory and run
```
python -m SimpleHTTPServer
 
```
On the browser go to
```
http://localhost:8000/test.html
 
```

Code example
---------------------
```javascript
// Function called if AdBlock is not detected
function adBlockNotDetected() {
	alert('AdBlock is not enabled');
}
// Function called if AdBlock is detected
function adBlockDetected() {
	alert('AdBlock is enabled');
}

// If the file is not called, the variable does not exist 'omniBypass'
// This means that AdBlock is present
if(typeof omniBypass === 'undefined') {
	adBlockDetected();
} else {
	omniBypass.onDetected(adBlockDetected);
	omniBypass.onNotDetected(adBlockNotDetected);
	// and|or
	omniBypass.on(true, adBlockDetected);
	omniBypass.on(false, adBlockNotDetected);
	// and|or
	omniBypass.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
}

// Change the options
omniBypass.setOption('checkOnLoad', false);
// and|or
omniBypass.setOption({
	debug: true,
	checkOnLoad: false,
	resetOnEnd: false
});
```

Default options
---------------------
```javascript
// At launch, check if AdBlock is enabled
// Uses the method omniBypass.check()
checkOnLoad: true

// At the end of the check, is that it removes all events added ?
resetOnEnd: true

// The number of milliseconds between each check
loopCheckTime: 50

// The number of negative checks after which there is considered that AdBlock is not enabled
// Time (ms) = 50*(5-1) = 200ms (per default)
loopMaxNumber: 5

// CSS class used by the bait caught AdBlock
baitClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links'

// CSS style used to hide the bait of the users
baitStyle: 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'

// Displays the debug in the console (available only from version 3.2 and more)
debug: false
```

Method available
---------------------
```javascript
// Allows to set options
// #options: string|object
// #value:   string
omniBypass.setOption(options, value);

// Manually check if AdBlock is enabled.
// Returns `true` upon completion of check.
// Returns `false` if check cannot be performed (eg due to another check in progress).
// The parameter 'loop' allows checking without loop several times according to the value of 'loopMaxNumber'
// Example: loop=true  => time~=200ms (time varies depending on the configuration)
//          loop=false => time~=1ms
// #loop: boolean (default: true)
omniBypass.check(loop);

// Allows to manually simulate the presence of AdBlock or not
// #detected: boolean (AdBlock is detected ?)
omniBypass.emitEvent(detected);

// Allows to clear all events added via methods 'on', 'onDetected' and 'onNotDetected'
omniBypass.clearEvent();

// Allows to add an event if AdBlock is detected
// #detected: boolean (true: detected, false: not detected)
// #fn:       function
omniBypass.on(detected, fn);

// Similar to blockAdBlock.on(true|false, fn)
omniBypass.onDetected(fn);
omniBypass.onNotDetected(fn);
```

Instance
---------------------

By default, OmniBypass is instantiated automatically.
To block this automatic instantiation, simply create a variable "omniBypass" with a value (null, false, ...) before importing the script.
```html
<script>var omniBypass = false;</script>
<script src="./omniBypass.js"></script>
```
After that, you are free to create your own instances:
```javascript
omniBypass = new OmniBypass;
// and|or
myOmniBypass = new OmniBypass({
	checkOnLoad: true,
	resetOnEnd: true
});
```
