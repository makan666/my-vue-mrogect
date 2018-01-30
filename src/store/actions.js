import reqwest from 'reqwest'

// reqwest,一个封装了promise的异步请求插件
// 需要cnpm install reqwest --save

export const fun = ({ commit }) => {
  reqwest({
    url: `http://jsonplaceholder.typicode.com/users`,
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    data: '参数',
    dataType: 'json'
  }).then(msg => {
    commit({
      type: 'getMsg', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      msg // 成功后把得到的数据通过commit传入mutations
    })
  })
}

export const fun1 = ({ commit }, params) => {
  reqwest({
    url: `https://api.github.com/users`,
    method: 'get',
    contentType: 'application/json',
    crossOrigin: true,
    data: {since: ''},
    dataType: 'json'
  }).then(photos => {
    commit({
      type: 'getPhotos', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
      photos // 成功后把得到的数据通过commit传入mutations
    })
  })
}
