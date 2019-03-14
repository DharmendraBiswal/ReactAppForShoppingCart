import React from 'react';
import Header from './Header';
import { Footer } from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../assets/Header.css';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //headers:['signUp','login','users','profile']
            headers:['signUp','login']
        }
    }
    render(){
        return(
            <div>
                <Header headerValues={this.state.headers}/>
                {/*<div className="slider">
                <Carousel autoPlay={true}>
                <div>
                    <img src="./img1.jpeg" alt=""/>
                </div>
                <div>
                    <img src="./img3.jpg" alt=""/>    
                </div>
                <div>
                    <img src="./img4.jpg" alt=""/>
                </div>
            </Carousel>
            </div>*/}
                <Footer />
            </div>
        );
    }
}
export default HomePage;