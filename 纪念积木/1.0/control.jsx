var time = Date.now()
var timeStr = new Date().toLocaleString()

const types = {
    type: `${time}_WIDGET`,
    title: `纪念积木${time}`,
    icon: '',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: 't',
            label: '导入时间',
            valueType: 'string',
            defaultValue: timeStr
        },
    ],
    methods: [],
    events: []
}


class Widget extends InvisibleWidget {constructor(props) {super(props)}}

exports.types = types;
exports.widget = Widget;