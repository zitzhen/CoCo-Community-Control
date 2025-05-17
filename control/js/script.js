function new_error(error = "") {
    console.error("触发错误");
        Loading.style.display = 'none';
        File_Information.style.display = 'none';
        error_prompt_small_windows.style.display = 'block';
        error_windows.style.display = 'block';
        error_windows_br.style.display = 'block';
        error_prompt_small_windows_br.style.display = 'block';
    if (error){
        Something_went_wrong_text.innerHTML = '找不到文件';
        error_prompt_text_one.innerHTML = '请检查参数中的文件名是否正确';
    }
    else{
        Something_went_wrong_text.innerHTML = error;
        error_prompt_text_one.innerHTML = "错误信息<br>"+error;
    }

}


function off_error_button() {
    error_prompt_small_windows.style.display = 'none';
}

// 获取项目描述
async function Get_the_description(name) {
  try {
    const response = await fetch(`https://api.github.com/repos/zitzhen/CoCo-Community/contents/control/${name}`); 
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const content = data.content;
    
    console.log('content值:', content);
    return content; 
    
  } catch (error) {
    console.error('请求出错:', error);
    new_error(error) 
  }
}

// 获取版本列表
async function Get_the_version(path = '') {
    try {
        const apiUrl = `https://api.github.com/repos/zitzhen/CoCo-Community/contents/control/${path}/README.md`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        
        const data = await response.json();
        
        // 只返回目录类型的项目
        if (!Array.isArray(data)) return [];
        return data
            .filter(item => item.type === 'dir')
            .map(dir => dir.name);
    } catch (error) {
        console.error('获取版本列表出错:', error);
        return [];
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', async function() {
    // 获取DOM元素
    const Navigation_bar = document.getElementById("Navigation_bar");
    const File_Information = document.getElementById("File_Information");
    const error_prompt_small_windows = document.getElementById('error_prompt_small_windows');
    const error_windows = document.getElementById('error_windows');
    const Something_went_wrong_text = document.getElementById('Something_went_wrong_text');
    const error_prompt_text_one = document.getElementById('error_prompt_text_one');
    const Loading = document.getElementById('Loading');
    const error_windows_br = document.getElementById('error_windows_br');
    const error_prompt_small_windows_br = document.getElementById('error_prompt_small_windows_br');
    const presentation_of_the_document = document.getElementById('presentation_of_the_document');

    // 从URL获取参数
    const urlParams = new URLSearchParams(window.location.search);
    const filename = urlParams.get('name'); 

    // 检查是否提供了文件名参数
    if (!filename) {
        console.error("无效参数");
        Loading.style.display = 'none';
        File_Information.style.display = 'none';
        error_prompt_small_windows.style.display = 'block';
        error_windows.style.display = 'block';
        Something_went_wrong_text.innerHTML = '未检测到参数';
        error_prompt_text_one.innerHTML = '请检查URL中的name参数';
    } else {
        // 隐藏错误提示元素
        error_windows_br.style.display = 'none';
        error_prompt_small_windows_br.style.display = 'none';
        
        try {
            // 获取版本列表和项目描述
            const versions = await Get_the_version(filename);
            const introduce = await Get_the_description(filename);  
            
            // 使用marked库解析Markdown内容
            const html_introduce = marked.parse(introduce);
            presentation_of_the_document.innerHTML = html_introduce;
            
            // 加载完成后隐藏加载动画
            Loading.style.display = 'none';
        } catch (error) {
            console.error('加载内容出错:', error);
            new_error(error);
        }
    }
});