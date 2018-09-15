/** = Vanilla JS  is a fast, lightweight, cross-platform framework =
 * for building incredible, powerful JavaScript applications.
 */

Introduction

/* The VanillaJS team maintains every byte of code in the framework and works hard each day to make
 * sure it is small and intuitive. Who's using Vanilla JS? Glad you asked! Here are a few:
 */

Facebook Google YouTube Yahoo Wikipedia Windows Live Twitter Amazon LinkedIn MSN
eBay Microsoft Tumblr Apple Pinterest PayPal Reddit Netfix Stack Overflow

In fact, Vanilla JS is already used on more websites than jQuery, Prototype JS, MooTools, YUI, and
Google Web Toolkit - combined.

Download

Testimonials

Getting Started

<script src="path/to/vanilla.js"></script>

Spead Comparison

VanillaJS / document.getElementById('test-table');
Dojo / dojo.byId('test-table');
PrototypeJS / $('test-table')
Ext JS / delete Ext.elCache['test-table']; Ext.get('test-table');
jQuery / $jq('#test-table');
YUI / YAHOO.util.Dom.get('test-table');
MooTools / document.id('test-table')

Code Examples

Fade an element out and then remove it

VanillaJS

var s = document.getElementById('thing').style;
s.opacity = 1;
(function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();

jQuery
<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script>
$('#thing').fadeOut();
</script>

Make an AJAX call

VanillaJS

var r = new XMLHttpRequest();
r.open("POST","path/to/api", true);
r.onreadystate hange = function (){
	if (r.readyState != 4 || r.status != 200) return;
	alert("Success: " + r.responseText)
};
r.send("banana=yellow");

jQuery

<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script>
$.ajax({
	type: 'POST',
	url: "path/to/api",
	data: "banana=yellow",
	success: function (data) {
		alert("Sucess: " + data);
	},
});
</script>

Futher Reading

For more information about Vanilla JS:

check out the Vanilla JS documentation
read some books on Vanilla JS
or try out one of the many Vanilla JS plugins.
When powering your applications with Vanilla JS, feel free to use this handy button!
