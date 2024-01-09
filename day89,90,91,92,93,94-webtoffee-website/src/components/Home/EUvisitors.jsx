import SectionContent from "../SectionContent";

export default function EUvisitors() {
    return (
        <>
            <SectionContent 
                lefttitle="Show Cookie Consent Notice to Only"
                midtitle="EU Visitors"
                boxtext="Get location-based exclusion of the cookie notice"
                firstpara="GDPR requires you to take consent from the visitors from the EU. Our plugin helps you to show the cookie banner only for visitors from the European Union. When you enable the GeoIP feature, only visitors from the European Union will see the banner and can enable/disable cookies based on consent."
                thirdpara="Ideally, it is better to obtain cookie consent from all the visitors as a growing number of countries are adopting stricter privacy laws."
                buttontext="Get plugin now"
                sectionimage="/images/EUvisitors-Image.svg"
                flip="row-reverse"
            />
        </>
    );
}
