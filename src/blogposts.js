import { useState } from "react"
import { Card, Row, Col, Image, Container, Stack, Button} from "react-bootstrap"
import { TextCard, BlogCard, ImageCard, VideoCard, PortfolioZoom, ContactCard, MapCard, } from "./customBootstrap"

//Blog Ids
import blogIDs from "./content/data/blog_ids.json"

//Blog1 translations
import blog1Fi from "./content/translations/blog1_fi.json"
import blog1En from "./content/translations/blog1_en.json"

//Blog4 translations
import blog4Fi from "./content/translations/blog4_fi.json"
import blog4En from "./content/translations/blog4_en.json"

//Mockup comparisons
import comp1 from "./content/mockup_comparisons/mockup_vertailu_1.png"
import comp2 from "./content/mockup_comparisons/mockup_vertailu_2.png"
import comp3 from "./content/mockup_comparisons/mockup_vertailu_3.png"
import comp4 from "./content/mockup_comparisons/mockup_vertailu_4.png"

//Blog
import blogDemoPic from "./content/new_blog/blogDemoPic.png"

//blogpost ids
const about_implementation = blogIDs.about_implementation;
const comparison_to_mockups = blogIDs.comparison_to_mockups;
const helpful_3D_assets = blogIDs.helpful_3D_assets;
const last_minute_changes = blogIDs.last_minute_changes;
const new_in_blog = blogIDs.new_in_blog;

const BlogPostView = (props) => {
    let currentItem = props.item;
    let langId = props.lang;

    return(
        <>
            {
                currentItem == about_implementation?
                <BlogPost lang={langId} backButton={props.backButton}></BlogPost>:
                currentItem == last_minute_changes?
                <BlogPost2 lang={langId} backButton={props.backButton}></BlogPost2>:
                currentItem == comparison_to_mockups?
                <BlogPost3 lang={langId} backButton={props.backButton}></BlogPost3>:
                currentItem == helpful_3D_assets?
                <AssetBank lang={langId} backButton={props.backButton}></AssetBank>:
                currentItem == new_in_blog?
                <BlogPost4 lang={langId} backButton={props.backButton}/>:
                <BlogNotFound backButton={props.backButton}/>
            }
        </>
    )
}

const BlogNotFound = (props) => {
    return (
        <Card border="light" className="my-5">
            <Card.Body>
                <h1>Blogpost not found</h1>
                <p>
                    Blogpost does not exist or it has been moved to another location. 
                </p>
                {props.backButton}
            </Card.Body>
        </Card>
    )
}

const BlogPost = (props) => {
    const [lang, setLang] = useState(blog1En);
    if (props.lang == "fi" && lang == blog1En) {
        setLang(blog1Fi);
    }
    if (props.lang == "en" && lang == blog1Fi) {
        setLang(blog1En);
    }
    return (
        <Container fluid="sm">
        <Row className="my-5 mx-auto">
        <Col >
        <Card border="light" className="my-5">
            <Card.Body>
                {props.backButton}
                <div class="text-center">
                    <h2>{lang.title}</h2>
                </div>
                <div style={{textAlign: 'right'}}>
                    <h6>{lang.author_and_date}</h6>
                </div>
                <br/>
                <h4>{lang.implementation_methods}</h4>
                <p>
                    {lang.paragraph_1_1}
                    <a href="https://reactjs.org/">{lang.paragraph_1_2}</a>
                    {lang.paragraph_1_3}
                    <a href="https://react-bootstrap.github.io/">{lang.paragraph_1_4}</a>
                    {lang.paragraph_1_5}
                    <a href="https://www.netlify.com/">{lang.paragraph_1_6}</a>
                    {lang.paragraph_1_7}
                </p>
                <Row>
                    <Col sm={12} md={6}>
                    <h5>{lang.why_react}</h5>
                    <ul>
                        <li>{lang.why_r_1}</li>
                        <li>{lang.why_r_2}</li>
                        <li>{lang.why_r_3}</li>
                        <li>{lang.why_r_4}</li>
                        <li>{lang.why_r_5}</li>
                    </ul>

                    <h5>{lang.why_react_bootstrap}</h5>
                        <ul>
                            <li>{lang.why_rb_1}</li>
                            <li>{lang.why_rb_2}</li>
                            <li>{lang.why_rb_3}</li>
                            <li>{lang.why_rb_4}</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6}>
                    <h5>{lang.why_netlify}</h5>
                    <ul>
                        <li>{lang.why_n_1}</li>
                            <ul>
                                <li>{lang.why_n_1_1}</li>
                            </ul>
                        <li>{lang.why_n_2}</li>
                        <li>{lang.why_n_3}</li>
                        <li>{lang.why_n_4}</li>
                        <li>{lang.why_n_5}</li>
                        <li>{lang.why_n_6}</li>
                        <li>{lang.why_n_7}</li>
                            <ul>
                                <li>{lang.why_n_7_1}</li>
                                <li>{lang.why_n_7_2}</li>
                                <li>{lang.why_n_7_3}</li>
                                <li>{lang.why_n_7_4}</li>
                                <li>{lang.why_n_7_5}</li>
                            </ul>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                    <h5>{lang.alternatives}</h5>
                        <p>JS:</p>
                            <ul>
                                <li>plain JS</li>
                                <li>jQuery</li>
                                <li>Angular</li>
                            </ul>
                        <p>CSS:</p>
                            <ul>
                                <li>Material UI</li>
                            </ul>
                    </Col>
                    <Col className="my-auto" sm={12} md={6}>
                        <div style={{border: '5px dashed rgb(0,80,100)', borderRadius: '5px', padding: '1rem', margin: '1rem'}}>
                            <p>
                            {lang.summary_1} <b>{lang.summary_2}</b>
                            </p>
                        </div>
                    </Col>
                </Row>
                <hr className="mb-5"/>
                <Row>
                    <Col>
                        <h4>{lang.structure}</h4>
                        <p>
                            {lang.paragraph_2_1}
                        </p>
                        <div style={{background: 'rgb(0,80,100)', height: 'auto', borderRadius: '20px', padding: '1rem', marginBottom: '1rem'}}>
                            <TextCard title="TextCard" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></TextCard>
                        </div>
                        <p>
                            {lang.paragraph_2_2}
                        </p>
                    </Col>
                </Row>
                <hr className="mb-5" />
                <Row>
                    <Col>
                        <h4>{lang.functionality_and_features}</h4>
                        <ul class="checkList">
                            <li>{lang.ff_1}</li>
                            <li>{lang.ff_2}</li>
                            <li>{lang.ff_3}</li>
                            <li>{lang.ff_4}</li>
                            <li>{lang.ff_5}</li>
                            <li>{lang.ff_6}</li>
                            <li>{lang.ff_7}</li>
                            <li>{lang.ff_8}</li>
                        </ul>
                    </Col>
                </Row>
                {props.backButton}
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    )
}

const BlogPost2 = (props) => {
    return (
        <Container fluid="sm">
        <Row className="my-5 mx-auto">
        <Col >
        <Card border="light" className="my-5">
            <Card.Body>
                {props.backButton}
                <div class="text-center">
                    <h2>Viimehetken muutoksia</h2>
                </div>
                <div style={{textAlign: 'right'}}>
                    <h6>Aku Laurila, 18.2.2022</h6>
                </div>
                <br/>
                <h4>Kaksi päivää jäljellä</h4>
                <p>Projektin palautuspäivä lähestyy ja olen saanut sivuston nyt jotakuinkin valmiiksi. Tein nyt vielä aika suuria muutoksia sivuston navigointiin. Järjestelin myös lähdekoodia 
                    <b> paljon</b> siistimmäksi. Vastaan tuli myös muutamia bugeja, joita korjailin. Suurin osa näistä bugeista liittyi mobiililaitteella selaamiseen. Korjattavaa on edelleen,
                    mutta sivusto vaikuttaa jo paljon "valmiimmalta".
                </p>
                <hr className="mb-5" />
                <h4>Uutta navigoinnissa ja reitityksessä</h4>
                <p>Aiempi versio navigoinnista käytti omaa 'hook'(useState()) -räpellystäni komponenttien renderöimiseen ja piilottamiseen, mutta otin nyt käyttöön <a href="https://reactrouter.com/">React Router</a>- 
                    ja <a href="https://github.com/react-bootstrap/react-router-bootstrap">React Router Bootstrap</a> -kirjastot. Näillä sain sivustolle toimivat URL-osoitteet, joiden avulla
                    voi linkin jakaa vaikkapa suoraan blogiin tai portfolioon. Myös selaimen takaisin- ja eteenpäin -toiminnot toimivat nyt lähes toivotulla tavalla. Blogin reititystä 
                    pitää vielä hienosäätää, mutta olen toistaiseksi siihen tyytyväinen. 
                </p>
                <hr className="mb-5" />
                <h4>Ota Yhteyttä -sivu</h4>
                <p>Sivuston aiemman version "Ota yhteyttä" -sivulla oli muutamia todella ikäviä bugeja, jotka liittyivät sivulle upotetuun karttaan. Olin aluksi tehnyt kartan ympyrän muotoiseksi,
                    mutta jostain syystä mobiililaitteella selatessa, eivät kartan ohjaimet toimineet kunnolla. Vaikka käyttäjä koskettaisi kartan ulkopuolelle, niin silti selain luuli käyttäjän
                    haluavan vierittää karttanäkymää. Ongelmaa ei ilmennyt ollenkaan työpöytä-versiossa, enkä loppujen lopuksi keksinyt muuta ratkaisua, kuin pitää kartan suorakulmaisena. Pyöristetyt
                    kulmat kuitenkin vaikuttavat toimivan ihan ok, joten olkoon nyt noin. Mielestäni kartta näyttää näinkin ihan hyvältä. 
                </p>
                <hr className="mb-5" />
                <Row>
                    <Col>
                        <h4>Uutta</h4>
                        <ul class="checkList">
                            <li>Toimivat URL-osoitteet</li>
                            <li>Eteen- ja taaksepäin navigointi</li>
                            <li>Helppolukuisempi lähdekoodi</li>
                            <li>Footer sivun alareunaan</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Muutettua</h4>
                        <ul>
                            <li>Kartta pyöreästä suorakulmioksi</li>
                            <li>Tyylimäärittelyä muutettu mielekkäämmäksi</li>
                            <li>Säädetty sivuston break-pointteja näyttökoon pienentyessä</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="mb-5" />
                <h4>Kehitettävää tulevaisuudessa</h4>
                    <ul>
                        <li>Tapa, jolla käsittelen blogi-kirjoituksia on edelleen hyvin sekava.</li>
                            <ul>
                                <li>Lähdekoodi pitäisi järjestellä uudelleen, sekä siistiä nätimmäksi</li>
                            </ul>
                        <li>Olisi mukavaa, jos blogipostaukseen voisi mennä suoraan linkin kautta</li>
                        <li>Ota yhteyttä -sivun karta ei ehkä ole tarpeellinen. Hyvin pärjäisi ilmankin</li>
                        <li>Sekä blogiin, että portfolioon voisi implementoida jonkinlaisen suodatus/hakuvaihtoehdon (Mikäli sisällön määrä kasvaa suuresti)</li>
                        <li>Ladattavia resursseja, kuten kuvia, voisi aina koittaa optimoida paremmin.</li>
                        <li>Footerin kanssa on pieniä ongelmia. En oikein ole osannut asetella sitä hyvin</li>
                    </ul>
                {props.backButton}
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    )
}

const BlogPost3 = (props) => {
    return (
        <Container fluid="sm">
        <Row className="my-5 mx-auto">
        <Col >
        <Card border="light" className="my-5">
            <Card.Body>
                {props.backButton}
                <div class="text-center">
                    <h2>Vertailua mockuppeihin</h2>
                </div>
                <div style={{textAlign: 'right'}}>
                    <h6>Aku Laurila, 19.2.2022</h6>
                </div>
                <br/>
                <h4>Mockupeista</h4>
                <p> Ennen sivuston varsinaisen kehitystyön alkamista, luonnostelin paintissa muutamia mock-up -kuvia tulevista alisivuista. Sivuston rakenne vastaa suurimmilta osin mock-uppeja, 
                    mutta "Yhteystiedot" -alasivu vaihtui "Ota Yhteyttä" -sivuksi. Myös sivulle suunnitellut yhteystiedot päätin korvata kartalla, sillä en nähnyt tarpeelliseksi jakaa 
                    puhelinnumeroani tai sähköpostiani julkisesti netissä. Yhteydenottolomakkeella voi jättää viestin, jonka jälkeen voin vastailla siihen normaalin sähköpostin kautta. 
                </p>
                <hr className="mb-5" />
                <h4>Vertailuja</h4>
                <div class="text-center">
                <Image src={comp1} className="mx-auto my-2" width='90%' style={{borderRadius: '30px'}}></Image>
                <Image src={comp2} className="mx-auto my-2" width='90%' style={{borderRadius: '30px'}}></Image>
                <Image src={comp3} className="mx-auto my-2" width='90%' style={{borderRadius: '30px'}}></Image>
                <Image src={comp4} className="mx-auto my-2" width='90%' style={{borderRadius: '30px'}}></Image>
                </div>
                {props.backButton}
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    )
}

const AssetBank = (props) => {
    return (
        <Container fluid="sm">
        <Row className="my-5 mx-auto">
        <Col >
        <Card border="light" className="my-5">
            <Card.Body>
                {props.backButton}
                <div class="text-center">
                    <h2>Kokoelma hyödyllistä 3D-materiaalia</h2>
                </div>
                <div style={{textAlign: 'right'}}>
                    <h6>Aku Laurila, 9.2.2022</h6>
                </div>
                <br/>
                <h4>3D-materiaalia ja assetteja</h4>
                <p>Tähän kasaan listaksi mielenkiintoisia, hyödyllisiä ja <b>pääosin ilmaista</b> 3D-materiaalia kategorioittain. Iso osa näistä sivuista/sivustoista on 
                istunut jo kauan kirjanmerkkikansioissani. Tarkemmat tiedot lisensseistä ja käyttöluvista löytyvät sitten sivustoilta itseltään.</p>
                <Row>
                    <Col sm={12} md={6}>
                    <h5>PBR- sekä proseduraalisia materiaaleja (Myös kuvatekstuureja): </h5>
                    <ul style={{marginLeft: "10%"}}>
                        <li><a href="https://katznboyz1.gumroad.com/l/blender-painter-shader-example-file-blend">[FREE] Blender Paint Shader Setup File</a> (katznboyz)</li>
                        <li><a href="https://www.cgbookcase.com/">cgbookcase</a></li>
                        <li><a href="https://www.poliigon.com/">Poliigon</a></li>
                        <ul>
                            <li>suurin osa maksullista, mutta muutama ilmainen seassa</li>
                        </ul>
                        <li><a href="https://ambientcg.com/">ambientCG</a> (Lennart Demes)</li>
                            <ul>
                                <li>Myös HDRI-kuvia</li>
                            </ul>
                        <li><a href="https://www.blenderinsight.com/">blenderInsight</a> (Joakim Tornhill)</li>
                        <li><a href="https://3dtextures.me/">3dtextures.me</a> (Joao Paulo)</li>
                        <li><a href="https://www.solarsystemscope.com/">solarSystemScope</a></li>
                            <ul>
                                <li>Avaruus- ja planeettateemaisia tekstuureja</li>
                                <li>Perustuu NASA:n kuviin</li>
                            </ul>
                        <li><a href="https://bis.interplanety.org/">Blender Interplanetary Storage</a> (Korchiy)</li>
                        <li><a href="https://www.sharetextures.com/">sharetextures</a></li>
                        <li><a href="https://www.textures.com/browse/pbr-materials/114558">textures.com</a></li>
                            <ul>
                                <li>Löytyy myös objekteja, skannauksia, decaleita ym.</li>
                                <li>Todella monipuolinen</li>
                            </ul>
                        <li><a href="https://www.blendernation.com/">Blendernation</a></li>
                            <ul>
                                <li>Monipuolinen tarjonta kaikenlaista mielenkiintoista</li>
                            </ul>
                        <li><a href="https://polyhaven.com/">Polyhaven</a></li>
                            <ul>
                                <li>Materiaaleja, objekteja ja HDRI-kuvia</li>
                            </ul>
                        <li><a href="https://unsplash.com/t/textures-patterns">Unsplash</a></li>
                        <li><a href="https://pixabay.com/">Pixabay</a></li>

                    </ul>
                    <h5>3d-objekteja/malleja (myös 3D-skannauksia): </h5>
                    <ul style={{marginLeft: "10%"}}>
                        <li><a href="https://polyhaven.com/">Polyhaven</a></li>
                            <ul>
                                <li>Materiaaleja, objekteja ja HDRI-kuvia</li>
                            </ul>
                            <li><a href="https://www.blendswap.com/">Blendswap</a></li>
                                <ul>
                                    <li>Käytännössä vain blenderille</li>
                                </ul>
                            <li><a href="https://nasa3d.arc.nasa.gov/models">NASA 3D Resources</a></li>
                                <ul>
                                    <li>NASA:n jakamia malleja sekä tekstuureja </li>
                                </ul>
                            <li><a href="https://evermotion.org/downloads">Evermotion</a></li>
                            <li><a href="https://3dsky.org/">3dsky</a></li>
                                <ul>
                                    <li>Pääasiassa maksullista, mutta todella paljon ilmaisia resursseja</li>
                                </ul>
                            <li><a href="https://3dwarehouse.sketchup.com/">3D Warehouse</a></li>
                                <ul>
                                    <li>CAD-malleja</li>
                                </ul>
                            <li><a href="https://www.turbosquid.com/Search/3D-Models/free">Turbosquid</a></li>
                                <ul>
                                    <li>Pääasiassa maksullista, mutta todella paljon ilmaisia resursseja</li>
                                </ul>
                            <li><a href="https://www.cgtrader.com/">cgtrader</a></li>
                                <ul>
                                    <li>Pääasiassa maksullista, mutta todella paljon ilmaisia resursseja</li>
                                </ul>
                            <li><a href="https://free3d.com/">Free3d</a></li>
                            <li><a href="https://dimensiva.com/free-3d-models/">Dimensiva</a></li>
                                <ul>
                                    <li>Muutama ilmainen malli</li>
                                </ul>
                            <li><a href="https://sketchfab.com/nebulousflynn/collections/cc0">Sketchfab 3D Cultural Heritage</a></li>
                                <ul>
                                    <li>3D-skannauksia museoiden näyttelyistä</li>
                                </ul>
                            <li><a href="https://unblast.com/3d-models/">unblast</a></li>
                            <li><a href="https://hum3d.com/free/">Hum3d</a></li>
                            <li><a href="https://blendermarket.com/">Blendermarket</a></li>
                                <ul>
                                    <li>Käytännössä vain blenderille</li>
                                </ul>
                            <li><a href="https://www.si.edu/search/3d-models?edan_q=&oa=1&edan_fq%5B0%5D=media_usage%3ACC0">Smithsonian</a></li>
                                <ul>
                                    <li>3D-skannauksia museoiden näyttelyistä</li>
                                </ul>
                        </ul>
                    </Col>
                </Row>
                {props.backButton}
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    )
}

const BlogPost4 = (props) => {
    const [lang, setLang] = useState(blog4En);
    if (props.lang == "fi" && lang == blog4En) {
        setLang(blog4Fi);
    }
    if (props.lang == "en" && lang == blog4Fi) {
        setLang(blog4En);
    }
    return (
        <Container fluid="sm">
        <Row className="my-5 mx-auto">
        <Col >
        <Card border="light" className="my-5">
            <Card.Body>
                {props.backButton}
                <div class="text-center">
                    <h2>{lang.title}</h2>
                </div>
                <div style={{textAlign: 'right'}}>
                    <h6>{lang.author_and_date}</h6>
                </div>
                <br/>
                <h4>{lang.blog_updated}</h4>
                <p>
                {lang.blog_updated_paragraph}
                </p>
                <hr className="mb-5" />
                <h4>{lang.new_in_blog}</h4>
                <Row>
                    <Col>
                        <ul style={{marginLeft: "10%", marginTop: "20%"}}>
                            <li>{lang.filter_by_title}</li>
                            <li>{lang.order}</li>
                                <ul>
                                    <li>{lang.alphabetical}</li>
                                    <li>{lang.according_to_date}</li>
                                </ul>
                            <li>{lang.blog_has_now_tags}</li>
                                <ul>
                                    <li>{lang.list_web}</li>
                                    <li>{lang.list_meta}</li>
                                    <li>{lang.list_3D}</li>
                                    <li>{lang.list_hobbies}</li>
                                    <li>{lang.list_more}</li>
                                </ul>
                            <li>{lang.filter_language}</li>
                        </ul>
                    </Col>
                    <Col>
                        <Image src={blogDemoPic} className="mx-auto my-2" minWidth='50%' style={{borderRadius: '5px'}}></Image>
                    </Col>
                </Row>
                <hr className="mb-5" />
                {props.backButton}
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    )
}

export {BlogPostView, BlogPost, BlogPost2, BlogPost3, AssetBank, BlogPost4}