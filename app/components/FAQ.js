'use client'
import styles from '@/app/styles/components/faq.module.scss'
import {useEffect, useState} from "react";


const FAQ = ({data}) => {

    const [categories, setCategories] = useState(data?.scholarship?.faqs?.categories ? data?.scholarship?.faqs?.categories : [])
    const [selectedCategory, setSelectedCategory] = useState(data?.scholarship?.faqs?.categories ? data?.scholarship?.faqs?.categories[0] : null)
    const [open, setOpen] = useState(false)
    const [filteredFAQ, setFilteredFAQ] = useState([])
    const [selectedFAQ, setSelectedFAQ] = useState()

    useEffect(() => {
        setFilteredFAQ(data?.scholarship?.faqs?.items.filter(x => x.type === selectedCategory))
    }, [selectedCategory])

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        setOpen(false)
    }

    const renderCategories = (categories) => {
        let result = []

        for(let category of categories) {
            result.push(<div onClick={() => handleCategoryClick(category)} key={category} className={styles.categoryItem}>
                {category}
            </div>)
        }

        return result
    }

    const renderFAQ = (faqs) => {
        let result = []

        for(let faq of faqs) {
            result.push(<div key={faq.question} className={styles.faqItem} onClick={() => setSelectedFAQ(faq.question)}>
                <div className={styles.faqHeader}>
                    <label className={styles.faqType}>{faq.type}</label>
                    <label className={styles.faqQuestion}>{faq.question}</label>
                    <button className={selectedFAQ === faq.question ? styles.buttonSelected : styles.button} onClick={() => setSelectedFAQ(faq.question)}>
                        {
                            selectedFAQ === faq.question &&
                            <>
                                -
                            </>
                        }
                        {
                            selectedFAQ !== faq.question &&
                            <>
                                +
                            </>
                        }
                    </button>
                </div>
                <div className={selectedFAQ === faq.question ? styles.faqContentSelected : styles.faqContent}>
                    <div>{faq.answer[0].data}</div>
                </div>
            </div>)
        }

        return result
    }

    return <div className={styles.faq}>
        <div className={'container'}>
            <div className={styles.header}>
                <h2>Frequently asked <br/>questions</h2>
                <div className={styles.filterContainer}>
                    <span>Filter by:</span>
                    <div className={styles.filterButton}>
                        <div className={styles.selected} onClick={() => setOpen(!open)}>{selectedCategory}</div>
                        {
                            open &&
                            <div className={styles.optionsContainer}>
                                {renderCategories(categories)}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div>
                {renderFAQ(filteredFAQ)}
            </div>
        </div>
    </div>
}

export default FAQ