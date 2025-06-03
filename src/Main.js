import './CSS/Main.css';
import hyperLinkImage from './Assets/Icon_Hyperlink.png';
import robotImageMain from './Assets/Robot.png';
import behanceIcon from './Assets/behance_icon.png';
import googleDriveIcon from './Assets/Google_drive_icon.png';
import topBarImage from './Assets/Top_bar_ThirdCard.png'
import belowTextureImage from './Assets/Below_texture.png';
import aboveTextureImage from './Assets/Above_texture.png';
import fontCatalogImage from './Assets/Font_catalog_icons.png';
import menuStylesImage from './Assets/Menu_styles_icons.png';
function Main() {

    let hyperlinkTag = "http://localhost:3000/"

    return (
        <main className='main'>
            <a href="https://www.behance.net/onboarding/hirerCreative" target="_blank" rel="noopener noreferrer">
                <article className="contentElement" id="contentElement1">
                    <img src={hyperLinkImage} class="hyperlinktag_contentElement1_main">
                    </img>

                    <h2>Entre em contato e faça seu orçamento</h2>
                    <p>Tem uma ideia ou projeto em mente? <strong>Fale comigo</strong> e descubra como
                        podemos tirar isso do papel com design estratégico e resultados reais.</p>
                </article>

            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <article className="contentElement" id="contentElement2">
                    <img src={robotImageMain} class="robot_image_main"></img>
                    <div>
                        <h2>Acesse meu portfólio</h2>
                        <img src={behanceIcon} class="behance_icon_main"></img>
                    </div>
                    <img src={hyperLinkImage} class="hyperlinktag_contentElement2_main">
                    </img>
                </article>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
                <article className="contentElement" id="contentElement3">
                        <img src={topBarImage} className="topImageBar"></img>
                        <img src={fontCatalogImage} className='contentElement3_catalogy_image_fontCatalogImage'></img>
                        <img src={menuStylesImage} className='contentElement3_catalogy_image_menuStyleImage'></img>
                    <div className="contentElement3_material">
                        <img src={googleDriveIcon}></img>
                        <h2>Materiais para Designers</h2>
                    </div>
                        <img src={belowTextureImage} className='contentElement3_textures_image_belowTexture'></img>
                        <img src={aboveTextureImage} className='contentElement3_textures_image_aboveTexture'></img>
                    <img src={hyperLinkImage} className="hyperlinktag_contentElement3_main"></img>
                </article>
            </a>
        </main>

    )



}

export default Main;