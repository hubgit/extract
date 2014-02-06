# About

Extract is a template language that lets you declaratively transform HTML nodes into
Javascript objects using JSON markup and CSS selectors. The idea is to write
some JSON markup that looks like the object that you want to end up with, and then
add selectors to tell Extract where the data should come from.

# Usage

**Turn:**

	<div id="test">
		<div class="example" id="example-1">
			<h2>Hello</h2>
		</div>
		<div class="example" id="example-2">
			<h2>Goodbye</h2>
		</div>
	</div>

**into:**

	[
		{ id: "1", message: "Hello" },
		{ id: "3", message: "Goodbye" }
	]

**using:**
	var template = [ '.example', { id: '@id', message: 'h2' } ];
	var node = document.getElementById('test');
	var result = Extract.parse(template, node
	
# Demonstration

[Demo](http://git.macropus.org/extract/demo/)

# History

Derived from [Jath](https://github.com/dnewcome/jath)

# License

[MIT license](http://git.macropus.org/mit-license/)
