<template>
<div class="container">
    <div class="search-bar">
        <input type="text" id="searchInput" placeholder="搜索文件...">
        <button id="searchBtn"><i class="fa-solid fa-search"></i> 搜索</button>
    </div>
</div>
</template>
<style scoped>
.search-bar {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
}

.search-bar input {
    padding: 0.8rem 1rem;
    width: 60%;
    max-width: 500px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-size: 1rem;
    outline: none;
}

.search-bar button {
    padding: 0.8rem 1.5rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.search-bar button:hover {
    background-color: #2980b9;
}
</style>