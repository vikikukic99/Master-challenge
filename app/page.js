import MainHeader from "@/app/components/MainHeader";
import FirstSection from "@/app/components/FirstSection";
import SecondSection from "@/app/components/SecondSection";
import Slider from "@/app/components/Slider";
import FAQ from "@/app/components/FAQ";
import FixedHeader from "@/app/components/FixedHeader";

async function getData() {
    const res = await fetch(
        "https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab",
        { next: { revalidate: 10 } }
    );
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return null
    }
    return res.json();
}


export default async function Home() {

    const data = await getData()

    if(!data) {
        return ''
    }

    return (
        <main>
            <MainHeader data={data}/>
            <FirstSection data={data}/>
            <SecondSection data={data}/>
            <Slider data={data}/>
            <FAQ data={data}/>
            <FixedHeader/>
        </main>
    )
}
