/**
 * select names randomly
 * $Date$
 * $Author$ : Yuki-Kikuya
 */
// var isClick = false;
// var cnt = 0;
const classNameOfFirst = "template";
const classNamesForLoading = [
	"template",
	"template",
	"template"
	// "2021h_FE24", 	/* 国対2021年度 FE24 */
	// "2021_R3A",		/* 2021年度 大学併修学科A */
	// "2021_R3B",		/* 2021年度 大学併修学科B */
	// "2021_R3"		/* 2021年度 大学併修学科ALL */
];

/**
 * load the name argument.
 * @param {string} className 
 */
function loadClass(className){
		var script = document.createElement('script');
		script.src = "./js/" + className + ".js";
		document.head.appendChild(script);
}

/**
 * load the default of name.  
 */
loadClass(classNameOfFirst);

let clickflow = null;

/**
 * Trigger DOM Content Loaded
 */
document.addEventListener("DOMContentLoaded", () => {
    // OnClickListener
	// id of "stop" button
	document.getElementById("start").addEventListener("click", () => {
	    console.log("click select");
	    isClick = false;
		if(clickflow===null) {
			clickflow = setInterval(()=> {
					let idx = Math.floor(Math.random() * names.length);
					document.getElementById("ChromePlugin-result-disp").innerHTML = names[idx];
			},1);
		}
	});

    // OnClickListener
	// id of "stop" button
	document.getElementById("stop").addEventListener("click", () => {
	    console.log("clicked stop");
		if (clickflow) {
			clearInterval(clickflow);
			clickflow = null;
		}
	});
	// OnClickListener
	// set the Listener of class names of html id
	for(let id of classNamesForLoading) {
			document.getElementById(id).addEventListener("click", ()=>{
				loadClass(id);
			});
	}
});
