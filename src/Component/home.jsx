import React, { Component } from "react";
import starWar from "../Images/StartWars.jpg";
import batman from "../Images/Batman.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


class Home extends Component {
    state = {}
    render() {
        return (
            <main className="contentHome">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                    <div className="box">
                        <div className="text">
                            <a href="#">
                                <h2>Star Wars's Movies</h2>
                            </a>
                            <div className="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>

                        <a href="#">
                            <img className="starWar" src={starWar} alt="starWar-img" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="box">
                    <div className="text">
                        <a href="#">
                            <h2>Batman's Movies</h2>
                        </a>
                        <div className="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <a href="#">
                        <img className="batman" src={batman} alt="batman-img" />
                    </a>
                </div>
                </SwiperSlide>
                    ...
                </Swiper>
            </main>
        );
    }
}

export default Home;