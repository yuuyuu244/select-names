/**
 * select names randomly
 * $Date$
 * $Author$ : Yuki-Kikuya
 */
// var isClick = false;
// var cnt = 0;
const classNameOfFirst = 'template';
const classNamesForLoading = [
	'template1',
	'template2',
	// '2021h_FE24', 	/* 国対2021年度 FE24 */
	// '2021_R3A',		/* 2021年度 大学併修学科A */
	// '2021_R3B',		/* 2021年度 大学併修学科B */
	// '2021_R3'		/* 2021年度 大学併修学科ALL */
];
// name
let tempNameList = {};
let clickflow = null;

/**
 * load the name argument.
 * @param {string} className 
 */
function loadClass(className) {
	var script = document.createElement('script');
	script.src = './js/' + className + '.js';
	document.head.appendChild(script);
}

async function getJSON(filepath) {
	const response = await fetch(chrome.runtime.getURL(filepath));
	const json = await response.json();
	return json;
}

/**
 * Trigger DOM Content Loaded
 */
document.addEventListener('DOMContentLoaded', () => {
	// OnClickListener
	// id of 'stop' button
	document.getElementById('start').addEventListener('click', () => {
		console.log('click select');

		let nameList = [];
		for (let key in tempNameList) {
			nameList = nameList.concat(tempNameList[key]);
		}

		if (clickflow === null) {
			clickflow = setInterval(() => {
				let idx = Math.floor(Math.random() * nameList.length);
				document.getElementById('ChromePlugin-result-disp').innerHTML = nameList[idx];
			}, 1);
		}
	});

	// OnClickListener
	// id of 'stop' button
	document.getElementById('stop').addEventListener('click', () => {
		console.log('clicked stop');
		if (clickflow) {
			clearInterval(clickflow);
			clickflow = null;
		}
	});
	// OnClickListener
	// set the Listener of class names of html id
	// for (let id of classNamesForLoading) {
	// 	document.getElementById(id).addEventListener('click', () => {
	// 		loadClass(id);
	// 	});
	// }

	for (let id of classNamesForLoading) {
		let checkbox = document.getElementById(id);
		checkbox.addEventListener('click', async () => {
			if (checkbox.checked) {
				console.log('--checked--');
				const json = await getJSON('json/' + id + '.json');
				tempNameList[id] = json.names;
			} else {
				console.log('--unchecked--');
				delete tempNameList[id];
			}
			console.log(tempNameList);
		});
	}
});
