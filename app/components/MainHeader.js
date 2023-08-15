import styles from '@/app/styles/components/main-header.module.scss'
import Image from "next/image";


const MainHeader = () => {
    return <div className={styles.headerContainer}>
        <div className={'container'}>
            <div className={styles.content}>
                <h1>HARBOUR.SPACE <span>/INTERACTION DESIGN</span></h1>
                <Image src={'/burger.png'} alt={'Burger icon'} width={35} height={30}></Image>
                <button>Apply now</button>
            </div>
        </div>
    </div>
}

export default MainHeader