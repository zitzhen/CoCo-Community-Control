var document = this.document;

const types = {
    type: 'DRAG_AND_DROP_UPLOAD_XJ',
    icon: 'https://ocean.codemao.cn/appcraft/resource/icon/基础/附件.svg',
    title: '拖拽上传',
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        {
            key: 'accept',
            label: '文件类型',
            valueType: 'string',
            defaultValue: 'image/*'
        },
    ],
    methods: [],
    events: [
        {
            key: 'onChange',
            label: '被上传',
            params: [{ key: 'file', label: '文件', valueType: 'string' }]
        }
    ]
};


class Widget extends VisibleWidget {
    constructor(p) {
        super(p);
        Object.assign(this, p);
    }

    onChange = () => {
        let input = document.querySelector(`#${this.__widgetId} > input`);
        let r = new FileReader();
        r.readAsDataURL(input.files[0]);
        r.onload = () => this.emit('onChange', r.result);
    };

    render() {
        return (
            <input
                onChange={this.onChange}
                accept={this.accept}
                type="file"
                style={{
                    height: '100%',
                    width: '100%',
                    opacity: 0
                }}
            />
        );
    }
}

exports.types = types;
exports.widget = Widget;