import styles from '@/app/styles/components/second-section.module.scss'
import CustomNumberFormat from "@/app/components/CustomNumberFormat";

const SecondSection = ({data}) => {

    const patternImage = {
        backgroundImage: `url(pattern.png)`,
        backgroundRepeat: "repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const studentImage = {
        backgroundImage: `url(student.png)`,
        backgroundRepeat: "repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        width: '360px',
        height: '360px',
        borderRadius: '50%',
    }


    return <div className={styles.secondSection}>
        <div className={'container'}>
            <div className={'inner-container'}>
                <div className={styles.student}>
                    <div className={styles.left}>
                        <div style={patternImage}>
                            <div style={studentImage}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <h2>About the apprenticeship</h2>
                        <p>
                            {data?.scholarship?.about[0]?.data}
                        </p>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.leftDescription}>
                        <div className={styles.leftDescriptionContainer}>
                            <div className={styles.leftDescriptionTop}>
                                <label className={styles.labelPrimary}>Scholarship value</label>
                                <label>€<CustomNumberFormat value={data?.scholarship?.total_value}/></label>
                            </div>
                            <div className={styles.leftDescriptionBottomWrapper}>
                                <hr/>
                                <div className={styles.leftDescriptionBottom}>
                                    <div className={styles.leftDescriptionItem}>
                                        <label className={styles.labelPrimary}>Tuition covered</label>
                                        <label>€<CustomNumberFormat value={data?.scholarship?.tuition}/></label>
                                    </div>
                                    <div className={styles.leftDescriptionItem}>
                                        <label className={styles.labelPrimary}>Remaining</label>
                                        <label>€<CustomNumberFormat value={data?.scholarship?.remaining}/></label>
                                    </div>
                                    <div className={styles.leftDescriptionItem}>
                                        <label className={styles.labelPrimary}>Living stipend</label>
                                        <label>€8,400 (€700/month)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightDescription}>
                        <div className={styles.rightDescriptionTopContainer}>
                            <div className={styles.rightDescriptionTopItem}>
                                <label className={styles.labelPrimary}>Study commitment</label>
                                <label>{data?.scholarship?.study_commitment} hours / day</label>
                                <div className={styles.rightDescriptionTopItemDivider}/>
                                <p>{data?.scholarship?.study_commitment_text}</p>
                            </div>
                            <div className={styles.rightDescriptionTopItem}>
                                <label className={styles.labelPrimary}>Work commitment</label>
                                <label>{data?.scholarship?.internship_commitment} hours / day</label>
                                <div className={styles.rightDescriptionTopItemDivider}/>
                                <p>{data?.scholarship?.internship_commitment_text}</p>
                            </div>
                        </div>
                        <div className={styles.rightDescriptionMiddleContainer}>
                            <span/>
                            <label>GRADUATION</label>
                            <span/>
                        </div>
                        <div className={styles.rightDescriptionBottomContainer}>
                            <div className={styles.rightDescriptionBottomItem}>
                                <label className={styles.labelPrimary}>A full-time contract</label>
                                <label>1 Year / Full-Time</label>
                                <div className={styles.rightDescriptionTopItemDivider}/>
                                <p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SecondSection