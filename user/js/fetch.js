const avatar_img = document.getElementById("avatar_img");
const user_name = document.getElementById("user_name");
const error_prompt_small_windows = document.getElementById("error_prompt_small_windows");
const error_windows = document.getElementById("error_windows");
const Something_went_wrong_text = document.getElementById("Something_went_wrong_text");
const error_prompt_text_one = document.getElementById("error_prompt_text_one");
const avatar = document.getElementById("avatar");
const Loading = document.getElementById("Loading");

function get_username(usernameParam = 'username', url = window.location.href) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(Boolean);
  
  // 1. 优先返回路径最后部分（如 /user/johndoe → "johndoe"）
  if (pathParts.length > 0 && pathParts[pathParts.length - 1] !== "index.html") {
    return pathParts[pathParts.length - 1];
  }
  
  // 2. 检查查询参数（如 ?username=johndoe）
  const searchParams = new URLSearchParams(urlObj.search);
  return searchParams.get(usernameParam) || null;
}

function new_error(error1 = "未知错误",error2 = "未知错误"){
    error_prompt_small_windows.style.display = '';
    error_windows.style.display = '';
    avatar.style.display = 'none';
    Loading.style.display = 'none';
    Something_went_wrong_text.innerHTML = error1;
    error_prompt_text_one.innerHTML = error2;
}


function main(){
    const username = get_username();
    if (!username){
        new_error("未检测到参数","请检查路径或URL中的参数")
    }
}


main()