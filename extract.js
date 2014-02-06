(function() {
	var parse = function(template, root) {
		switch (Object.prototype.toString.call(template)) {
			case '[object Array]':
				return parseArray(template, root);

			case '[object Object]':
				return parseObject(template, root);

			default:
				return parseItem(template, root);
		}
	};

	var parseArray = function(template, root) {
		// if the first item is null, use the current root and run all templates
		if (template[0] == null) {
			return template.slice(1).map(function(item) {
				return parse(item, root);
			});
		}

		var nodes = root.querySelectorAll(template[0]);

		return Array.prototype.map.call(nodes, function(root) {
			return parse(template[1], root);
		});
	};

	var parseObject = function(template, root) {
		var output = {};

		for (var key in template) {
		    if (template.hasOwnProperty(key)) {
		        output[key] = parse(template[key], root);
		    }
		}

		return output;
	};

	var parseItem = function(template, root) {
		// TODO: handle attribute at the end of a longer selector
		if (template.substring(0, 1) == '@') {
			return root.getAttribute(template.substring(1));
		}

		// TODO: traversing, e.g. parents
		var node = root.querySelector(template);

		return node ? node.textContent : null;
	};

	Extract = { parse: parse };
})();