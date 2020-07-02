import "./introduce.css";
import React, { Component } from "react";
import echarts from "echarts";
import "echarts-wordcloud";
import { getIntroduceData } from "../requests/Request";

export default class Introduce extends Component {
  constructor() {
    super();
    this.wordCloudAmount = React.createRef();
  }

  initIntroduceChart = () => {
    this.chart = echarts.init(this.wordCloudAmount.current);

    getIntroduceData().then((resp) => {
      console.log("introduce:", resp);
      const option = {
        title: {
          text: "金融item词云",
          top: "bottom",
          left: "right",
        },
        tooltip: {
          trigger: "none",
        },
        series: [
          {
            // name: "金融item词云",
            type: "wordCloud", // 系列类型:词云
            data: resp.data,
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            shape: "circle",
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            textStyle: {
              fontFamily: "Microsoft YaHei",
              normal: {
                color: function () {
                  return (
                    "rgba(" +
                    [
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                      0.8,
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
          },
        ],
      };
      this.chart.setOption(option);
    });
  };

  componentDidMount() {
    // this.initIntroduceChart();
  }

  render() {
    return (
      <div className="container">
        <div className="introduce">
          <div className="wordCloud" ref={this.wordCloudAmount}></div>

          <a className="refresh" href="javascript:location.reload();">
            随机获取其他词条
          </a>
        </div>
      </div>
    );
  }
}
