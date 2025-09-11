<template>
    <div class="file-list">
        <div class="file-card doc">
            <div class="file-content">
                <div class="file-name">CoCo-Community用户协议</div>
                </div>
            </div>
        <div class="file-card doc">
            <div class="file-content">
                <div class="file-name">CoCo-Community隐私协议</div>
                </div>
            </div>
        </div>
</template>

<style scoped>
    :root {
    --primary-color: #4361ee;
    --secondary-color: #3a0ca3;
    --text-color: #2b2d42;
    --light-text: #6c757d;
    --card-color: #ffffff;
    --background: #f8f9fa;
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    --hover-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    --border-radius: 12px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--background);
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    max-width: 1200px;
    width: 100%;
}

h1 {
    color: var(--text-color);
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
}

.file-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
}

.file-card {
    background-color: var(--card-color);
    border-radius: var(--border-radius);
    padding: 1.25rem;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.file-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
}

.file-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.file-card:hover::before {
    opacity: 1;
}

.file-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: linear-gradient(135deg, #e6f7ff 0%, #edf2ff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
}

.file-icon i {
    font-size: 1.75rem;
    color: var(--primary-color);
}

.file-content {
    flex-grow: 1;
    min-width: 0;
    padding-right: 1rem;
}

.file-name {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--text-color);
    margin-bottom: 0.35rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.file-author {
    font-size: 0.9rem;
    color: var(--light-text);
    display: flex;
    align-items: center;
}

.file-author i {
    margin-right: 0.4rem;
    font-size: 0.8rem;
}

.download-btn {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.6rem 1.1rem;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    text-decoration: none;
    flex-shrink: 0;
    box-shadow: 0 4px 6px rgba(67, 97, 238, 0.15);
}

.download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(67, 97, 238, 0.2);
}

.download-btn i {
    margin-right: 0.5rem;
    font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .file-list {
        grid-template-columns: 1fr;
    }
    
    .file-card {
        padding: 1rem;
    }
    
    .download-btn {
        padding: 0.5rem 0.9rem;
        font-size: 0.85rem;
    }
    
    .file-icon {
        width: 50px;
        height: 50px;
    }
    
    .file-icon i {
        font-size: 1.5rem;
    }
}
</style>