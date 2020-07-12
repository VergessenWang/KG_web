import "./knowledge.css";
import React, { Component } from "react";
import echarts from "echarts";
import "echarts-wordcloud";
import { getKnowledgeData } from "../requests/Request";
import { CompassOutlined } from "@ant-design/icons";
import { Input } from "antd";
//import "../fonts/font-awesome.min.css";

export default class Knowledge extends Component {
  constructor() {
    super();
    this.relationAmount = React.createRef();
  }
  componentDidMount() {
    this.chart = echarts.init(this.relationAmount.current);
  }

  onSearchClick = (keyValue) => {
    keyValue = keyValue.trim();

    var categories = [];
    for (var i = 0; i < 50; i++) {
      categories[i] = {
        name: "类目" + i,
      };
    }

    getKnowledgeData(keyValue).then((resp) => {
      console.log("knowledge:", resp);
      if (resp.data === "failed") {
        alert("无此名词，换个名词试试吧！");
        return;
      }
      const option = {
        title: {
          text: "关键词检索",
          top: "bottom",
          left: "right",
        },
        tooltip: {
          trigger: "none",
        },
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph", // 系列类型:关系图
            roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
            force: {
              // 力引导布局相关的配置项
              repulsion: 1000, // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
              edgeLength: [150, 100],
            },

            layout: "force",

            lineStyle: {
              color: "source",
              curveness: 0,
            },
            emphasis: {
              lineStyle: {
                width: 10,
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.3)",
            },
            data: resp.data.nodes,
            categories: categories,
            links: resp.data.links,
            label: {
              //图形上的文本标签，可用于说明图形的一些数据信息
              normal: {
                show: true, //显示
                position: "right", //相对于节点标签的位置，默认在节点中间
              },
              position: "right",
              formatter: "{b}",
            },
            edgeLabel: {
              //线条的边缘标签
              normal: {
                show: true,
                formatter: function (x) {
                  return x.data.name;
                },
              },
            },
          },
        ],
      };
      this.chart.setOption(option);
    });
  };
  render() {
    return (
      <div className="container">
        <Input.Search
          className="search"
          placeholder="请输入关键字"
          onSearch={this.onSearchClick}
          enterButton="Search"
          size="large"
        />
        <div id="knowledge" ref={this.relationAmount} />
      </div>
    );
  }
}
