const essay = document.getElementById("essay");

function add_essay(essay_name){
  essay.innerHTML += `
    <div class="article-card">
      <img src="https://via.placeholder.com/300x200?text=技术文章" alt="文章缩略图" class="article-thumbnail">
      <div class="article-content">
          <h3 class="article-title"><a href="article-detail.html">${essay_name}</a></h3>
          <div class="article-meta">
              <span class="article-meta-item"><i class="fas fa-user"></i> 正在加载</span>
              <span class="article-meta-item"><i class="fas fa-calendar-alt"></i> 正在加载</span>
              <span class="article-meta-item"><i class="fas fa-eye"></i> 正在加载</span>
              <span class="article-meta-item"><i class="fas fa-comments"></i> 正在加载</span>
          </div>
          <p class="article-excerpt">
              正在加载
          </p>
          <div class="article-tags">
              <a href="#" class="article-tag">API</a>
              <a href="#" class="article-tag">开发指南</a>
              <a href="#" class="article-tag">RESTful</a>
          </div>
      </div>
    </div>`;
}

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
    let name = data[i].name; // 或 data[i]['name']
    console.log(name);
    add_essay(name);
  }
  })
  .catch(error => console.error('Error:', error));