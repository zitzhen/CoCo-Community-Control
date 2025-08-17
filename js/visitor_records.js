function recording(url) {
  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        console.error(`Error: Received status code ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

// 请求API以记录信息
recording('https://api.zitzhen.cn/cczit/visitor/add/');