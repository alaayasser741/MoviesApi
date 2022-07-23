import React, { Component } from "react";
import { ReactDOM } from "react";
import { getMovies } from "../../Services/fakeM";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import batman from "../../Images/Batman.jpg"
class List extends Component {
    state = {
        movies: getMovies(),
        Name: "Batman Movies",
        description: "Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth.",
        backImg: `${batman}`,
    }
    showMovie = (movie) => {
        let name = movie.Title;
        let dis = movie.description;
        let backUrl = movie.Poster;
        this.setState({ backImg: backUrl })
        this.setState({ Name: name })
        this.setState({ description: dis })


    }
    render() {
        const mystyle = {
            background: `url(${this.state.backImg})`,
            
    };
    return(
            <main style = { mystyle } >
            { console.log(mystyle) }
            <div div class = "info container col-xxl-8 px-4 py-5" >
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">

                    </div>
                    <div class="content col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 ">{this.state.Name}</h1>
                        <p class="lead mb-4">{this.state.description}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-danger shadow btn-lg px-5 me-md-2 fw-bold">Get Ticket</button>
                            <button type="button" class="btn border-0 bg-white text-danger shadow btn-lg px-5 me-md-2 fw-bold">Watch Trailer</button>
                        </div>
                    </div>
                </div>
                </div>
    <div className="listMovie container">
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {this.state.movies.map((movie) => (
                <SwiperSlide>
                    <div className="box card" key={movie.imdbID} onClick={() => this.showMovie(movie)}>
                        <img src={movie.Poster} alt="movieImg" />
                        <div className="text">
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
            </main >
        );
    }
}

export default List;