/*
sanghoon
*/

import React from 'react'
import './MainPage.css'
import { Image } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

const MainPage = () => {

    const BACKGROUND_IMG = "https://yososu-image-bucket.s3.ap-northeast-2.amazonaws.com/main.PNG";

    return (
        <div>
            <Navigation/>

            <div className="text-wrap box">
                <Image className="MainImg" src={BACKGROUND_IMG}/>
                <div className="col-xs-12 col-sm-12 col-md-8 col-xl-4 TextBox">
                    <p className="Title1 m-2 mb-3">요소수 판매처와 재고, 정보, 최신뉴스를 <span>Yososu Map에서</span> 한눈에 확인 하세요!</p>
                    <p className="Title2">저희 벨루가는 어떠한 영리도 취하지 않고, 여러분 모두에게 큐레이션 서비스를 제공합니다. </p>
                </div>
            </div>
        </div>
    )
}

export default MainPage