const Loading_tip = document.getElementById('Loading_tip');
const Loading = document.getElementById('Loading');
const contentHTML = document.getElementById('content');

async function fetchData() {
    try {
        const response = await fetch("content.md");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        return content;
    } catch (error) {
        console.error('请求出错:', error);
    }
}

async function main(){
    const content = await fetchData();
    console.log(content);
    const htmlOutput = marked.parse(content);
    console.log(htmlOutput);
    contentHTML.innerHTML = htmlOutput;
    Loading.style.display ='none'
}

main();