fetch('https://api.github.com/repos/zitzhen/CoCo-Community/contents/essay/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  })
  .catch(error => console.error('Error:', error));