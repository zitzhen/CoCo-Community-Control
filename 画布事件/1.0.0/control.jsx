const AUTHER = 'XJ王大哥'
const QQ = 2357942846

var document = globalThis.document

const types = {
    type: 'MOUSE_TOOLS_WIDGET',
    title: '画布事件',
    icon: 'https://creation.codemao.cn/716/appcraft/IMAGE_bZbAOhRcTa_1643095470593.svg',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [],
    events: [
        {
            key: 'click',
            label: '被点击',
            params: []
        },
        {
            key: 'mousedown',
            label: '被按下',
            params: []
        },
        {
            key: 'mouseup',
            label: '被松开',
            params: []
        }
    ]
  };

class Widget extends InvisibleWidget {
    constructor(props) {
        super(props)
        this.isMobile = 'ontouchstart' in document.documentElement
        document.documentElement.onclick = () => {
            this.emit("click")
        }
        
        if (this.isMobile){
            document.documentElement.ontouchend = () => {
                this.emit("mouseup")
            }
            document.documentElement.ontouchstart = () => {
                this.emit("mousedown")
            }
        }else{
            document.documentElement.mouseup = () => {
                this.emit("mouseup")
            }
            document.documentElement.onmousedown = () => {
                this.emit("mousedown")
            }
        }
    }
}

exports.types = types;
exports.widget = Widget;