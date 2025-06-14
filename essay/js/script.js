// 分类筛选功能
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.category-btn.active').classList.remove('active');
        this.classList.add('active');
        // 这里应该添加筛选逻辑
        console.log('筛选分类:', this.textContent);
    });
});

// 分页功能
document.querySelectorAll('.pagination-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.classList.contains('active')) return;
        
        document.querySelector('.pagination-link.active').classList.remove('active');
        this.classList.add('active');
        // 这里应该添加分页加载逻辑
        console.log('跳转到页面:', this.textContent);
    });
});