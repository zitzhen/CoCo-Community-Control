// 获取DOM元素（提升到全局作用域，供所有函数使用）
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
const file_name = document.getElementById('file_name');
const size = document.getElementById('size');
const size2 = document.getElementById('size2');
const avatar_src = document.getElementById('avatar_src');
const HTML_author_name = document.getElementById('HTML_author_name');
const HTML_bio = document.getElementById("HTML_bio");
const download = document.getElementById("download");

function new_error(error = "") {
    console.error("触发错误");
    Loading.style.display = 'none';
    File_Information.style.display = 'none';
    error_prompt_small_windows.style.display = 'block';
    error_windows.style.display = 'block';
    error_windows_br.style.display = 'block';
    error_prompt_small_windows_br.style.display = 'block';
    if (error){
        Something_went_wrong_text.innerHTML = "错误信息";
        error_prompt_text_one.innerHTML = "错误信息<br>" + error;
        document.title = "发生错误|ZIT-CoCo-Community";
        history.replaceState(null, "发生错误|ZIT-CoCo-Community", window.location.href);
    } else {
        Something_went_wrong_text.innerHTML = '找不到文件';
        error_prompt_text_one.innerHTML = '请检查参数中的文件名是否正确';
        document.title = "404 not found|找不到控件|ZIT-CoCo-Community";
        history.replaceState(null, "404 not found|找不到控件|ZIT-CoCo-Community", window.location.href);
    }
}

function off_error_button() {
    error_prompt_small_windows.style.display = 'none';
}

// 获取项目描述
async function Get_the_description(name) {
    try {
        const response = await fetch(`https://api.github.com/repos/zitzhen/CoCo-Community/contents/control/${name}/README.md`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 正确解码 base64 为 UTF-8 字符串
        const base64 = data.content.replace(/\n/g, '');
        const binary = atob(base64);
        const bytes = Uint8Array.from([...binary].map(char => char.charCodeAt(0)));
        const content = new TextDecoder('utf-8').decode(bytes);
        return content;
    } catch (error) {
        console.error('请求出错:', error);
        new_error(error);
        return '';
    }
}

// 获取版本列表
async function Get_the_version(path = '') {
    const apiUrl = `https://api.github.com/repos/zitzhen/CoCo-Community/contents/control/${path}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        const data = await response.json();
        if (!Array.isArray(data)) return [];
        return data
            .filter(item => item.type === 'dir')
            .map(dir => dir.name);
    } catch (error) {
        console.error('获取版本时出错:', error);
        new_error(error)
        return [];
    }
}

// 获取配置文件
async function Get_the_jsonData(name) {
    try {
        const url = `https://api.github.com/repos/zitzhen/CoCo-Community/contents/control/${name}/information.json`;
        const response = await fetch(url);  
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const content = data.content; 
        const decodedContent = atob(content); 
        
        return decodedContent;
    } catch (error) {
        console.error('获取配置文件出错:', error);
        new_error(error);  
        return [];
    }
}

//获取控件
async function Get_controls(name,version) {
    try{
        const url =`https://api.github.com/repos/zitzhen/CoCo-Community/contents/control/${name}/${version}/control.jsx`
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }  catch (error) {
        console.error('获取控件出错:', error);
        new_error(error);  
        return [];
    }
}

//获取创作者信息
async function get_Creator_Information(id) {
    try{
        const url = `https://api.github.com/users/${id}`
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`HTTP error! status :${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error("获取Github创作者信息出错",error);
        new_error(error);
        return [];
    }
    
}
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', async function() {
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
        document.title = "400 Bad Request|错误请求|ZIT-CoCo-Community";
        history.replaceState(null, "400 Bad Request|错误请求|ZIT-CoCo-Community", window.location.href);
    } else {
        // 隐藏错误提示元素
        error_windows_br.style.display = 'none';
        error_prompt_small_windows_br.style.display = 'none';
        
        try {
            // 获取版本列表和项目描述
            const versions = await Get_the_version(filename);
            console.log(versions)
            const introduce = await Get_the_description(filename);
            const jsonDataStr =  await Get_the_jsonData(filename);
            const jsonData = JSON.parse(jsonDataStr); 
            const controls = await Get_controls(filename,jsonData.Version_number_list[jsonData.Version_number_list.length - 1]);
            const size =(controls.size/1048576);
            const creator_ID = controls.author;
            console.log(creator_ID);
            const creator_information = await get_Creator_Information(creator_ID);
            const avatar = creator_information.avatar_url;
            const author_name = creator_information.name;
            const author_bio = creator_information.bio;
            const downloadurl = controls.download_url;
            console.log(jsonData);
            // 使用marked库解析Markdown内容
            const html_introduce = marked.parse(introduce);
            presentation_of_the_document.innerHTML = html_introduce;
            file_name.innerHTML = filename;
            size.innerHTML = size+"MIB";
            size2.innerHTML =size;
            avatar_src.src = avatar;
            HTML_author_name.innerHTML = author_name;
            HTML_bio.innerHTML = author_bio;
            download.href = downloadurl;
            
            // 加载完成后隐藏加载动画
            Loading.style.display = 'none';
            document.title = filename + "|控件详情|ZIT-CoCo-Community";
            history.replaceState(null, filename + "|控件详情|ZIT-CoCo-Community", window.location.href);
        } catch (error) {
            console.error('加载内容出错:', error);
            new_error(error);
        }
    }
});