//JSPractice

function funcA(){
  return new Promise(function(resolve, reject){
    window.setTimeout(function(){
      console.log('A');
      resolve('A');
    }, (Math.random() + 1) * 1000);
  });
}

function funcB(){
  return new Promise(function(resolve, reject){
    window.setTimeout(function(){
      console.log('B');
      resolve('B');
    }, (Math.random() + 1) * 1000);
  });
}

function funcC(){
  return new Promise(function(resolve, reject){
    window.setTimeout(function(){
      console.log('C');
      resolve('C');
    }, (Math.random() + 1) * 1000);
  });
}

funcA().then(funcB).then(funcC);

//就可以做到等 funcA() 被 「resolve」之後再執行 funcB()，然後 resolve 再執行 funcC() 的順序了。

//如果我們不在乎 funcA() funcB() funcC() 誰先誰後，只關心這三個是否已經完成呢？

//那就可以透過 Promise.all() 來做到：

// funcA, funcB, funcC 的先後順序不重要
// 直到這三個函式都回覆 resolve 或是「其中一個」 reject 才會繼續後續的行為

Promise.all([funcA(), funcB(), funcC()])
       .then(function(){ console.log('上菜'); });