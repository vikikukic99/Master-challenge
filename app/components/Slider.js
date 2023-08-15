"use client";
import styles from '@/app/styles/components/slider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = ({data}) => {

    const imageStyle = {
        backgroundImage: `url(pattern.png)`,
        backgroundRepeat: "repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        width: '100%',
        maxWidth: '1120px',
        height: '395px',
        margin: '0 auto'
    };

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        className: styles.sliderItem,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        customPaging: '30px'
    };

    const renderItems = (items) => {

        let result = []

        for(let item of [
            ...items,
            ...items
        ]) {

            const profileImageStyle = {
                backgroundImage: `url(${item.small_picture.rawFile.preview})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                width: '70px',
                height: '70px',
                minWidth: '70px',
                borderRadius: '50%'
            };


            result.push(<div className={styles.sliderItem} key={'instructor-' + item.id}>
                <div className={styles.sliderItemWrapper}>
                    <div className={styles.sliderItemTitle}>
                        <div className={styles.sliderItemTitleContainer}>
                            <div style={profileImageStyle}/>
                            <div className={styles.sliderItemTitleContent}>
                                <label className={styles.labelPrimary}>{item.first_name} {item.last_name}</label>
                                <label>{item.current_position}</label>
                            </div>
                        </div>
                        <a href={'#'} target={'_blank'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z" fill="black"/>
                            </svg>
                        </a>
                    </div>
                    <div className={styles.sliderItemContent}>
                        <p>
                            This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.
                        </p>
                        <span>Education   ·   B.A. Visual Design</span>
                    </div>
                </div>
            </div>)
        }



        return result
    }

    return <div className={styles.slider}>

        <div style={imageStyle}/>
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {renderItems(data?.scholarship?.instructors)}
            </Slider>
        </div>

    </div>


}

export default SliderSection