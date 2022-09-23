import { useState, useEffect } from 'react';
import { Modal, Button, notification, Space, Divider } from "antd";
import { Line } from '@ant-design/plots';
import { profit, resetPft } from '@/http/api';

function handleIncome(onSuccess) {
    Modal.confirm({
        title: '清空收益提示',
        content: <p>确定清空收益记录吗?</p>,
        onOk: () => {
            try {
                resetPft().then(res => {
                    notification.open({
                        message: `消息通知`,
                        description: `清空=>${JSON.stringify(res.data)}`
                    });
                    onSuccess()
                })
            } catch (e) {
                notification.open({
                    message: `消息通知`,
                    description: `清空=>${e}`
                });
            }
        }
    })
}
const DemoLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        // fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        //   .then((response) => response.json())
        //   .then((json) => setData(json))
        //   .catch((error) => {
        //     console.log('fetch data failed', error);
        //   });
        profit().then(res => {
            let json = res.data.data;
            console.log('res.data=>', json)
            setData(json)
        }).catch((error) => {
            console.log('fetch data failed', error);
        })
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'time',
        yField: 'income',
        xAxis: {
            type: 'timeCat',
            tickCount: data.length,
            mask: "YYYY-MM-dd hh:mm:ss"
        },
        autoFit: true
    };

    return <div>
        <Divider>日志面板</Divider>
        <div style={{ margin: "15px 0" }}>
            <Space style={{ margin: 20 }}>
                <Button type="primary" onClick={() => {
                    handleIncome(() => {
                        profit().then(res => {
                            setData(res.data.data)
                        })
                    })
                }}>
                    清空收益
                </Button>
            </Space>
        </div>
        <Divider></Divider>
        <Line {...config} />
    </div>;
};
export default DemoLine;
// ReactDOM.render(<DemoLine />, document.getElementById('container'));
