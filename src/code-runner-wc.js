// All the supported languages / aliases for language names + versions (used for auto-detecting version to use)
let PistonAPI_Languages = [
	{ language: 'matl', version: '22.5.0', aliases: [] },
	{ language: 'bash', version: '5.2.0', aliases: [ 'sh' ] },
	{ language: 'befunge93', version: '0.2.0', aliases: [ 'b93' ] },
	{ language: 'bqn', version: '1.0.0', aliases: [] },
	{ language: 'brachylog', version: '1.0.0', aliases: [] },
	{ language: 'brainfuck', version: '2.7.3', aliases: [ 'bf' ] },
	{ language: 'cjam', version: '0.6.5', aliases: [] },
	{ language: 'clojure', version: '1.10.3', aliases: [ 'clojure', 'clj' ] },
	{ language: 'cobol', version: '3.1.2', aliases: [ 'cob' ] },
	{ language: 'coffeescript', version: '2.5.1', aliases: [ 'coffeescript', 'coffee' ] },
	{ language: 'cow', version: '1.0.0', aliases: [ 'cow' ] },
	{ language: 'crystal', version: '0.36.1', aliases: [ 'crystal', 'cr' ] },
	{ language: 'dart', version: '2.19.6', aliases: [] },
	{ language: 'dash', version: '0.5.11', aliases: [ 'dash' ] },
	{ language: 'typescript', version: '1.32.3', aliases: [ 'deno', 'deno-ts' ], runtime: 'deno' },
	{ language: 'javascript', version: '1.32.3', aliases: [ 'deno-js' ], runtime: 'deno' },
	{
		language: 'basic.net',
		version: '5.0.201',
		aliases: [
			'basic',
			'visual-basic',
			'visual-basic.net',
			'vb',
			'vb.net',
			'vb-dotnet',
			'dotnet-vb',
			'basic-dotnet',
			'dotnet-basic'
		],
		runtime: 'dotnet'
	},
	{
		language: 'fsharp.net',
		version: '5.0.201',
		aliases: [
			'fsharp',
			'fs',
			'f#',
			'fs.net',
			'f#.net',
			'fsharp-dotnet',
			'fs-dotnet',
			'f#-dotnet',
			'dotnet-fsharp',
			'dotnet-fs',
			'dotnet-fs'
		],
		runtime: 'dotnet'
	},
	{
		language: 'csharp.net',
		version: '5.0.201',
		aliases: [
			'csharp',
			'c#',
			'cs',
			'c#.net',
			'cs.net',
			'c#-dotnet',
			'cs-dotnet',
			'csharp-dotnet',
			'dotnet-c#',
			'dotnet-cs',
			'dotnet-csharp'
		],
		runtime: 'dotnet'
	},
	{
		language: 'fsi',
		version: '5.0.201',
		aliases: [ 'fsx', 'fsharp-interactive', 'f#-interactive', 'dotnet-fsi', 'fsi-dotnet', 'fsi.net' ],
		runtime: 'dotnet'
	},
	{ language: 'dragon', version: '1.9.8', aliases: [] },
	{ language: 'elixir', version: '1.11.3', aliases: [ 'elixir', 'exs' ] },
	{ language: 'emacs', version: '27.1.0', aliases: [ 'emacs', 'el', 'elisp' ] },
	{ language: 'emojicode', version: '1.0.2', aliases: [ 'emojic' ] },
	{ language: 'erlang', version: '23.0.0', aliases: [ 'erlang', 'erl', 'escript' ] },
	{ language: 'file', version: '0.0.1', aliases: [ 'executable', 'elf', 'binary' ] },
	{ language: 'forte', version: '1.0.0', aliases: [ 'forter' ] },
	{ language: 'forth', version: '0.7.3', aliases: [ 'gforth' ] },
	{ language: 'freebasic', version: '1.9.0', aliases: [ 'bas', 'fbc', 'basic', 'qbasic', 'quickbasic' ] },
	{ language: 'awk', version: '5.1.0', aliases: [ 'gawk' ], runtime: 'gawk' },
	{ language: 'c', version: '10.2.0', aliases: [ 'gcc' ], runtime: 'gcc' },
	{ language: 'c++', version: '10.2.0', aliases: [ 'cpp', 'g++' ], runtime: 'gcc' },
	{ language: 'd', version: '10.2.0', aliases: [ 'gdc' ], runtime: 'gcc' },
	{ language: 'fortran', version: '10.2.0', aliases: [ 'fortran', 'f90' ], runtime: 'gcc' },
	{ language: 'go', version: '1.16.2', aliases: [ 'go', 'golang' ] },
	{ language: 'golfscript', version: '1.0.0', aliases: [ 'golfscript' ] },
	{ language: 'groovy', version: '3.0.7', aliases: [ 'groovy', 'gvy' ] },
	{ language: 'haskell', version: '9.0.1', aliases: [ 'haskell', 'hs' ] },
	{ language: 'husk', version: '1.0.0', aliases: [] },
	{ language: 'iverilog', version: '11.0.0', aliases: [ 'verilog', 'vvp' ] },
	{ language: 'japt', version: '2.0.0', aliases: [ 'japt' ] },
	{ language: 'java', version: '15.0.2', aliases: [] },
	{ language: 'jelly', version: '0.1.31', aliases: [] },
	{ language: 'julia', version: '1.8.5', aliases: [ 'jl' ] },
	{ language: 'kotlin', version: '1.8.20', aliases: [ 'kt' ] },
	{ language: 'lisp', version: '2.1.2', aliases: [ 'lisp', 'cl', 'sbcl', 'commonlisp' ] },
	{ language: 'llvm_ir', version: '12.0.1', aliases: [ 'llvm', 'llvm-ir', 'll' ] },
	{ language: 'lolcode', version: '0.11.2', aliases: [ 'lol', 'lci' ] },
	{ language: 'lua', version: '5.4.4', aliases: [] },
	{
		language: 'csharp',
		version: '6.12.0',
		aliases: [ 'mono', 'mono-csharp', 'mono-c#', 'mono-cs', 'c#', 'cs' ],
		runtime: 'mono'
	},
	{
		language: 'basic',
		version: '6.12.0',
		aliases: [ 'vb', 'mono-vb', 'mono-basic', 'visual-basic', 'visual basic' ],
		runtime: 'mono'
	},
	{ language: 'nasm', version: '2.15.5', aliases: [ 'asm', 'nasm32' ], runtime: 'nasm' },
	{ language: 'nasm64', version: '2.15.5', aliases: [ 'asm64' ], runtime: 'nasm' },
	{ language: 'nim', version: '1.6.2', aliases: [] },
	{
		language: 'javascript',
		version: '18.15.0',
		aliases: [ 'node-javascript', 'node-js', 'node.js', 'javascript', 'js' ],
		runtime: 'node'
	},
	{ language: 'ocaml', version: '4.12.0', aliases: [ 'ocaml', 'ml' ] },
	{ language: 'octave', version: '8.1.0', aliases: [ 'matlab', 'm' ] },
	{ language: 'osabie', version: '1.0.1', aliases: [ 'osabie', '05AB1E', 'usable' ] },
	{ language: 'paradoc', version: '0.6.0', aliases: [ 'paradoc' ] },
	{ language: 'pascal', version: '3.2.2', aliases: [ 'freepascal', 'pp', 'pas' ] },
	{ language: 'perl', version: '5.36.0', aliases: [ 'pl' ] },
	{ language: 'php', version: '8.2.3', aliases: [] },
	{ language: 'ponylang', version: '0.39.0', aliases: [ 'pony', 'ponyc' ] },
	{ language: 'prolog', version: '8.2.4', aliases: [ 'prolog', 'plg' ] },
	{ language: 'pure', version: '0.68.0', aliases: [] },
	{ language: 'powershell', version: '7.1.4', aliases: [ 'ps', 'pwsh', 'ps1' ], runtime: 'pwsh' },
	{ language: 'pyth', version: '1.0.0', aliases: [ 'pyth' ] },
	{ language: 'python2', version: '2.7.18', aliases: [ 'py2', 'python2' ] },
	{ language: 'python', version: '3.10.0', aliases: [ 'py', 'py3', 'python3', 'python3.10' ] },
	{ language: 'racket', version: '8.3.0', aliases: [ 'rkt' ] },
	{ language: 'raku', version: '6.100.0', aliases: [ 'raku', 'rakudo', 'perl6', 'p6', 'pl6' ] },
	{ language: 'retina', version: '1.2.0', aliases: [ 'ret' ] },
	{ language: 'rockstar', version: '1.0.0', aliases: [ 'rock', 'rocky' ] },
	{ language: 'rscript', version: '4.1.1', aliases: [ 'r' ] },
	{ language: 'ruby', version: '3.0.1', aliases: [ 'ruby3', 'rb' ] },
	{ language: 'rust', version: '1.68.2', aliases: [ 'rs' ] },
	{ language: 'samarium', version: '0.3.1', aliases: [ 'sm' ] },
	{ language: 'scala', version: '3.2.2', aliases: [ 'sc' ] },
	{ language: 'smalltalk', version: '3.2.3', aliases: [ 'st' ] },
	{ language: 'sqlite3', version: '3.36.0', aliases: [ 'sqlite', 'sql' ] },
	{ language: 'swift', version: '5.3.3', aliases: [ 'swift' ] },
	{ language: 'typescript', version: '5.0.3', aliases: [ 'ts', 'node-ts', 'tsc', 'typescript5', 'ts5' ] },
	{ language: 'vlang', version: '0.3.3', aliases: [ 'v' ] },
	{ language: 'vyxal', version: '2.4.1', aliases: [] },
	{ language: 'yeethon', version: '3.10.0', aliases: [ 'yeethon3' ] },
	{ language: 'zig', version: '0.9.1', aliases: [ 'zig' ] }
];

class CodeRunner extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// will be used to set language type to use and names of languages
		const language = this.getAttribute('language');

		const styling = `<style>
    
    /*compress*/
    .code-knack-playground {
	 position: relative;
	 background-color: #edebeb;
	 background-color: var(--bg, #edebeb);
	 border-radius: 10px;
	 border: 1px solid var(--border, rgb(201, 201, 201));
}
 .code-knack-playground.line-number .CodeMirror {
	 padding-left: 0px;
}
 .code-knack-playground img {
	 max-width: 90% !important;
	 display: inline-block !important;
	 border-radius: 0 !important;
	 box-shadow: none !important;
}
 .code-knack-playground .code-knack-pane {
	 height: 40px;
	 display: flex;
	 border-radius: 3px;
}
 .code-knack-playground .code-knack-pane .code-knack-title {
	 flex: 1;
	 padding-left: 20px;
	 color: var(--title, #fff);
	 display: flex;
	 font-size: 14px;
	 font-family: 'Metropolis-Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
	 align-items: center;
	 opacity: 0.5;
	 text-transform: uppercase;
}
 .code-knack-playground .code-knack-pane .code-knack-ctrl {
	 flex: 1;
	 display: flex;
	 justify-content: flex-end;
}
 .code-knack-playground .code-knack-pane button.ck-button {
	 height: 40px;
	 padding: 0 16px;
	 font-size: 14px;
	 background: transparent;
	 border: none;
	 border-radius: 0;
	 color: var(--button-text, black);
	 opacity: 0.8;
	 outline: none;
	 display: flex;
	 align-items: center;
	 box-shadow: -1px 0 0 0 var(--button-border, rgba(0, 0, 0, 0.5));
}
 .code-knack-playground .code-knack-pane button.ck-button img {
	 height: 14px;
	 margin-right: 3px;
}
 .code-knack-playground .code-knack-pane button.ck-button:hover {
	 opacity: 1;
}
 .code-knack-playground .code-knack-pane button.ck-button:active {
	 opacity: 0.6;
}
 .code-knack-playground pre {
	 background: transparent;
	 color: var(--code, white);
	 border-bottom-left-radius: 3px;
	 border-bottom-right-radius: 3px;
}
 .code-knack-playground .CodeMirror {
	 padding-left: 16px;
}
 .code-knack-playground .CodeMirror, .code-knack-playground .code-knack-text {
	 font-size: 14px;
	 line-height: 18px;
	 height: auto;
}
 .code-knack-playground .CodeMirror pre, .code-knack-playground .code-knack-text pre {
	 padding: 0 4px;
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
}
 .code-knack-playground .code-knack-text {
	 color: var(--code, white);
	 border: none;
	 width: 100%;
	 height: 100%;
	 border-radius: 0px 0px 10px 10px;
	 background: var(--code-bg, white);
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
}
 .code-knack-playground .input-output-box {
  display: flex !important;
 }
 .code-knack-playground .code-knack-input  {
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
   width: 50%;
	 border-top: 1px solid var(--border, rgba(0, 0, 0, 0.1));
	 border-right: 1px solid var(--border, rgba(0, 0, 0, 0.1));
	 color: var(--text, white);
}
 .code-knack-playground .code-knack-input .code-knack-input-content {
	 background: var(--code-bg, white));
	 color: var(--text, white);
	 white-space: pre-line;
	 padding: 8px 12px 8px 20px;
	 font-size: 14px;
	 overflow: auto;
	 white-space: pre-wrap;
   resize:none;
   min-width:100%;
   overflow-y: auto;
   outline: none !important;
   border: none;
}
 .code-knack-playground .code-knack-output {
	 background: var(--bg, #edebeb);
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
	 border-top: 1px solid var(--border, rgb(201, 201, 201));
   width: 50%;
}
 .code-knack-playground .code-knack-output .code-knack-output-title, 
 .code-knack-playground .code-knack-input .code-knack-input-title {
	 color: var(--text, white);
	 opacity: 0.6;
	 font-size: 14px;
	 margin: 0 10px 0 20px;
	 padding: 4px 0;
	 font-family: "Metropolis-Medium" -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
	 border-bottom-width: 1px;
	 border-bottom-style: solid;
	 border-bottom-color: rgb(201, 201, 201);
}
 .code-knack-playground .code-knack-output .code-knack-output-content {
	 color: var(--text, white);
	 white-space: pre-line;
	 padding: 8px 12px 8px 20px;
	 font-size: 14px;
	 overflow: auto;
	 white-space: pre-wrap;
   border: none;
}
 .code-knack-playground .code-knack-output.html-output .code-knack-output-content {
	 max-width: 100% !important;
	 background: rgba(252, 253, 255, 1);
	 margin: 0 10px;
	 color: #000;
	 border-radius: 3px;
	 border: 1px solid var(--border, rgb(201, 201, 201));
}
 .code-knack-playground .code-knack-output.html-output .code-knack-output-content .katex .base {
	 margin: 10px 0;
}
 .code-knack-playground .code-knack-footer {
	 background-color: #edebeb;
	 background-color: var(--bg, #edebeb);
	 height: 10px;
	 border-bottom-left-radius: 10px;
	 border-bottom-right-radius: 10px;
}
 .code-knack-playground .code-knack-mask {
	 display: none;
	 position: absolute;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 color: white;
	 z-index: 10;
	 align-items: center;
	 justify-content: center;
	 background: rgba(0, 0, 0, 0.4);
}
/* make the code runner highlight less bright */
.code-knack-text .ace_marker-layer .ace_step {
  background: #FFFFCC !important;
}
/*endcompress*/
 </style>
 `;

		if (!language) {
			return (this.innerHTML = `${styling}   <!--compress-->  <div>
  
<pre style="padding: 0px; --bg:#edebeb; --text:black; --border:rgb(201, 201, 201); --code:black; --code-bg:white; --title:rgb(255, 255, 255); --button-text:black; --button-border:rgba(0,0,0,0.18);"><div class="code-knack-playground "><div class="code-knack-pane"><div class="code-knack-title">Error!</div>
  
</div><div id="codetorun" class="code-knack-text" style="/* display: none; */">Error: Language Attribute Is Missing For Web Component ...
        </div>
        
      </div>
      </div>
      <!--endcompress-->
      `);
		}

		// disable spellcheck
		this.spellcheck = false;

		this.innerHTML = ` ${styling}
    
    <!--compress-->
    
    <div code-runner-component language=${language}>
  
<pre style="padding: 0px; --bg:#edebeb; --text:black; --border:rgb(201, 201, 201); --code:black; --code-bg:white; --title:black; --button-text:black; --button-border:grey;"><div class="code-knack-playground " data-lang="cpp" data-options=""><div class="code-knack-pane"><div class="code-knack-title">${language}</div>
  <div class="code-knack-mask">Copied to the clipboard.</div>
<div class="code-knack-ctrl">
<button class="ck-button run-button" code-runner-button><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-play-dark.svg"><span >run</span></button>
<button class="ck-button copy-button" code-runner-copy-button><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-copy-dark.svg"><span>copy</span></button></div>
  
</div><div id="codetorun" class="code-knack-text" contenteditable style="/* display: none; */">${this.innerHTML
			.trim()
			.replaceAll('–', '--')
			.replaceAll('’', "'")
			.replaceAll('‘', "'")
			.replaceAll('”', '"')
			.replaceAll('“', '"')}</div>
<div class="input-output-box">
<div id="input_section" class="code-knack-input"><div class="code-knack-input-title">Input</div><textarea class="code-knack-input-content" name="input-text" rows="10" cols="30" >${this.hasAttribute(
			'input'
		)
			? this.getAttribute('input')
			: ''}</textarea></div>
<div id="output_section" class="code-knack-output text-output"><div class="code-knack-output-title">Output</div><pre class="code-knack-output-content" id="result"></pre></div></div></pre>
      </div>
      </div>
      </div>
      
      <!--endcompress-->
    `;

		// set up the expected output
		if (this.hasAttribute('output')) {
			this.querySelector('.code-knack-output-title').innerHTML = 'Output (example input)';
			this.querySelector('#result').innerHTML = this.getAttribute('output');
			this.querySelector('.code-knack-output-content').style.opacity = 0.5;
		}

		// if WC is using Piston API
		if (!this.hasAttribute('custom-compiler')) {
			// show error if language is not found in Piston API
			if (GetVersionForPistonAPI(this.getAttribute('language').toLowerCase(), 'GETNAME') == undefined) {
				// this needs cleaned with a proper error function... @ Dominick?
				return (this.innerHTML = `${styling}   <!--compress-->  <div>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:black; --border:rgb(201, 201, 201); --code:black; --code-bg:white; --title:black; --button-text:black; --button-border:rgba(0,0,0,0.18);"><div class="code-knack-playground "><div class="code-knack-pane"><div class="code-knack-title">Error!</div>
  
</div><div id="codetorun" class="code-knack-text" style="/* display: none; */">Error: ${this.getAttribute(
					'language'
				)} is not detected or supported by the Code-Runner web-component. 
See the repo if there is any plugins that support "${this.getAttribute(
					'language'
				)}"  @ https://github.com/MarketingPipeline/Code-Runner-Web-Component
        </div>    
      </div>
      </div>
      <!--endcompress-->
      `);
			} else {
				// language was found!

				/// Render Ace Editor!
				async function AceEditorForPistonAPI(element) {
					// Wait till AceEditor is loaded - so no errors occur.
					let isAceLoaded = await loadAceEditor();

					if (isAceLoaded.loaded === 'true') {
						CreateAceCodeEditor(
							element,
							GetVersionForPistonAPI(element.getAttribute('language').toLowerCase(), 'GETNAME')
						); //
					}
				}
				AceEditorForPistonAPI(this);
			}
		}

		// handle Run Button clicks -
		this.querySelector('[ code-runner-button]').addEventListener('click', (e) => handleclick(this));

		// Handle Copy Button Clicks
		this.querySelector('[code-runner-copy-button]').addEventListener('click', (e) => handleCopyBtnClick(this));

		function handleCopyBtnClick(html_element) {
			navigator.clipboard.writeText(html_element.querySelector('#codetorun').innerText);
			/// Set Copied To Clipboard Visible
			html_element.querySelector('.code-knack-mask').style.display = 'flex';
			// then hide it after X seconds..
			setTimeout(() => {
				html_element.querySelector('.code-knack-mask').style.display = 'none';
			}, '3000');
		}
	}
}

// Function To Call API to run code inside the web-component
let ansiUpped = {
	loaded: false,
	ansiUp: null
};

// gets data from API and sets the content of #result div
async function getData(html_element) {
	// display the output / results block
	const result_section = html_element.querySelector('#output_section');
	result_section.style.display = 'block';

	// make sure user is connected to internet  -
	if (navigator.onLine) {
		try {
			// loading ANSI_UP via import
			if (ansiUpped.loaded != true) {
				ansiUpped.ansiUp = await import('https://cdn.skypack.dev/ansi_up@5.1.0');
				ansiUpped.ansiUp = ansiUpped.ansiUp.default;
				ansiUpped.ansiUp = new ansiUpped.ansiUp();
				ansiUpped.loaded = true;
			}

			const before = Date.now();
			const res = await fetch('https://emkc.org/api/v2/piston/execute', {
				method: 'POST',
				body: JSON.stringify({
					language: html_element.getAttribute('language').toLowerCase(),
					version: GetVersionForPistonAPI(html_element.getAttribute('language').toLowerCase()),
					files: [
						{
							content: html_element.querySelector('.ace_content').innerText
						}
					],
					stdin: html_element.querySelector('.code-knack-input-content').value
				})
			});
			const jsonResult = await res.json();
			const after = Date.now();
			html_element.querySelector('.code-knack-output-title').innerText = `Output (ran in ${after - before} ms)`;
			html_element.querySelector('.code-knack-output-content').style.opacity = 1;
			// if has compile output - code error
			if (jsonResult.compile.output) {
				html_element.querySelector('#result').innerText = `Error: ${jsonResult.compile.output.replace(
					/(chmod: cannot access \'a\.out\': No such file or directory$)/gm,
					''
				)}`;
				html_element
					.querySelector('.code-knack-output')
					.style.setProperty(
						'--bg',
						typeof CodeRunner_LightOrDarkMode == 'undefined' || CodeRunner_LightOrDarkMode == 'light'
							? '#eb9898'
							: '#753131'
					); // highlight the background as pink on error
			} else if (jsonResult.run.signal) {
				// if has SIGKILL, process ran for too long
				html_element.querySelector('#result').innerText = `Error: process killed with signal ${jsonResult.run
					.signal}\n\n (Tip: do you have an infinite loop?)`;
				html_element
					.querySelector('.code-knack-output')
					.style.setProperty(
						'--bg',
						typeof CodeRunner_LightOrDarkMode == 'undefined' || CodeRunner_LightOrDarkMode == 'light'
							? '#eb9898'
							: '#753131'
					); // highlight the background as pink on error
			} else if (jsonResult.run.output.includes('Segmentation fault')) {
				// if SEGMENTATION_FAULT
				html_element.querySelector('#result').innerText = `Error: ${jsonResult.run
					.output}\n\n(Tip: check for stray pointers, dereferencing null, double free...)`;
				html_element
					.querySelector('.code-knack-output')
					.style.setProperty(
						'--bg',
						typeof CodeRunner_LightOrDarkMode == 'undefined' || CodeRunner_LightOrDarkMode == 'light'
							? '#eb9898'
							: '#753131'
					); // highlight the background as pink on error
			} else {
        // all good
        const regex=/(Enter.*):/gi;
				html_element.querySelector('#result').innerHTML = ansiUpped.ansiUp.ansi_to_html(jsonResult.run.output).replaceAll(regex,"$1: \n"); // manually introduce newline after input prompts 
				html_element
					.querySelector('.code-knack-output')
					.style.setProperty(
						'--bg',
						typeof CodeRunner_LightOrDarkMode == 'undefined' || CodeRunner_LightOrDarkMode == 'light'
							? '#edebeb'
							: '#3a3636'
					);
			}
		} catch (error) {
			// there was a network error or API is down etc...
			html_element.querySelector('#result').innerText = error.message;
		}
	} else {
		// user is not connected to internet to fetch API...
		html_element.querySelector('#result').innerText = 'Error: You must be connected to the internet to use this!';
	}
}



// gets data from API and sets the content of #result div
async function runTestCases(html_element, inputTestcase, messageElement, codeToRun = null) {


	const oldProgressContainer = messageElement.querySelector('.progress-container');
	if (oldProgressContainer) oldProgressContainer.remove();

	messageElement.innerHTML = "";

	progressText = document.createElement('div');
	progressText.style.color = "grey";
	progressText.style.fontWeight = "bold";
	messageElement.appendChild(progressText);

	const progressContainer = document.createElement("div");
	progressContainer.classList.add("progress-container");
	progressContainer.style.width = "100%";
	progressContainer.style.backgroundColor = "grey";

	const progressBar = document.createElement("div");
	progressBar.style.height = "20px";
	progressBar.style.backgroundColor = "green";

	progressBar.style.transition = "none";
	progressBar.style.width = "0%";

	progressContainer.appendChild(progressBar);
	messageElement.appendChild(progressContainer);

	// force reflow so browser registers width=0 without transition
	progressBar.offsetWidth;  // reading offsetWidth forces style recalculation

	progressBar.style.transition = "width 1s ease";
	
	let allOutputs = [];
	const pause = 1000;
		
	// make sure user is connected to internet  -
	if (!navigator.onLine) {
		html_element.querySelector('#result').innerText = "Not connected to internet";
		return allOutputs;
	}

	try {
		if (ansiUpped.loaded != true) {
			ansiUpped.ansiUp = await import('https://cdn.skypack.dev/ansi_up@5.1.0');
			ansiUpped.ansiUp = ansiUpped.ansiUp.default;
			ansiUpped.ansiUp = new ansiUpped.ansiUp();
			ansiUpped.loaded = true;
		}

		for (let i = 0; i < inputTestcase.length; i++) {

			progressText.innerText = `Running testcase ${i + 1} of ${inputTestcase.length}...`;
			progressText.style.color = "grey";
			progressText.style.fontWeight = "bold";

			const percent = ((i + 1) / inputTestcase.length) * 100;
			progressBar.style.width = percent + "%";

			const res = await fetch('https://emkc.org/api/v2/piston/execute', {
				method: 'POST',
				body: JSON.stringify({
					language: html_element.getAttribute('language').toLowerCase(),
					version: GetVersionForPistonAPI(html_element.getAttribute('language').toLowerCase()),
					files: [
						{
							content: codeToRun || html_element.querySelector('.ace_content').innerText
						}
					],
					stdin: inputTestcase[i]
				})
			});
			const jsonResult = await res.json();

			let output;

			if (jsonResult.compile.output) {
				output = `Error: ${jsonResult.compile.output.replace(/(chmod: cannot access \'a\.out\': No such file or directory$)/gm, '')}`;
			} else if (jsonResult.run.signal) {
				output = `Error: process killed with signal ${jsonResult.run.signal}\n\n (Tip: do you have an infinite loop?)`;
			} else if (jsonResult.run.output.includes('Segmentation fault')) {
				output = `Error: ${jsonResult.run.output}\n\n(Tip: check for stray pointers, dereferencing null, double free...)`;
			} else {
				const regex = /(Enter.*):/gi;
				output = ansiUpped.ansiUp.ansi_to_html(jsonResult.run.output).replaceAll(regex, "$1:\n");
			}

			allOutputs.push(output);
			
			// X second(s) pause			
			await new Promise(resolve => setTimeout(resolve, pause));

		}
	} catch (error) {
		let errrorMessage = "Please try again";
		allOutputs.push(errrorMessage);
	}

	return allOutputs;
}

/// Provides the version to use for Piston API automatically!
function GetVersionForPistonAPI(string, getName) {
	data = PistonAPI_Languages;
	for (const key in data) {
		if (!string == data[key].language) {
			console.log(`Error: Code-Runner could not auto-detect version to use for ${string}`);
			return 'undefined';
		}

		if (string == data[key].language) {
			// console.log(`found ${data[key].version} for ${string}` )
			if (getName) {
				return data[key].language;
			} else {
				return data[key].version;
			}
		} else {
			for (const aliasName in data[key].aliases) {
				if (string == data[key].aliases[aliasName]) {
					// console.log(`found ${data[key].version} for ${string}` )
					if (getName) {
						return data[key].language;
					} else {
						return data[key].version;
					}
				}
				// Need to fix this and throw error
				//  else{
				// console.log(`Error: Code-Runner could not auto-detect version to use for ${string}`)
				// return "undefined"
				// }
			}
		}
	}
}

function handleclick(codeRunner) {
	// set output to "loading"
	codeRunner.querySelector('.code-knack-output-title').innerText = 'Output';
	codeRunner.querySelector('#result').innerText = 'Loading...';

	// allow plugins / extensions to be wrote for this.
	if (!codeRunner.hasAttribute('custom-compiler')) {
		getData(codeRunner);
	}
	// set input to read-only
	const input = codeRunner.querySelector('.code-knack-input-content');
	input.setAttribute('readonly', '');
	input.style.background = 'background-color: var(--bg, #edebeb)';
}

// function to load Ace Editor to page

let loadedFiles = false;
let create = (info) => {
	return new Promise(function(resolve, reject) {
		let gfgData = document.createElement('script');
		gfgData.src = info;
		gfgData.async = false;
		gfgData.onload = () => {
			resolve(info);
		};
		gfgData.onerror = () => {
			reject(info);
		};
		document.body.appendChild(gfgData);
	});
};
let gfgScript = [
	'https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/ace.min.js',
	'https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/ext-modelist.js',
	'https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/ext-themelist.js'
];
let promiseData = [];

let isAceLoadedAlready = false;
async function loadAceEditor() {
	// any variable will disable all ace editors on page
	// example - let CodeRunner_DisableAceEditor= "true";
	if (typeof CodeRunner_DisableAceEditor == 'undefined') {
		if (isAceLoadedAlready === false) {
			gfgScript.forEach(function(info) {
				promiseData.push(create(info));
			});
			const data = await Promise.all(promiseData)
				.then(async function() {
					return {
						loaded: 'true'
					};
				})
				.catch(function(gfgData) {
					isAceLoadedAlready = true;
					return {
						loaded: 'false'
					};
					console.log(gfgData + ' failed to load!');
				});

			return data;
		}
	}
}

/// function to create Ace Editors for CodeRunner-WC

let editor;

function CreateAceCodeEditor(html_element, language) {
	// url to load Ace Editor + resources
	ace.config.set('basePath', 'https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/');

	let text_value = html_element.querySelector('#codetorun').textContent;
	// Editor Settings (Provided by C9)
	editor = ace.edit(html_element.querySelector('#codetorun'));

	editor.$blockScrolling = Infinity;

	// allow the Ace Editor theme to be changed.
	const DEFAULT_THEME_LIGHT = 'ace/theme/tomorrow';
	const DEFAULT_THEME_DARK = 'ace/theme/monokai';
	if (typeof CodeRunner_AceEditor_Theme == 'undefined') {
		if (typeof CodeRunner_LightOrDarkMode == 'undefined' || CodeRunner_LightOrDarkMode == 'light') {
			editor.setTheme(DEFAULT_THEME_LIGHT);
		} else {
			editor.setTheme(DEFAULT_THEME_DARK);
		}
	} else {
		let themelist = ace.require('ace/ext/themelist');

		let themes = themelist.themesByName; //object hash of theme objects by name

		// check if theme name is valid.
		if (themes[CodeRunner_AceEditor_Theme.toLowerCase()] != undefined) {
			editor.setTheme(`ace/theme/${CodeRunner_AceEditor_Theme.toLowerCase()}`);
		} else {
			//
			/// Theme choice was not valid
			console.log(`Code Runner Error: ${CodeRunner_AceEditor_Theme} is not a valid theme - setting to default.`);

			if (typeof CodeRunner_LightOrDarkMode == 'undefined' || CodeRunner_LightOrDarkMode == 'light') {
				editor.setTheme(DEFAULT_THEME_LIGHT);
			} else {
				editor.setTheme(DEFAULT_THEME_DARK);
			}
		}
	}

	// TODO: make a button or something for switching b/w modes
	setLightModeDarkMode(html_element, CodeRunner_LightOrDarkMode);

	if (language) {
		SetAceEditor_Mode();
	}

	function SetAceEditor_Mode() {
		// For our purposes, only C is good enough
		editor.getSession().setMode(`ace/mode/c_cpp`);
		// let modelist = ace.require('ace/ext/modelist');
		// if (modelist.modesByName[language] != undefined) {

		//     editor.getSession().setMode(`ace/mode/${language}`)
		// } else {
		//     // language was not found
		//     console.log(`Code Runner Error: Ace Editor Language Mode Could Not Be Found For ${language.charAt(0).toUpperCase() + language.slice(1)}`)
		// } ////
	}
	editor.setShowPrintMargin(false);
	//editor.session.setMode(`ace/mode/${GetVersionForPistonAPI(html_element.getAttribute("language").toLowerCase(), "GETNAME")}`);

  // indent style
	var session = editor.getSession();
  session.setTabSize(2);
  session.setUseWrapMode(true);
	editor.setValue(text_value);

	editor.clearSelection();
	/// This will set editor to content length

	/// This will set editor to auto-expand
	//editor.setOptions({
	//  maxLines: Infinity
	// });
	editor.setOptions({
		maxLines: Infinity
	});

	// highlight lines
	if (html_element.hasAttribute('highlight-lines')) {
		const highlight_lines = html_element.getAttribute('highlight-lines').split(' ');
		highlight_lines.forEach((l) => session.highlightLines(l - 1, l - 1));
	}

}

async function CreateAceEditorForPlugin(element, language) {
	// make sure the editor is only set for non-terminal.
	if (
		!element.getAttribute('custom-compiler').includes('shell') ||
		!element.getAttribute('custom-compiler').includes('terminal')
	) {
		// load ace editor for custom compiler plugin
		// Wait till AceEditor is loaded - so no errors occur.

		let isAceLoaded = await loadAceEditor();
		if (isAceLoaded.loaded === 'true') {
			CreateAceCodeEditor(element, language); //
		}
	}
}

function setLightModeDarkMode(element, mode) {
	var r = element.querySelector('.code-knack-playground');
	if (mode == 'light') {
		r.style.setProperty('--code', 'black');
		r.style.setProperty('--code-bg', 'white');
		r.style.setProperty('--border', 'rgb(201, 201, 201)');
		r.style.setProperty('--text', 'black');
		r.style.setProperty('--title', 'black');
		r.style.setProperty('--button-text', 'black');
		r.style.setProperty('--button-border', 'rgba(0,0,0,0.18)');
		r.style.setProperty('--bg', '#edebeb');
	}
	if (mode == 'dark') {
		r.style.setProperty('--code', 'white');
		r.style.setProperty('--code-bg', 'rgba(39, 40, 35, 1)');
		r.style.setProperty('--border', 'rgba(0, 0, 0, 0.3)');
		r.style.setProperty('--text', 'white');
		r.style.setProperty('--title', 'white');
		r.style.setProperty('--button-text', 'wheat');
		r.style.setProperty('--button-border', 'rgba(0,0,0,0.18)');
		r.style.setProperty('--bg', '#3a3636');
	}
}

window.customElements.define('code-runner', CodeRunner);
