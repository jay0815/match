module.exports.match = function match(pattern, string) {
  // 全部状态
  const state = pattern.split('');
  // 记录状态迁移游标
  let index = 0;
  // 当前探索的位置
  let site = 0;
  for(;site < string.length;site++){
    if(index < state.length ){
      if(state[index] === string[site]){
        index ++;
      }else if(state[index-1] === string[site]){
        // 调整 游标起点
        // index -= 1;
      }else if(state[0] === string[site]){
        // 调整 游标起点
        index = 1;
      }else {
        index = 0;
      }
    }else {
      break;
    }
  }
  // for (let c of string) {
  //   if(index < state.length ){
  //     if(state[index] === c){
  //       index ++;
  //     }else if(state[0] === c){
  //       // 调整 游标起点
  //       index = 1;
  //     }else {
  //       index = 0;
  //     }
  //   }else {
  //     break;
  //   }
  // }
  return index === state.length;
}
