import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="introduce-box">
        <h3>中文知识图谱项目介绍</h3>
        <p>
          本项目为解决当前中文知识图谱构建的准确率低、耗时长且需要大量人工参与的问题，
          建立一种端到端基于中文百科数据的中文知识图谱自动化构建的解决方案，并在此基础上开发实现面向用户的中文知识图谱系统。
          在此方案中，通过自定义的网络爬虫，将原始百科数据的词条属性以及相关的文本信息不间断抓取到本地系统中，并整理成带扩展属性的三元组形式。
          后端系统自动通过图数据库对三元组数据进行导入更新，转换为信息丰富的知识图谱系统，在前端为用户提供基于知识图谱的应用服务。
          目前金融领域经常会有对客户背景的核查，但核查员也很难对客户熟知的领域都足够了解，知识图谱可以帮助自动生成问题和参考答案。
        </p>
        <Link to="./introduce" className="btn-primary">
          开始体验...
        </Link>
      </div>
    </div>
  );
}
