<template>
    <div class="card card-red">
    <div class="card-dots">•••</div>
    <div class="card-header">
        <div class="card-icon">
            <i class="fas fa-code"></i>
        </div>
        <div class="card-name">数据分析</div>
    </div>
    <div class="card-author">作者: 刘伟</div>
</div>

</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        padding: 20px;
    }
    
    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        max-width: 1000px;
    }
    
    .card {
        width: 180px;
        height: 100px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
    
    .card-header {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .card-icon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e6f7ff;
        border-radius: 6px;
        color: #1890ff;
    }
    
    .card-name {
        font-weight: 600;
        font-size: 14px;
        color: #262626;
    }
    
    .card-author {
        font-size: 12px;
        color: #8c8c8c;
        padding-left: 38px;
        margin-top: -10px;
    }
    
    .card-dots {
        position: absolute;
        top: 12px;
        right: 12px;
        color: #bfbfbf;
        font-size: 14px;
    }
    
    .card-dots:hover {
        color: #8c8c8c;
    }
    
    .card-blue { border-top: 3px solid #1890ff; }
    .card-green { border-top: 3px solid #52c41a; }
    .card-purple { border-top: 3px solid #722ed1; }
    .card-red { border-top: 3px solid #f5222d; }
    
    .card-blue .card-icon { background: #e6f7ff; color: #1890ff; }
    .card-green .card-icon { background: #f6ffed; color: #52c41a; }
    .card-purple .card-icon { background: #f9f0ff; color: #722ed1; }
    .card-red .card-icon { background: #fff2f0; color: #f5222d; }
    
    h1 {
        text-align: center;
        margin-bottom: 30px;
        color: #262626;
        width: 100%;
        font-size: 24px;
    }
</style>

<script>
    // 添加卡片点击效果
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            alert('您点击了: ' + card.querySelector('.card-name').textContent);
        });
    });
</script>