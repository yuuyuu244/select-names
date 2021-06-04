# Select names rondomly

## Usage
1. create the json of yours in `./json/[any name].json`  
   e.g.
```
{
    "className": "it will display on popup",
    "names": [
        "A",
        "B",
        "C"
    ]
}
```
   default json file name is `template.json`. so you should modify this.  
   
2. change items of `fileNamesForLoading` array in `./js/createName.js`  
   e.g.
```
const fileNamesForLoading = [
   '[your original 1]',
   '[your original 2]',
   '[your original 3]',
];
```
3. access `chrome://extensions` on Google Chrome  
   you should switch ON of 'developer mode'
4. drag this project file from root(ALL files) and drop into `chrome://extensions` page

## author and contributors

* Yuki-Kikuya
* Mr.fj
* Mr.tm
* and so on.

## Acknowledgements

I would like to thank Mr. fj for greatful idea specially.
