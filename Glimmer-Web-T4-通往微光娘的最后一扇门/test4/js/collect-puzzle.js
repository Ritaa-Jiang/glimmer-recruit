
function collectPuzzle(...puzzles) {
  // TODO:在这里写入具体的实现逻辑
  // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回

  let collect=new Set();

  //let arr =[];

  for(let i = 0;i < redPuzzles.length;i++){
    collect.add(redPuzzles[i]);
    //arr.push(redPuzzles[i]);
  }
  //遍历数组
  for(let i = 0;i < bluePuzzles.length;i++){
    collect.add(bluePuzzles[i]);
  }
  for(let i = 0;i < greenPuzzles.length;i++){
    collect.add(greenPuzzles[i]);
  }

  console.log(collect);

  return Array.from(collect);
  //函数需要返回值时用return

  //Array.from(new Set(arr));

  //尝试先加到arr里再把arr转化为set再转化为arr
  //没必要这么复杂，，直接加到set里面不就行
  //记得把set转化为array过后要return一个返回值！！！


}

