import background from '../../../assets/footer.png'
import decor from "../../../assets/decor-red-circle.png";
import linkedIn from "../../../assets/in.svg";
import twitter from "../../../assets/twitter.svg";
import facebook from "../../../assets/facebook.svg";
import pinterest from "../../../assets/pinterest.svg";
import {Decoration, FlexBox, FooterBox, Link, Logo} from "./Footer.styledComponent";

const Footer = () => {
    return (
        <FooterBox background={background}>
            <FlexBox>
                <Decoration src={decor}/>
                <FlexBox>
                    <Link href="#"><Logo src={linkedIn}/></Link>
                    <Link href="#"><Logo src={twitter}/></Link>
                    <Link href="#"><Logo src={facebook}/></Link>
                    <Link href="#"><Logo src={pinterest}/></Link>
                </FlexBox>
            </FlexBox>
        </FooterBox>
    )
}

export default Footer;