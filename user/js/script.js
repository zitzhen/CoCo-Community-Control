// 标签切换功能
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有active类
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加active类到当前标签和对应内容
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 模拟加载更多功能
    const loadMoreButtons = document.querySelectorAll('button');
    loadMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('加载更多功能将在实际应用中通过AJAX请求实现');
        });
    });
});