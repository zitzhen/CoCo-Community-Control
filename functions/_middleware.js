// functions/_middleware.js
export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  
  // 1. 先执行正常请求
  const response = await next();
  
  // 2. 处理特殊路径的404状态码覆盖
  if (url.pathname === '/404' || url.pathname === '/404.html') {
    return new Response(response.body, {
      status: 404,
      headers: response.headers
    });
  }
  
  // 3. 处理实际不存在的路径（原始响应已是404的情况）
  if (response.status === 404) {
    const notFoundResponse = await env.ASSETS.fetch(
      new Request(new URL('/404.html', url.origin))
    );
    
    return new Response(notFoundResponse.body, {
      status: 404,
      headers: notFoundResponse.headers
    });
  }
  
  // 4. 其他正常响应
  return response;
}