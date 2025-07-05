// functions/_middleware.js
export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  const response = await next();
  
  // 处理直接访问 404.html 的情况
  if (url.pathname === '/404.html') {
    return new Response(response.body, {
      status: 404,
      headers: response.headers
    });
  }
  
  // 处理不存在的路径
  if (response.status === 404) {
    return new Response(
      await env.ASSETS.fetch(new Request(url.origin + '/404.html')),
      { status: 404, headers: response.headers }
    );
  }
  
  return response;
}