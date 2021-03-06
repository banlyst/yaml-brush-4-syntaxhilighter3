/**
 * Yaml brush for SyntaxHighlighter 3.x
 *
 * https://github.com/banlyst/yaml-brush-4-syntaxhilighter3
 * 
 * It's base on the codes from Nicolas Perriault.
 * 
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * SH 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Banlyst Yeh.
 *
 * @license
 * under the MIT licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Nicolas Perriault
        
        var constants	= '~ true false on off';

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },		// comment
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted string
            { regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted string
            { regex: /^\s*([a-z0-9\._-])+\s*:/gmi,						css: 'variable' },		// key
            { regex: /\s?(\.)([a-z0-9\._-])+\s?:/gmi,					css: 'comments' },		// section
            { regex: /\s(@|:)([a-z0-9\._-])+\s*$/gmi,					css: 'variable bold' },	// variable, reference
            { regex: /\s+\d+\s?$/gm,									css: 'color2 bold' },	// integers
            { regex: /(\{|\}|\[|\]|,|~|:)/gm,							css: 'constants' },		// inline hash and array, comma, null
            { regex: /^\s+(-)+/gm,										css: 'string bold' },	// array list entry
            { regex: /^---/gm,											css: 'string bold' },	// category
            { regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' }		// constants
        ];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['yml', 'yaml'];

	SyntaxHighlighter.brushes.Yaml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
