import "antd/dist/antd.css";
import { Card, Col, Row, Steps, Typography } from "antd";

const { Step } = Steps;

const Index = () => {
  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <Typography.Title>舒晓满&李琳</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Card title={<Row justify="center">新娘时间线（李琳）</Row>}>
            <Steps progressDot current={999} direction="vertical">
              <Step
                title="6:00"
                subTitle={<Typography.Text strong>起床、洗漱</Typography.Text>}
              />
              <Step
                title="6:10"
                subTitle={<Typography.Text strong>新娘化妆</Typography.Text>}
                description="伴娘自行化妆、穿伴娘服"
              />
              <Step
                title="7:10"
                subTitle={
                  <Typography.Text strong>
                    伴娘整理婚房，布置接亲游戏道具，锁门准备接亲
                  </Typography.Text>
                }
              />
              <Step
                title="8:00"
                subTitle={<Typography.Text strong>吃早饭</Typography.Text>}
                description="帮忙堵门的亲友到达新娘家"
              />
              <Step
                title="8:10"
                subTitle={
                  <Typography.Text strong>新娘穿秀禾服</Typography.Text>
                }
              />
              <Step
                title="8:15"
                subTitle={
                  <Typography.Text strong>新娘与父母拍摄花絮</Typography.Text>
                }
              />
              <Step
                title="8:30"
                subTitle={<Typography.Text strong>堵门做游戏</Typography.Text>}
                // description="听见鞭炮声，代表新郎来了"
              />
              <Step
                title="9:00"
                subTitle={
                  <Typography.Text strong type="danger">
                    给新娘父母敬茶
                  </Typography.Text>
                }
                description="父母准备改口红包"
              />
            </Steps>
          </Card>
        </Col>
        <Col span={4}>
          <Card title={<Row justify="center">新郎时间线（舒晓满）</Row>}>
            <Steps progressDot current={999} direction="vertical">
              <Step
                title="6:30"
                subTitle={<Typography.Text strong>起床、洗漱</Typography.Text>}
              />

              <Step
                title="7:15"
                subTitle={
                  <Typography.Text strong>结亲团车队集合</Typography.Text>
                }
                description="新郎家门口的横路"
              />
              <Step
                title="7:30"
                subTitle={<Typography.Text strong>吃早饭</Typography.Text>}
                description="伴郎提前穿好伴郎服"
              />
              <Step
                title="7:40"
                subTitle={<Typography.Text strong>拍摄花絮</Typography.Text>}
              />
              <Step
                title="8:00"
                subTitle={
                  <Typography.Text strong>
                    排好车队，绑丝带、贴喜字
                  </Typography.Text>
                }
                description="车队数量6+1"
              />
              <Step
                title="8:10"
                subTitle={<Typography.Text strong>出发接亲</Typography.Text>}
              />
              <Step
                title="8:30"
                subTitle={
                  <Typography.Text strong>到新娘家门口</Typography.Text>
                }
                description="主婚车停到铺子门口"
              />
              <Step
                title="9:00"
                subTitle={
                  <Typography.Text strong type="danger">
                    给新娘父母敬茶
                  </Typography.Text>
                }
                description="父母准备改口红包"
              />
              <Step
                title="9:10"
                subTitle={
                  <Typography.Text strong>店铺门口准备放礼花</Typography.Text>
                }
                description="伴郎团提前到店铺门口"
              />
              <Step
                title="9:15"
                subTitle={<Typography.Text strong>去新郎家</Typography.Text>}
              />
              <Step
                title="9:30"
                subTitle={
                  <Typography.Text strong>新郎家人放鞭炮迎接</Typography.Text>
                }
              />
              <Step
                title="9:50"
                subTitle={
                  <Typography.Text strong type="danger">
                    给新郎父母敬茶
                  </Typography.Text>
                }
                description="父母准备改口红包"
              />
              <Step
                title="10:00"
                subTitle={<Typography.Text strong>婚房拍照</Typography.Text>}
              />
              <Step
                title="10:15"
                subTitle={<Typography.Text strong>出发去礼堂</Typography.Text>}
                description="伴郎团提前到院子门口准备放礼花"
              />
              <Step
                title="10:30"
                subTitle={
                  <Typography.Text strong>
                    新郎迎宾、新娘换衣服补妆
                  </Typography.Text>
                }
                description="亲友团茶室休息"
              />
              <Step
                title="11:10"
                subTitle={
                  <Typography.Text strong>新郎新娘礼堂拍花絮</Typography.Text>
                }
                description="伴郎伴娘继续迎宾"
              />
              <Step
                title="11:30"
                subTitle={
                  <Typography.Text strong>
                    花絮拍摄完毕，休息片刻
                  </Typography.Text>
                }
              />
              <Step
                title="11:48"
                subTitle={<Typography.Text strong>婚礼开始</Typography.Text>}
              />
            </Steps>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
