import SectionContent from "../SectionContent";
export default function Scan() {
    return (
        <>
            <SectionContent
                lefttitle="Get your"
                midtitle="website scanned"
                righttitle="for the cookies it uses"
                boxtext="Identify all the cookies with the click of a button"
                firstpara="GDPR Cookie Consent plugin’s scan service crawls and scans the pages on the website and identifies the cookies used. The cookies thus identified are then added to the cookies list in the plugin along with the other necessary details."
                secondpara="You can also add the cookies manually. The plugin gives you the option to change the details of the cookies so that you can add any additional information to your users."
                thirdpara="You can also export the details of the cookies to a CSV file for later use."
                buttontext="Get plugin now"
                sectionimage="/images/Scan-Image.svg"
                flip="row-reverse"
                box2="true"
                boxtext2="The number of pages scanned for cookies is limited to 2000 pages/domain.
                If you have more than 2000 pages on your website, please contact support."
                boxtextfont2="nunito-bold"
                boxtextcolor2="#0A0A0A"
                boxtextsize2="17px"
            />
        </>
    );
}
