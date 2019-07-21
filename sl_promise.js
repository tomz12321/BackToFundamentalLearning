const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* Asyc is successful */){
    resolve(value);
  } else {
    reject(error);
  }
});

//Promise構造函數接受一個函數作為參數，該函數的兩個參數分別是resolve和reject。它們是兩個函數，由 JavaScript 引擎提供，不用自己部署。

//resolve函數的作用是，將Promise對象的狀態從“未完成”變為“成功”（即從 pending 變為 resolved），在異步操作成功時調用，並將異步操作的結果，作為參數傳遞出去；reject函數的作用是，將Promise對象的狀態從“未完成”變為“失敗”（即從 pending 變為 rejected），在異步操作失敗時調用，並將異步操作報出的錯誤，作為參數傳遞出去。

//Promise實例生成以後，可以用then方法分別指定resolved狀態和rejected狀態的回調函數。

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});

// A sample code to run loading images

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}

// A sample code to run AJAX application

onst getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
}); 