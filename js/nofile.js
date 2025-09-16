// 检测是否使用 file:// 协议
if (window.location.protocol === 'file:') {
    // 创建警告框
    const warning = document.createElement('div');
    warning.style.position = 'fixed';
    warning.style.top = '0';
    warning.style.left = '0';
    warning.style.right = '0';
    warning.style.backgroundColor = '#ff4444';
    warning.style.color = 'white';
    warning.style.padding = '10px';
    warning.style.textAlign = 'center';
    warning.style.fontFamily = 'Arial, sans-serif';
    warning.style.fontWeight = 'bold';
    warning.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    warning.style.zIndex = '9999';
    warning.textContent = '⚠️ 您正在使用 file:// 协议访问，可能出现问题，请使用 localhost 进行调试！';

    // 添加到页面顶部
    document.body.prepend(warning);
}