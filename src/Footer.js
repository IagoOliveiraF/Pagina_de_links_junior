import "./CSS/Footer.css";
import imageWilsonPersonal from './Assets/Wilsons_personal_image.png';
import figmaLayout from './Assets/Figma_layout.png';
import iconInstagram from './Assets/Instagram_icon.png';
import iconBehance from './Assets/behance_icon.png';
import iconGmail from './Assets/e-mail_icon.png';



function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerContent_apresentation">
                    <h6 className="footerOwnerApresentation">Quem é Júnior Melo?</h6>
                    <h2>O especialista que transforma ideias em resultados</h2>
                    <p class="footerContentParagraph">Com mais de 2 anos de experiência, ajudo empresas a fortalecer sua presença digital, valorizando seus produtos e serviços através de <strong>designs que encantam e, acima de tudo, convertem.</strong></p>
                    <p class="footerContentParagraph">Ao longo da minha trajetória, tive a oportunidade de <strong>colaborar com algumas agências de marketing digital,</strong> sempre com o compromisso de entregar soluções visuais eficazes e <strong>focadas em resultados concretos.</strong></p>
                    <p class="footerContentParagraph">Meu foco está em criar páginas de vendas e conteúdos visuais para redes sociais que não apenas chamam a atenção, mas também geram conversões reais.</p>
                    <div className="footerSocialLinks">
                        <div><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><img src={iconInstagram} alt="Icone do Instagram"></img></a></div>
                        <div><a href="https://www.behance.net/onboarding/hirerCreative" target="_blank" rel="noopener noreferrer" ><img src={iconBehance} alt="Icone do Behance"></img></a></div>
                        <div><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" ><img src={iconGmail} alt="Icone do gmail"></img></a></div>
                    </div>
                </div>
                <div className='footerContent_ImagePersonal'>

                    <img src={imageWilsonPersonal} className="wilsonImage"></img>
                    <img src={figmaLayout} className="figmaImage"></img>
                </div>
            </div>
        </footer>

    )
}


export default Footer;