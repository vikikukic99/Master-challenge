'use client'
import styles from '@/app/styles/components/first-section.module.scss'
import Image from "next/image";
import {useEffect, useState} from "react";
import {format} from "date-fns";

const FirstSection = ({data}) => {

    let today = new Date()
    today = today.setDate(today.getDate() + 6)
    const [date, setDate] = useState(new Date(today))
    const [calculation, setCalculation] = useState()

    const imageStyle = {
        backgroundImage: `url(pattern.png)`,
        backgroundRepeat: "repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
    };

    useEffect(() => {
        let myInterval = setInterval(() => {

            const diff = date - new Date()

            if(diff > 0) {
                setCalculation({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 60),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                })
            }

            else {
                setCalculation(null)
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return <div className={styles.firstSection}>
        <div className={'container'}>
            <div className={'inner-container'}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2>
                            {data?.scholarship?.name}
                            <Image src={'/Icon.png'} alt={'icon'} width={266} height={266}></Image>
                        </h2>
                        <p>
                            <b>
                                A fully funded work-study program to launch your tech career
                            </b>
                        </p>
                        <p>
                            {data?.scholarship?.description[0]?.data}
                        </p>
                        <p>
                            <b>Position: </b>Marketing Performance
                        </p>

                        <button className={'btn'}>Apply Now</button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>
                            <Image src={'/Logo.png'} alt={'Logo'} width={80} height={80}></Image>
                            <div className={styles.titleContent}>
                                <label>Powered by:</label>
                                <h3>Zeltolab</h3>
                            </div>
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.counterContainer}>
                                <label className={styles.labelPrimary}>Application closes in</label>
                                {
                                    calculation &&
                                    <>
                                        <span>{calculation.days}</span>
                                        <span>Day</span>
                                        <span>:</span>
                                        <span>{calculation.hours}</span>
                                        <span>Hrs</span>
                                        <span>:</span>
                                        <span>{calculation.minutes}</span>
                                        <span>Min</span>
                                        <span>:</span>
                                        <span>{calculation.seconds}</span>
                                        <span>Seg</span>
                                    </>
                                }

                            </div>
                        </div>
                        <div className={styles.description}>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.item}>
                                    <label className={styles.labelPrimary}>Location</label>
                                    <label>{data?.scholarship?.location?.name}</label>
                                </div>
                                <div className={styles.item}>
                                    <label className={styles.labelPrimary}>Duration</label>
                                    <label>{data?.scholarship?.duration} Year <br/> Full-Time</label>
                                </div>
                                <div className={styles.item}>
                                    <label className={styles.labelPrimary}>Start date</label>
                                    <label>30 June 2020</label>
                                </div>
                                <div className={styles.item}>
                                    <label className={styles.labelPrimary}>End date</label>
                                    <label>3 Aug 2020</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={imageStyle} className={styles.firstSectionPattern}/>
    </div>
}

export default FirstSection