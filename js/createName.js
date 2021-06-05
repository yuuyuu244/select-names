/**
 * select names randomly
 * $Date$
 * $Author$ : Yuki-Kikuya
 */

const fileNamesForLoading = [
    'template',
    'template2',
];

let checkboxes = [];
let fileDictionary = {};
let clickflow = null;

document.addEventListener('DOMContentLoaded', () => {
    init();

    document.getElementById('check-all').addEventListener('click', () => {
        for (let checkbox of checkboxes) {
            checkbox.checked = true;
        }
    });

    document.getElementById('uncheck-all').addEventListener('click', () => {
        for (let checkbox of checkboxes) {
            checkbox.checked = false;
        }
    });

    document.getElementById('start').addEventListener('click', () => {
        console.log('start clicked');
        let nameList = [];
        for (checkbox of checkboxes) {
            if (checkbox.checked) {
                const id = checkbox.id;
                nameList = nameList.concat(fileDictionary[id]);
            }
        }
        console.log(nameList);

        if (clickflow === null && nameList.length) {
            console.log('start roulette');
            clickflow = setInterval(() => {
                const idx = Math.floor(Math.random() * nameList.length);
                document.getElementById('ChromePlugin-result-disp').innerHTML = nameList[idx];
            }, 10);
        } else {
            console.log('not start roulette');
        }
    });

    document.getElementById('stop').addEventListener('click', () => {
        console.log('stop clicked');
        if (clickflow) {
            clearInterval(clickflow);
            clickflow = null;
            console.log('stop roulette');
        }
    });
});

/**
 * Initialize fileDictionary and create html elements
 */
async function init() {
    for (const fileName of fileNamesForLoading) {
        const json = await getJSON('json/' + fileName + '.json');
        fileDictionary[fileName] = json.names;
        createCheckbox(fileName, json.className);
    }
}

/**
 * get JSON file
 * @param {string} filePath 
 * @returns {Object} parsed JSON
 */
async function getJSON(filePath) {
    const response = await fetch(chrome.runtime.getURL(filePath));
    const json = await response.json();
    return json;
}

function createCheckbox(id, innerText) {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const textNode = document.createTextNode(innerText);

    checkbox.type = 'checkbox';
    checkbox.id = id;

    // label.htmlFor = id;

    label.appendChild(checkbox);
    label.appendChild(textNode);

    checkboxes.push(checkbox);

    const div = document.getElementById('checkbox-area');
    // div.appendChild(checkbox);
    div.appendChild(label);
}
