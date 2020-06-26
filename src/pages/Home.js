import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

export default function Home() {


        return (
        <div className="container">
            <div className="introduce-box">
                <h3>项目介绍</h3>
                <p>这是一个金融知识图谱项目</p>
                <Link to="./introduce" className="btn-primary">
                    learn more..
                </Link>
            </div>
        </div>
    )
}
