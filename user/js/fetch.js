const avatar_img = document.getElementById("avatar_img");
const user_name = document.getElementById("user_name");

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


