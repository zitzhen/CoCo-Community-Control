document.addEventListener('DOMContentLoaded', function() {
    const methods = document.querySelectorAll('.method');
    const qrContainers = {
        'wechat': document.getElementById('wechat-qr'),
        'alipay': document.getElementById('alipay-qr'),
        'qq': document.getElementById('qq-qr')
    };
    
    // 默认显示微信支付
    methods[0].classList.add('active');
    qrContainers['wechat'].classList.add('active');
    
    methods.forEach(method => {
        method.addEventListener('click', function() {
            // 移除所有active类
            methods.forEach(m => m.classList.remove('active'));
            Object.values(qrContainers).forEach(qr => qr.classList.remove('active'));
            
            // 添加当前active类
            const methodType = this.getAttribute('data-method');
            this.classList.add('active');
            qrContainers[methodType].classList.add('active');
        });
    });
});