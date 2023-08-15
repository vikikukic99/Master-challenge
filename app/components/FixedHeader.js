'use client'
import styles from '@/app/styles/components/fixed-header.module.scss'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const FixedHeader = () => {

    const counterData = useSelector((state) => state.counter?.data);


    return <div className={styles.header}>
        <div className={styles.item}>
            <label className={styles.mainLabel}>Zeptolab</label>
            <label>Marketing Performance</label>
        </div>
        <div className={styles.item}>
            <label className={styles.mainLabel}>Location</label>
            <label>Bangkok</label>
        </div>
        <div className={styles.item}>
            <label className={styles.mainLabel}>Duration</label>
            <label>1 Year Full-Time</label>
        </div>
        <div className={styles.item}>
            <label className={styles.mainLabel}>Start date</label>
            <label>3 Aug 2020</label>
        </div>
        <div className={styles.item}>
            <label className={styles.mainLabel}>Application deadline</label>
            <label>30 June 2020</label>
        </div>
        <div className={styles.item}>
            <label className={styles.mainLabel}>Application closes in</label>
            <label>{counterData.days} Day   :   {counterData.hours} Hrs   :   {counterData.minutes} Min :  {counterData.seconds} Seg</label>
        </div>
    </div>
}

export default FixedHeader