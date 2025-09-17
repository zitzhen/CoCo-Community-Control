<template>
  <div>
    <!-- Loading -->
    <div class="progress-container" v-if="loading" id="Loading">
      <div class="progress-bar"></div>
    </div>

    <!-- Header -->
    <header>
      <div class="header-container">
        <h1>ZIT-CoCo-community</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-container">
      <div class="content-container">
        <!-- Page Header -->
        <div class="page-header">
          <div class="icon">
            <i class="fas fa-newspaper"></i>
          </div>
          <h2>ZIT-CoCo-Community论坛</h2>
          <p class="page-description">
            探索精选文章，获取最新技术资讯、使用教程和最佳实践
          </p>
          <p style="color: red;">此页面搭建中，非开发者请返回上级菜单</p>
        </div>

        <!-- Main Article Section -->
        <div class="main-content">
          <!-- Category Filter -->
          <div class="category-filter">
            <button
              v-for="(cat, index) in categories"
              :key="index"
              :class="['category-btn', { active: activeCategory === cat }]"
              @click="setCategory(cat)"
            >
              {{ cat }}
            </button>
          </div>

          <!-- Article List -->
          <div class="article-list" id="essay">
            <div
              v-for="(article, index) in filteredArticles"
              :key="index"
              class="article-card"
            >
              <img
                :src="article.url || ''"
                :alt="article.name"
                class="article-thumbnail"
              />
              <div class="article-content">
                <h3 class="article-title">
                  <a :href="`all/${article.name}`">{{ article.name }}</a>
                </h3>
                <div class="article-meta">
                  <span class="article-meta-item">
                    <i class="fas fa-user"></i> {{ article.author || '正在加载' }}
                  </span>
                  <span class="article-meta-item">
                    <i class="fas fa-calendar-alt"></i> {{ article.release_date || '正在加载' }}
                  </span>
                  <span class="article-meta-item">
                    <i class="fas fa-eye"></i> 正在加载
                  </span>
                  <span class="article-meta-item">
                    <i class="fas fa-comments"></i> 正在加载
                  </span>
                </div>
                <p class="article-excerpt">正在加载</p>
                <div class="article-tags">
                  <a href="#" class="article-tag">API</a>
                  <a href="#" class="article-tag">开发指南</a>
                  <a href="#" class="article-tag">RESTful</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="sidebar">
          <div class="card">
            <h3 class="section-title">
              <i class="fas fa-tags"></i> 标签云
            </h3>
            <div class="tag-cloud">
              <a href="#" class="tag-cloud-item size-3">API</a>
              <a href="#" class="tag-cloud-item size-2">开发指南</a>
              <a href="#" class="tag-cloud-item size-4">近期更新</a>
              <a href="#" class="tag-cloud-item size-2">教程</a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-container">
        <p>© 2025 ZIT-CoCo-community | 技术与知识分享</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const loading = ref(true);
const articles = ref([]);
const categories = ["全部", "技术教程", "近期更新"];
const activeCategory = ref("全部");

// 设置分类
function setCategory(cat) {
  activeCategory.value = cat;
}

// 根据分类筛选文章
const filteredArticles = computed(() => {
  if (activeCategory.value === "全部") return articles.value;
  return articles.value.filter((a) => a.category === activeCategory.value);
});

// 获取文章信息
async function fetchInformation(name) {
  try {
    const response = await fetch(`all/${name}/information.json`);
    if (!response.ok) throw new Error("请求失败");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("错误:", error);
    return null;
  }
}

// 主函数
async function main() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/zitzhen/CoCo-Community/contents/essay/all"
    );
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      const name = data[i].name;
      if (name !== "example") {
        const info = await fetchInformation(name);
        articles.value.push({
          name,
          url: info?.thumbnail || "",
          author: info?.author || "",
          release_date: info?.release_date || "",
          category: info?.category || "全部",
        });
      }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  main();
});
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --primary-color: #3498db;
    --secondary-color: #2980b9;
    --background-color: #f5f7fa;
    --card-color: #ffffff;
    --text-color: #333333;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --border-color: #e1e4e8;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header-container, .footer-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 1.5rem 0;
    text-align: center;
    box-shadow: var(--shadow);
    width: 100%;
}

.main-container {
    flex: 1;
    width: 100%;
}

.content-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
}

@media (max-width: 768px) {
    .content-container {
        grid-template-columns: 1fr;
    }
}

h1 {
    margin: 0;
    font-size: 2.2rem;
}

.page-header {
    grid-column: 1 / -1;
    text-align: center;
    margin-bottom: 1rem;
    padding-top: 2rem;
}

.page-header .icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.page-description {
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.7;
    color: #666;
}

.main-content {
    background-color: var(--card-color);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
}

.sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.card {
    background-color: var(--card-color);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
}

.section-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
}

.section-title i {
    margin-right: 10px;
    color: var(--primary-color);
}

/* 文章列表样式 */
.article-list {
    display: grid;
    gap: 1.5rem;
}

.article-card {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
}

.article-card:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

@media (max-width: 576px) {
    .article-card {
        grid-template-columns: 1fr;
    }
}

.article-thumbnail {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
}

.article-content {
    display: flex;
    flex-direction: column;
}

.article-title {
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
}

.article-title a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;
}

.article-title a:hover {
    color: var(--primary-color);
}

.article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
}

.article-meta-item {
    display: flex;
    align-items: center;
}

.article-meta-item i {
    margin-right: 5px;
}

.article-excerpt {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: #555;
}

.article-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
}

.article-tag {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    background-color: #f0f7ff;
    color: var(--primary-color);
    border-radius: 4px;
    font-size: 0.8rem;
    text-decoration: none;
    transition: all 0.3s;
}

.article-tag:hover {
    background-color: var(--primary-color);
    color: white;
}

/* 分类筛选 */
.category-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.category-btn {
    padding: 0.5rem 1rem;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s;
}

.category-btn:hover, .category-btn.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
}

/* 热门文章 */
.popular-article {
    display: flex;
    gap: 1rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--border-color);
}

.popular-article:last-child {
    border-bottom: none;
}

.popular-article-thumbnail {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
}

.popular-article-title {
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.3;
}

.popular-article-title a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;
}

.popular-article-title a:hover {
    color: var(--primary-color);
}

.popular-article-views {
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.3rem;
}

/* 标签云 */
.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag-cloud-item {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background-color: #f0f7ff;
    color: var(--primary-color);
    border-radius: 4px;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.3s;
}

.tag-cloud-item:hover {
    background-color: var(--primary-color);
    color: white;
}

.tag-cloud-item.size-1 { font-size: 0.8rem; }
.tag-cloud-item.size-2 { font-size: 0.9rem; }
.tag-cloud-item.size-3 { font-size: 1rem; }
.tag-cloud-item.size-4 { font-size: 1.1rem; }
.tag-cloud-item.size-5 { font-size: 1.2rem; }

/* 分页 */
.pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
}

.pagination-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--text-color);
    text-decoration: none;
    transition: all 0.3s;
}

.pagination-link:hover, .pagination-link.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
}

footer {
    background-color: var(--card-color);
    text-align: center;
    padding: 2rem 0;
    margin-top: 2rem;
    color: #666;
    border-top: 1px solid var(--border-color);
    width: 100%;
}
</style>