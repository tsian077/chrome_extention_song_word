// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
let getsomething = document.getElementById('getsomething');


chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// changeColor.onclick = function(element) {
//     let color = element.target.value;
    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };

getsomething.onclick = function(element){
    // console.log('hello')
    // var word_element = document.getElementsByClassName('style-scope yt-formatted-string').value;     
    // // console.log(node)
    // var textnode = document.createTextNode("Water");
    // var node = document.createTextNode(word_element);
    
    var hello = document.getElementById('hello'); 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
    function scrapeThePage() {
        // Keep this function isolated - it can only call methods you set up in content scripts
        var description_element = document.getElementById('description').childNodes[0].innerText;
        // description_element = 'hello'
        return description_element;
    }
    const scriptToExec = `(${scrapeThePage})()`;
    
    chrome.tabs.executeScript(tabs[0].id,{code:scriptToExec},function(respond){
      var node = document.createTextNode(respond);
      hello.appendChild(node);
    });

    
      // var url = document.createTextNode(tabs[0].url);
      // console.log(url)
      // hello.appendChild(url);

      // chrome.tabs.executeScript(
      //     tabs[0].id,
      //     {code:'get_text.js'});
    });
   
    // hello.appendChild(textnode);
    // hello.appendChild(node)

    // var description_element = document.getElementById('description');
    // var text = description_element.childNodes[0].innerText
    // var node = document.createTextNode(text);
    // var hello = document.getElementById('hello'); 
    // hello.appendChild(node) 
    
}

