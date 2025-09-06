<template>
    <footer>
        <div class="container">
            <p>© 2025 小圳社区 - CoCo自定义控件下载中心 | 所有文件仅供学习交流使用</p>
           
            <div class="bottom-button">
            <a href="https://github.com/zitzhen/CoCo-Community" target="_blank">
                <button class="btn">
                    <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                        <image href="@/images/svg/github.svg" width="24" height="24" x="0" y="0"/>
                    </svg>
                </button>
            </a>
            <a href="https://gitee.com/hello-oliver/CoCo-Community" target="_blank">
            <button class="btn">
            <svg width="40" height="40" fill="#c71d23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitee">
              <image href="@/images/svg/gitee.svg" width="24" height="24" x="0" y="0"/>
            </svg>
          </button>
            </a>
            <a href="https://jihulab.com/zitzhen/CoCo-Community">
            <button class="btn bins">
          <svg width="40" height="40" fill="#FC6D26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gitlab">
            <image href="@/images/svg//gitlab.svg" width="24" height="24" x="0" y="0"/>
          </svg>
        </button>
        </a>
        </div>
        <br>
        <div style="margin: 0 auto;">
            <a href="tipping/" style="margin: 0 auto;">
              <button class="Btn" style="margin: 0 auto;">
                  向我们打赏
                  <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
              </button>
          </a>
          </div>
            <p>请优先使用GitHub查看ZIT-CoCo-Community的开源项目</p>
            <a href="agreement/useragreement/">用户协议</a>
            <a href="agreement/privacypolicy/">隐私协议</a>
                </div>
            </footer>
</template>

<style>
    /*/Pay按钮/*/
    .Btn {
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 15, 15);
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    }

    .svgIcon {
    width: 16px;
    }

    .svgIcon path {
    fill: white;
    }

    .Btn::before {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
    }

    .Btn:hover::before {
    transition-duration: .3s;
    transform: translate(100%,-50%);
    border-radius: 0;
    }

    .Btn:active {
    transform: translate(5px,5px);
    transition-duration: .3s;
    }
    /* 普通按钮 */ 
    .btn {
    display: grid;
    place-items: center;
    background: #e3edf7;
    padding: 1.4em;
    border-radius: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
            -6px -6px 10px -1px rgba(255,255,255,0.7);
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;
    transition: transform 0.5s;
    }

    .btn:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
            inset -4px -4px 6px -1px rgba(255,255,255,0.7),
            -0.5px -0.5px 0px rgba(255,255,255,1),
            0.5px 0.5px 0px rgba(0,0,0,0.15),
            0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.1);
    transform: translateY(0.5em);
    }

    .btn svg {
    transition: transform 0.5s;
    }

    .btn:hover svg {
    transform: scale(0.9);
    fill: #333333;
    }
    h1 {
        margin: 0;
        font-size: 2.2rem;
    }
    .bottom-button {
    display: flex;
    gap: 16px; /* 按钮间距，可调整 */
    align-items: center;
    justify-content: center;
    }
    footer {
        text-align: center;
        padding: 2rem 0;
        margin-top: 2rem;
        color: #666;
        border-top: 1px solid #eee;
    }

    @media (max-width: 768px) {
        .file-list {
            grid-template-columns: 1fr;
        }
        
        .search-bar input {
            width: 70%;
        }
    }
</style>