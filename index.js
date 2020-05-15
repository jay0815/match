module.exports.match = function match(pattern, string) {
  if(
    typeof pattern === 'symbol' ||  typeof pattern === 'undefined' ||
    pattern === null ||  typeof (pattern+'') !== 'string' ||
    typeof string === 'symbol' || typeof string === 'undefined' ||
    string === null || typeof (string+'') !== 'string'
  ){
    return false
  }
  if(pattern === ''){
    return true
  }
  // 全部状态
  const state = (pattern+'').split('');
  // 记录状态迁移游标
  let index = 0;
  // 当前探索的位置
  let site = 0;
  for (let c of string) {
    if(index < state.length ){
      if(state[index] === c){
        index ++;
      }else if(state[index-1] === c && string.slice(site - index + 1, site) === state.slice(0, index-1).join('')){
        // 判断是否需要对游标结果进行记录
        // 当前节点与前一个节点的value相同时
        // 将尝试比较已对比对象的值的整体范围向后移动1位
        // 此时如果 新范围内的值与 目前已比较过的pattern内的值相同
        // 通过暂停计数的方式,保留之前的结果
      }else if(state[0] === c){
        // 调整 游标起点
        index = 1;
      }else {
        index = 0;
      }
      site++;
    }else {
      break;
    }
  }
  return index === state.length;
}
