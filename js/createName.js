/**
 * $Date$
 */
var isClick = false;
var cnt = 0;
var className;

/**
 * load the name argument.
 * @param {string} className 
 */
function loadClass(className){
		var script = document.createElement('script');
		script.src = "./js/" + className + ".js";
		document.head.appendChild(script);
}

loadClass("2020_1st_all");

document.addEventListener("DOMContentLoaded", function() {
    // オンクリックリスナー
	// startボタンが押されたら実行される
	// 
	document.getElementById("start").addEventListener("click", function(){
	    console.log("click select");
	    isClick = false;
//	    if(!isClick){
//	        return;
//	    }
        clickflow();
	});

	// オンクリックリスナー
	// stopボタンが押されたら実行される
	document.getElementById("stop").addEventListener("click", function(){
	    console.log("clicked stop");
	    if(isClick) {
	        isClick =false;
	    } else {
	        isClick = true;
	    }
	});

	// // 2020_1st_allボタンが押された処理
	// document.getElementById("2020_1st_all").addEventListener("click", function(){
	// 	loadClass("2020_1st_all");

	// });

	// // 2020_r1caボタンが押された処理
	// document.getElementById("2020_r1ca").addEventListener("click", function(){
	// 	loadClass("2020_r1ca");

	// });
	
	// // 2020_r1cbボタンが押された処理
	// document.getElementById("2020_r1cb").addEventListener("click", function(){
	// 	loadClass("2020_r1cb");
	// });
	
	// // 2020_s1ボタンが押された処理
	// document.getElementById("2020_s1").addEventListener("click", function(){
	// 	loadClass("2020_s1");
	// });
	
	// // 2020_j1ボタンが押された処理
	// document.getElementById("2020_j1").addEventListener("click", function(){
	// 	loadClass("2020_j1");
	// });
	
	// // 2020_s2aボタンが押された処理
	// document.getElementById("2020_s2a").addEventListener("click", function(){
	// 	loadClass("2020_s2a");
	// });
	
	// // 2021春 国家試験対策
	// document.getElementById("2021h_FE13").addEventListener("click", function(){
	// 	loadClass("2021h_FE13");
	// });

	// // 2021春 国家試験対策
	// document.getElementById("2021h_FE14").addEventListener("click", function(){
	// 	loadClass("2021h_FE14");
	// });

	// 2021春 国家試験対策(FE24)
	document.getElementById("2021h_FE24").addEventListener("click", function(){
		loadClass("2021h_FE24");
	});

	// 2021春 国家試験対策
	document.getElementById("2021_R3A").addEventListener("click", function(){
		loadClass("2021_R3A");
	});
	// 2021春 国家試験対策
	document.getElementById("2021_R3B").addEventListener("click", function(){
		loadClass("2021_R3B");
	});
	// 2021春 国家試験対策
	document.getElementById("2021_R3").addEventListener("click", function(){
		loadClass("2021_R3");
	});
});



// グルグルと表示を変更させる関数
let clickflow = () => setTimeout(()=> {
	    if(isClick) {
	        isClick = false;
            return;
        }

        if(cnt < names.length - 1) {
            cnt++;
        } else {
            cnt = 0;
        }
        document.getElementById("ChromePlugin-result-disp").innerHTML = names[cnt];
        
        clickflow();
},1);
