import { useEffect, useState } from "react"
import { Navbar, Nav, NavDropdown, Row, Col, Image, Container, Stack, Button, Card, Accordion, Form} from "react-bootstrap"
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

//Custom Bootstrap
import { TextCard, BlogCard, ImageCard, VideoCard, PortfolioZoom, ContactCard, MapCard, BlogSortView} from "./customBootstrap"

//blogposts
import {BlogPostView} from "./blogposts.js"

//translations
import fiTranslation from './content/translations/fi.json'
import enTranslation from './content/translations/en.json'

//Blog Ids
import blogIDs from "./content/data/blog_ids.json"

//flag icons
import flagFI from './content/flag_fi.svg'
import flagEN from './content/flag_en.svg'

//Filter icon
import filterIcon from "./content/filter.svg"
//GitHub icon
import GHico from './content/GitHub-Mark-Light-32px.png'

//Thumbnails
import lightroom from './content/renders/lightroom/lightroom_thumb.jpg'
import livingroom from './content/renders/livingroom/livingroom_thumb.jpg'
import sink from './content/renders/sink/sink_thumb.jpg'
import corridor from './content/renders/corridor/corridor_thumb.jpg'
import office from './content/renders/office/office_thumb.jpg'
import fireroom from './content/renders/fireroom/fireroom_thumb.jpg'
import corridorroom from './content/renders/corridorroom/corridorroom_thumb.jpg'
import yellowroom from './content/renders/yellowroom/yellowroom_thumb.jpg'

import amberTHUMB from './content/renders/amber/amber_thumb.png'
import roadTHUMB from './content/renders/road/road_thumb.png'
import fabricTHUMB from './content/renders/fabric/fabric_thumb.gif'
import seedotTHUMB from './content/renders/seedot/seedot_thumb.png'

//Full size images
import lightroomFULL from './content/renders/lightroom/lightroom_Aku_Laurila.png'
import livingroomFULL from './content/renders/livingroom/livingroom_Aku_Laurila.png'
import sinkFULL from './content/renders/sink/sink_Aku_Laurila.png'
import corridorFULL from './content/renders/corridor/corridor_Aku_Laurila.png'
import officeFULL from './content/renders/office/office_Aku_Laurila.png'
import fireroomFULL from './content/renders/fireroom/fireroom_Aku_Laurila.png'
import corridorroomFULL from './content/renders/corridorroom/corridorroom_Aku_Laurila.png'
import yellowroomFULL from './content/renders/yellowroom/yellowroom_Aku_Laurila.png'

import waspinamber from './content/renders/amber/wasp_in_amber.png'

//Materials
import amberFULL from './content/renders/amber/amber_preview.png'
import roadFULL from './content/renders/road/road_preview.png'

import fabric1 from './content/renders/fabric/pillow1.png'
import fabric2 from './content/renders/fabric/pillow2.png'
import fabric3 from './content/renders/fabric/pillow3.png'
import fabric4 from './content/renders/fabric/pillow4.png'
import fabric5 from './content/renders/fabric/pillow5.png'
import fabric6 from './content/renders/fabric/pillow6.png'

import seedot from './content/renders/seedot/seedot.png'

//Viewport renders
import lightroomVIEWPORT from './content/renders/lightroom/lightroom_viewport.png'
import livingroomVIEWPORT from './content/renders/livingroom/livingroom_viewport.png'
import sinkVIEWPORT from './content/renders/sink/sink_viewport.png'
import corridorVIEWPORT from './content/renders/corridor/corridor_viewport.png'
import officeVIEWPORT from './content/renders/office/office_viewport.png'
import fireroomVIEWPORT from './content/renders/fireroom/fireroom_viewport.png'
import corridorroomVIEWPORT from './content/renders/corridorroom/corridorroom_viewport.png'
import yellowroomVIEWPORT from './content/renders/yellowroom/yellowroom_viewport.png'

//nodes
import amberNODES from './content/renders/amber/amber_nodes.png'
import roadDEMO from './content/renders/road/RoadShader_Demo.png'
import roadNODES from './content/renders/road/road_mask_nodes.png'

import fabricDEMO from './content/renders/fabric/fabric_demo.png'
import fabricNODES from './content/renders/fabric/fabric_nodes.png'

//REFS
import corridorREF from './content/renders/corridor/corridor_ref.jpg'
const livingroomREF = 'https://images.adsttc.com/media/images/5ea0/ca76/b357/6527/3b00/0008/slideshow/Three_Angle_House-01-high-res.jpg?1587595840'

const siteVersion = "1.3.2";

//blogpost ids
const about_implementation = blogIDs.about_implementation;
const comparison_to_mockups = blogIDs.comparison_to_mockups;
const helpful_3D_assets = blogIDs.helpful_3D_assets;
const last_minute_changes = blogIDs.last_minute_changes;
const new_in_blog = blogIDs.new_in_blog;

const SiteApp = () => {
    //Random float for the changing background picture
    let rndm = Math.random();
    return (
        <>
            <Router>
                <SiteNavBar rndm={rndm}></SiteNavBar>
            </Router>
        </>
    )
}

const SiteNavBar = (props) => {

    const [alerted, setAlerted] = useState(false);

    useEffect(() => {
        if (!alerted) {
            window.alert("!!! \n You are viewing an archived version of my previous home page! \n!!! \n If you want to contact me or see what I'm up to, check out about.akulaurila.com. The contact form on this site has been disabled.");
            setAlerted(true);
        }
    }, [alerted])

    //site language defaults to browser language
    const defaultLang = (str) => {
        let userLang = navigator.language || navigator.userLanguage; 
        console.log(userLang)
        if (str == "flag") {
            if (userLang == "fi-FI" || userLang == "fi" || userLang == "FI") {
                return flagFI;
            } else {
                return flagEN;
            }
        }
        else if (userLang == "fi-FI" || userLang == "fi" || userLang == "FI") {
            return fiTranslation;
        } else {
            return enTranslation;
        }
    }

    const [lang, setLang] = useState(defaultLang());
    const [langDisplay, setLangDisplay] = useState(defaultLang("flag"));

    //updates translation and display pic to given language
    const updateLanguage = (val) => {
        if (val == "fi") {
            setLang(fiTranslation);
            setLangDisplay(flagFI)
        } else {
            setLang(enTranslation);
            setLangDisplay(flagEN)
        }
    }
    //Lists possible background images and randomizes it
    const bgAlbum = [lightroom, livingroom, fireroom, corridorroom, yellowroom];
    let bgIndex = Math.floor(props.rndm * bgAlbum.length);

    //style for bg image
    const bgStyle = {
        backgroundImage: 'url("' + bgAlbum[bgIndex] + '")',
        backgroundSize: 'cover',
        filter: 'blur(4px)',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      };

    //style for bg overlay
    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.699)',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      };

      //style for footer
      const footerStyle = {
        position: 'relative',
        marginTop: '50%',
        padding: '10px 10px 0px 10px',
        bottom: '0',
        width: '100%',
        height: '150px',
        backgroundColor: 'rgba(20, 20, 20)',
        color: 'rgba(40, 40, 40)'
      }

      //style for language display flags
      const flagStyle = {
        border: "2px solid black", 
        borderRadius: "5px",
        height: "30px"
      }
      

    return (
        <>
            <div id="bgRender" style={bgStyle}></div>
            <div id="bgRenderoverlay" style={overlayStyle}></div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <LinkContainer to="/"><Navbar.Brand>
                            <img src={amberTHUMB} width="30" height="30"  className="d-inline-block align-top mx-1" alt=""/>
                            Aku Laurila
                        </Navbar.Brand></LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <LinkContainer to="/"><Nav.Link className="mx-2" >{lang.front_page}</Nav.Link></LinkContainer>
                            <LinkContainer to="/blog"><Nav.Link className="mx-2">{lang.blog}</Nav.Link></LinkContainer>
                            <LinkContainer  to="/portfolio"><Nav.Link className="mx-2">{lang.portfolio}</Nav.Link></LinkContainer>
                            <LinkContainer to="/contact"><Nav.Link className="mx-2">{lang.contact}</Nav.Link></LinkContainer>
                        </Nav>
                            <Nav>
                                <NavDropdown title={<img width="50" src={langDisplay} style={flagStyle}></img>}>
                                    <NavDropdown.Item href="" onClick={() => updateLanguage("fi")}><img width="50" src={flagFI} style={flagStyle}></img> FI</NavDropdown.Item>
                                    <NavDropdown.Item href="" onClick={() => updateLanguage("en")}><img width="50" src={flagEN} style={flagStyle}></img> EN</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<FrontPage lang={lang}/>}/>
                    <Route path="/blog/*" element={<BlogPage lang={lang} item="blog"/>}/>
                        <Route path={"/blog/" + about_implementation} element={<BlogPage lang={lang} item={about_implementation}/>}/>
                        <Route path={"/blog/" + comparison_to_mockups} element={<BlogPage lang={lang} item={comparison_to_mockups}/>}/>
                        <Route path={"/blog/" + last_minute_changes} element={<BlogPage lang={lang} item={last_minute_changes}/>}/>
                        <Route path={"/blog/" + helpful_3D_assets} element={<BlogPage lang={lang} item={helpful_3D_assets}/>}/>
                        <Route path={"/blog/" + new_in_blog} element={<BlogPage lang={lang} item={new_in_blog}/>}/>
                    <Route path="/portfolio" element={<PortfolioPage lang={lang} item="none"/>}/>
                    <Route path="/contact" element={<ContactPage lang={lang}/>}/>
                </Routes>
            <footer style={footerStyle}>
                <div data-nosnippet>
                    <p>© 2022-2023 Aku Laurila</p>
                    <p>{'Site version: '} {siteVersion}</p>
                    <a href="https://github.com/Ka-Q" style={{color: 'rgba(40, 40, 40)', textDecoration: 'none'}}><img src={GHico} style={{marginRight: '5px'}}/> GitHub (Tämä sivu ei julkinen)</a>
                </div>
            </footer>
        </>
    )
}

const FrontPage = (props) => {
    const lang = props.lang;
    return (
        <div>
            <Container fluid="sm">
                <Row className="my-5 mx-auto">
                    <Col sm={12} md={6} className="text-center">
                        <Image fluid src={waspinamber} width="500rem" className="mt-5" rounded></Image>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <TextCard title={lang.about_title} text={<p>{lang.about_1}<br/><br/>{lang.about_2}</p>}></TextCard>
                        <TextCard title={lang.about_site_title} text={<p>{lang.about_site_1}<a href="https://reactjs.org/">{lang.about_site_2}</a>{lang.about_site_3}<a href="https://react-bootstrap.github.io/">{lang.about_site_4}</a>{lang.about_site_5}</p>}></TextCard>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const BlogPage = (props) => {
    const lang = props.lang;
    
    const [scrollAmount, setscrollAmount] = useState(0);
    const [currentItem, setCurrentItem] = useState(props.item);

    //SORTING PARAMETERS
    const [webPressed, setWebPressed] = useState(true);
    const [metaPressed, setMetaPressed] = useState(true);
    const [tdPressed, setTdPressed] = useState(true);
    const [fiPressed, setFiPressed] = useState(true);
    const [enPressed, setEnPressed] = useState(true);
    const [hobbiesPressed, setHobbiesPressed] = useState(true);
    const [sortingMethod, setSortingMethod] = useState("dateDesc");
    const [keyWords, setKeyWords] = useState("");

    const updateSortingMethod = (val) => {
        window.scrollTo(0, 100)
        setSortingMethod(val)
    } 

    const updateWebPressed = () => {
        window.scrollTo(0, 100)
        if (webPressed) {
            setWebPressed(false);
        } else {
            setWebPressed(true);
        }
    }
    const updateMetaPressed = () => {
        window.scrollTo(0, 100)
        if (metaPressed) {
            setMetaPressed(false);
        } else {
            setMetaPressed(true);
        }
    }
    const updateTdPressed = () => {
        window.scrollTo(0, 100)
        if (tdPressed) {
            setTdPressed(false);
        } else {
            setTdPressed(true);
        }
    }
    const updateHobbiesPressed = () => {
        window.scrollTo(0, 100)
        if (hobbiesPressed) {
            setHobbiesPressed(false);
        } else {
            setHobbiesPressed(true);
        }
    }
    const updateFiPressed = () => {
        window.scrollTo(0, 100)
        if (fiPressed) {
            setFiPressed(false);
        } else {
            setFiPressed(true);
        }
    }
    const updateEnPressed = () => {
        window.scrollTo(0, 100)
        if (enPressed) {
            setEnPressed(false);
        } else {
            setEnPressed(true);
        }
    }

    //get the item from url and match
    const urlItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length);
    if (currentItem != urlItem) {
        setCurrentItem(urlItem);
    }

    //functionality for BackButton
    const backButtonFunc = () => {
        setCurrentItem("blog");
        window.scrollTo(0, scrollAmount);
    }
    const BackButton = () => {
        return (
            <div style={{textAlign: 'right'}}>
                <LinkContainer to={"/blog"}><Button variant="danger" className="mx-auto" onClick={() => backButtonFunc()}>{lang.close_button}</Button></LinkContainer>
            </div>
        )
    }

    //BlogFilter component
    const BlogFilter = () => {

        let flagStyleButton = {
            border: "2px solid black", 
            borderRadius: "5px",
            width: "50px"
        }
    
        let flagStyleButtonDisabled = {
            border: "2px solid black", 
            borderRadius: "5px",
            width: "50px",
            filter: "brightness(40%)"
        }

        let tagButtonStyle = {
            backgroundColor: "rgb(0,150,200)", 
            borderColor: "rgb(90, 210,230)"
        }

        const changeAccordionStyle = () => {
            //change style of accordion
            let accordion = document.querySelector(".accordion-button");
            console.log(accordion)
            if (accordion) {
                accordion.style.color = "black"
                accordion.style.backgroundColor = "white"
                accordion.style.boxShadow = "0 0 0 0"
                accordion.style.borderBottom = "1px solid rgb(200, 200, 200)"
            }
        }

        const clearfilters = () => {
            setWebPressed(true);
            setMetaPressed(true);
            setTdPressed(true);
            setFiPressed(true);
            setEnPressed(true);
            setHobbiesPressed(true);
            setSortingMethod("dateDesc");
            setKeyWords("");
            window.scrollTo(0, 100)
        }

        return (
            <div id="customAccordion" onClick={() => changeAccordionStyle()}>
            <Card>
                <Accordion defaultActiveKey="0" flush style={{backgroundColor: "white"}}>
                    <Accordion.Item eventKey="1">
                        
                        <Accordion.Header>
                            <h3><img src={filterIcon} width="25px" className="mx-2 mb-1"></img>{lang.filter}</h3>
                        </Accordion.Header>
                        
                        <Accordion.Body>
                            <Card.Body>
                                <Row className="mb-2">
                                <label> {lang.search_by_title}:
                                    <input className="form-control" key="searchInput" placeholder={lang.search_by_title} value={keyWords} onChange={(e) => setKeyWords(e.target.value)}/>
                                </label>
                                </Row>
                                <hr/>
                                <Row className="mb-2">
                                <label> {lang.sort}:
                                    <select className="form-select" value={sortingMethod} onChange={(e) => updateSortingMethod(e.target.value)}>
                                        <option value="dateDesc">{lang.date_descending}</option>
                                        <option value="dateAsc">{lang.date_ascending}</option>
                                        <option value="alphAsc">{lang.alphabetical_ascending}</option>
                                        <option value="alphDesc">{lang.alphabetical_descending}</option>
                                    </select>
                                </label>
                                </Row>
                                <hr/>
                                <p>{lang.tags}</p>
                                <Row>
                                    <Col className="text-center">
                                    {
                                        webPressed?
                                        <Button variant="primary" className="text-nowrap my-1 tagButton lightHover" style={tagButtonStyle} onClick={() => updateWebPressed()}>{lang.web}</Button>:
                                        <Button variant="light" className="text-nowrap my-1" onClick={() => updateWebPressed()}>{lang.web}</Button>
                                    }
                                    </Col>
                                    <Col className="text-center">
                                    {
                                        metaPressed?
                                        <Button variant="primary" className="text-nowrap my-1 tagButton lightHover" style={tagButtonStyle} onClick={() => updateMetaPressed()}>Meta</Button>:
                                        <Button variant="light" className="text-nowrap my-1" onClick={() => updateMetaPressed()}>Meta</Button>
                                    }
                                    </Col>
                                    <Col className="text-center">
                                    {
                                        tdPressed?
                                        <Button variant="primary" className="text-nowrap my-1 tagButton lightHover" style={tagButtonStyle} onClick={() => updateTdPressed()}>3D</Button>:
                                        <Button variant="light" className="text-nowrap my-1" onClick={() => updateTdPressed()}>3D</Button>
                                    }
                                    </Col>
                                    <Col className="text-center">
                                    {
                                        hobbiesPressed?
                                        <Button variant="primary" className="text-nowrap my-1 tagButton lightHover" style={tagButtonStyle} onClick={() => updateHobbiesPressed()}>Vapaa-aika</Button>:
                                        <Button variant="light" className="text-nowrap my-1" onClick={() => updateHobbiesPressed()}>Vapaa-aika</Button>
                                    }
                                    </Col>
                                </Row>
                                <hr/>
                                <p>{lang.languages}:</p>
                                <Row className="mx-auto">
                                    <Col className="text-center" style={{marginBottom: "1rem"}}>
                                        {
                                            fiPressed?
                                            <img src={flagFI} style={flagStyleButton} class="hover" onClick={() => updateFiPressed()}/>:
                                            <img src={flagFI} style={flagStyleButtonDisabled} class="hover" onClick={() => updateFiPressed()}/>
                                        }
                                    </Col>
                                    <Col className="text-center">
                                        {
                                            enPressed?
                                            <img src={flagEN} style={flagStyleButton} class="hover" onClick={() => updateEnPressed()}/>:
                                            <img src={flagEN} style={flagStyleButtonDisabled} class="hover" onClick={() => updateEnPressed()}/>
                                        }
                                    </Col>
                                </Row>
                                <hr/>
                                <Row className="mx-auto">
                                    <Col className="text-center">
                                        <Button variant="danger" onClick={() => clearfilters()}>{lang.clear_filters}</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            </div>
        )
    }

    //Blog Preview Cards
    const readMorefunc = (itm) => {
        setCurrentItem(itm);
        window.scrollTo(0, 0);
    }

    const blogPreviewsJson = ([
        {
            id: comparison_to_mockups,
            date: "19.2.2022",
            flag: "fi",
            title: lang.comparison_to_mockups_title,
            text: lang.comparison_to_mockups_text,
            tags: "meta"
        },
        {
            id: last_minute_changes,
            date: "18.2.2022",
            flag: "fi",
            title: lang.last_minute_changes_title,
            text: lang.last_minute_changes_text,
            tags: "meta"
        },
        {
            id: about_implementation,
            date: "13.2.2022",
            flag: "both",
            title: lang.about_implementation_title,
            text: lang.about_implementation_text,
            tags: "meta,web"
        },
        {
            id: helpful_3D_assets,
            date: "9.2.2022",
            flag: "fi",
            title: lang.helpful_3D_assets_title,
            text: lang.helpful_3D_assets_text,
            tags: "3D"
        },
        {
            id: new_in_blog,
            date: "10.4.2022",
            flag: "both",
            title: lang.new_in_blog_title,
            text: lang.new_in_blog_text,
            tags: "meta,web"
        }
    ]);

    //Keep only selected languages
    let tempJsonLang = [];
    for (let i = 0; i < blogPreviewsJson.length; i++) {
        if (fiPressed && !enPressed && (blogPreviewsJson[i].flag == "fi" || blogPreviewsJson[i].flag == "both" )) {
            tempJsonLang.push(blogPreviewsJson[i])
        }
        if (!fiPressed && enPressed && (blogPreviewsJson[i].flag == "en" || blogPreviewsJson[i].flag == "both" )) {
            tempJsonLang.push(blogPreviewsJson[i])
        }
        if (fiPressed && enPressed) {
            tempJsonLang.push(blogPreviewsJson[i])
        }
    }

    //Keep only selected tags
    let tempJsonTags = [];
    for (let i = 0; i < tempJsonLang.length; i++) {
        let tags = tempJsonLang[i].tags.split(",");
        for (let j = 0; j < tags.length; j++) {
            if (webPressed && tags[j] == "web") {
                if (tempJsonTags[tempJsonTags.length-1] != tempJsonLang[i]) {
                    tempJsonTags.push(tempJsonLang[i])
                }
            }
            if (metaPressed && tags[j] == "meta") {
                if (tempJsonTags[tempJsonTags.length-1] != tempJsonLang[i]) {
                    tempJsonTags.push(tempJsonLang[i])
                }
            }
            if (tdPressed && tags[j] == "3D") {
                if (tempJsonTags[tempJsonTags.length-1] != tempJsonLang[i]) {
                    tempJsonTags.push(tempJsonLang[i])
                }
            }
            if (hobbiesPressed && tags[j] == "hobbies") {
                if (tempJsonTags[tempJsonTags.length-1] != tempJsonLang[i]) {
                    tempJsonTags.push(tempJsonLang[i])
                }
            }
        }
    }

    //Keep only items containing keywords
    let tempJsonTitles = [];
    for (let i = 0; i < tempJsonTags.length; i++) {
        if ((tempJsonTags[i].title + "").toLowerCase().includes(keyWords.toLowerCase().trim())) {
            tempJsonTitles.push(tempJsonTags[i]);
        }
    }

    //sort remaining blog entries with selected method
    let tempJsonSorted = sortJson(tempJsonTitles, sortingMethod);
    

    //items Per Page Selector
    const [pageNumber, setPageNumber] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const itemsPerPageSelector = () => {

        let opt1 = 5;
        let opt2 = 10;
        let opt3 = 25;

        return (
            <select className="form-select" style={{width: "auto", display: "inline-block", cursor: "pointer"}} value={itemsPerPage} onChange={(e) => updateItemsPerPage(e.target.value)}>
                <option value={opt1}>{opt1}</option>
                <option value={opt2}>{opt2}</option>
                <option value={opt3}>{opt3}</option>
            </select>
        )
    }

    //items per page
    const updateItemsPerPage = (val) => {
        if (itemsPerPage != val) {
            setItemsPerPage(val)
            setPageNumber(1);
            window.scrollTo(0, 100)
        }
    }

    //Page numbering
    const updatePageNumber = (str) => {
        if (str == "next") {
            if (pageNumber * itemsPerPage < tempJsonSorted.length) {
                setPageNumber(pageNumber + 1);
            } else {
                setPageNumber(1);
            }
        }
        if (str == "previous") {
            if (pageNumber - 1 > 0) {
                setPageNumber(pageNumber - 1);
            } else {
                setPageNumber(Math.ceil(tempJsonSorted.length / itemsPerPage));
            }
        }
        window.scrollTo(0, 100)
    }

    let cutMin = ((pageNumber * itemsPerPage) - itemsPerPage)
    let cutMax = (pageNumber * itemsPerPage)
    let tempJsonCut = tempJsonSorted.slice(cutMin, cutMax);


    //Mapping JSON to BLogCards
    let blogPreviewsList = tempJsonCut.map((n, index) => {
        let tags = n.tags.split(",");
        return (
            <BlogCard 
                key={index} 
                lang = {lang}
                date={n.date} 
                flag={n.flag} 
                tags={tags}
                title={n.title} 
                text={n.text} 
                more={<LinkContainer to={n.id}>
                        <Button variant="dark" onClick={() => readMorefunc(n.id)}>{lang.read_more_button}</Button>
                    </LinkContainer>}>
            </BlogCard>
        )
    })

    //page Controls
    const PageControls = () => {
        return (
            <Card>
                <Card.Body>
                    <Stack direction="horizontal">
                        <Button variant="secondary" className="me-auto" onClick={() => updatePageNumber("previous")}>{lang.previous}</Button>
                        <div className="mx-auto text-center" style={{margin: "0 1rem"}}><div className="mx-2">{lang.showing} {itemsPerPageSelector()} {lang.items_per_page}</div></div>
                        <Button variant="secondary" className="ms-auto" onClick={() => updatePageNumber("next")}>{lang.next}</Button>
                    </Stack>
                    <h5 className="mx-auto text-center mt-3">{lang.currently_viewing_page} <b>{pageNumber} / {Math.ceil(tempJsonSorted.length / itemsPerPage)}</b></h5>
                </Card.Body>
            </Card>
        )
    }

    //Displaying selected blog-post, if none selected -> show filter and previews
    if (currentItem == "blog") {
        return (
            <Container fluid="lg">
                <Row><h1 className="mt-5 text-center" style={{color: "white"}}>{lang.blog}</h1></Row>
                <Row className="mt-5 mx-auto">
                    <Col lg={3}>
                        <div style={{position: "sticky", top: "5rem", bottom: "5rem", marginBottom: "3rem"}}>
                            {BlogFilter()}
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="mb-5">
                            {PageControls()}
                        </div>
                        <div onClick={() => setscrollAmount(window.pageYOffset)}>
                            {blogPreviewsList} 
                        </div>
                        <div className="mb-5">
                            {PageControls()}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <BlogPostView lang={lang.id} item={currentItem} backButton={<BackButton></BackButton>}></BlogPostView>
        )
    }
}

const PortfolioPage = (props) => {
    const lang = props.lang;

    //Image albums for portfolio
    const lightroomAlbum = [lightroomFULL, lightroomVIEWPORT];
    const sinkAlbum = [sinkFULL, sinkVIEWPORT];
    const livingroomAlbum = [livingroomFULL, livingroomVIEWPORT, livingroomREF];
    const corridorAlbum = [corridorFULL, corridorVIEWPORT, corridorREF];
    const officeAlbum = [officeFULL, officeVIEWPORT];
    const fireroomAlbum = [fireroomFULL, fireroomVIEWPORT];
    const corridorroomAlbum = [corridorroomFULL, corridorroomVIEWPORT];
    const yellowroomAlbum = [yellowroomFULL, yellowroomVIEWPORT];

    const amberAlbum = [amberFULL, amberNODES, waspinamber];
    const roadAlbum = [roadFULL, roadDEMO, roadNODES];
    const fabricAlbum = [fabricDEMO, fabric1, fabric2, fabric3, fabric4, fabric5, fabric6, fabricNODES];
    const seedotAlbum = [seedot];

    const [currentItem, setCurrentItem] = useState(props.item);
    const [scrollAmount, setscrollAmount] = useState(0);

    //functionality for 'back button' and clicking a preview image
    const backButtonFunc = () => {
        setCurrentItem("none");
        window.scrollTo(0, scrollAmount);
    }

    const setCurrentItemfunc = (itm) => {
        setCurrentItem(itm);
        window.scrollTo(0, 0);
    }

    const BackButton = () => {
        return (
        <Stack className="mt-2" direction="horizontal">
            <Button variant="danger" className="mx-auto" onClick={() => backButtonFunc("none")}>{lang.close_button}</Button>
        </Stack>
        )
    }

    //showing the selected album-view, if none selected -> show thumbnails
    if (currentItem == "none") {
        return (
            <div onClick={() => setscrollAmount(window.pageYOffset)}>
                <Container fluid="sm">
                    <Row><h1 className="mt-5 text-center" style={{color: "white"}}>{lang.portfolio}</h1></Row>
                    <Row><p className="mt-5 text-center" style={{color: "white"}}>{lang.portfolio_explanation_1}<b>{lang.portfolio_explanation_2}</b>{lang.portfolio_explanation_3}</p></Row>
                    <Row><h2 className="mt-5 text-center" style={{color: "white"}}>{lang.portfolio_3D_architecture}</h2></Row>
                    <Row className="mx-auto">
                        <Col sm={6} md={6} lg={3} className="text-center">
                            <div role="button" onClick={() => setCurrentItemfunc("lightroom")} class="hover"><ImageCard src={lightroom}></ImageCard></div>
                            <div role="button" onClick={() => setCurrentItemfunc("sink")} class="hover"><ImageCard src={sink}></ImageCard></div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="text-center" >
                            <div role="button" onClick={() => setCurrentItemfunc("livingroom")} class="hover"><ImageCard src={livingroom}></ImageCard></div>
                            <div role="button" onClick={() => setCurrentItemfunc("corridor")} class="hover"><ImageCard src={corridor}></ImageCard></div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="text-center" >
                            <div role="button" onClick={() => setCurrentItemfunc("office")} class="hover"><ImageCard src={office}></ImageCard></div>
                            <div role="button" onClick={() => setCurrentItemfunc("fireroom")} class="hover"><ImageCard src={fireroom}></ImageCard></div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="text-center" >
                            <div role="button" onClick={() => setCurrentItemfunc("corridorroom")} class="hover"><ImageCard src={corridorroom}></ImageCard></div>
                            <div role="button" onClick={() => setCurrentItemfunc("yellowroom")} class="hover"><ImageCard src={yellowroom}></ImageCard></div>
                        </Col>
                    </Row>
                    <Row><h2 className="mt-5 text-center" style={{color: "white"}}>{lang.portfolio_3D_animation}</h2></Row>
                    <Row className="text-center">
                        <Col sm={12} md={6}>
                            <VideoCard src={"LU1qm1Z5vc0?rel=0&amp;"}></VideoCard>
                        </Col>
                        <Col sm={12} md={6}>
                            <VideoCard src={"lAv3068cSfU?rel=0&amp;"}></VideoCard>
                        </Col>
                        <Col sm={12} md={6}>
                            <VideoCard src={"ula8sPFAoPs?rel=0&amp;"}></VideoCard>
                        </Col>
                        <Col sm={12} md={6}>
                            <VideoCard src={"CE8GCF4AQs4?rel=0&amp;"}></VideoCard>
                        </Col>
                    </Row>
                    <Row><h2 className="mt-5 text-center" style={{color: "white"}}>{lang.portfolio_3D_materials}</h2></Row>
                    <Row className="mx-auto mt-3 mb-5">
                        <Col sm={6} md={6} lg={3} className="text-center">
                            <div role="button" onClick={() => setCurrentItemfunc("amber")} class="hover"><img responsive width="100%" alt="Amber" src={amberTHUMB}/></div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="text-center">
                            <div role="button" onClick={() => setCurrentItemfunc("road")} class="hover"><img responsive width="100%" alt="Road" src={roadTHUMB}/></div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="text-center">
                            <div role="button" onClick={() => setCurrentItemfunc("fabric")} class="hover"><img responsive width="100%" alt="Fabric" src={fabricTHUMB}/></div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="text-center">
                            <div role="button" onClick={() => setCurrentItemfunc("seedot")} class="hover"><img responsive width="100%" alt="Seedot" src={seedotTHUMB}/></div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
    if (currentItem == "lightroom") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={lightroomAlbum} title="Lightroom" text="Tämä kuva on tehty ilman referenssiä. Kuvassa 2 on viewport-render."></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "sink") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={sinkAlbum} title="Sink" text="Testasin kokoelmaa erilaisista 3D-malleista. Kuvassa 2 viewport-render"></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "livingroom") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={livingroomAlbum} title="Livingroom" text={<p>Tämä kuva on tehty mallikuvan pohjalta: (<a href={"https://www.archdaily.com/938171/three-angle-house-megowan-architectural/5ea0ca76b35765273b000008-three-angle-house-megowan-architectural-photo?next_project=no"}>Kuva 3</a>, Albumista "Three Angle House / Megowan Architectural", © Anthony Richardson).</p>}></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "corridor") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={corridorAlbum} title="Corridor" text="Mallikuvan pohjalta tehty renderi käytävästä. Mallikuva lisenssiä CC0."></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "office") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={officeAlbum} title="Office" text="Renderi jonkinlaisesta työtilasta/kotitoimistosta"></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "fireroom") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={fireroomAlbum} title="Fireroom" text="Renderi olohuoneesta, jossa on takka"></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "corridorroom") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={corridorroomAlbum} title="Corridorroom" text="Renderi modernin asunnon käytävästä."></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "yellowroom") {
        return(
            <div>
                <BackButton></BackButton>
                <PortfolioZoom src={yellowroomAlbum} title="Yellowroom" text="Renderi aamuisesta olohuoneesta ja höyryävistä kahvikupposista."></PortfolioZoom>
                <BackButton></BackButton>
            </div>
        )
    }
    if (currentItem == "amber") {
        return(
            <div>
                <div style={{maxWidth: '50rem'}} className="mx-auto">
                <BackButton></BackButton>
                <PortfolioZoom src={amberAlbum} title="Amber" text={<p>Proseduraalisesti toteutettu materiaali, joka esittää meripihkaa. Tämä materiaali oli luotu <a href="https://youtu.be/ula8sPFAoPs">"Wasp in Amber"</a> -animaatiota varten</p>}></PortfolioZoom>
                <BackButton></BackButton>
                </div>
            </div>
        )
    }
    if (currentItem == "road") {
        return(
            <div>
                <div style={{maxWidth: '50rem'}} className="mx-auto">
                <BackButton></BackButton>
                <PortfolioZoom src={roadAlbum} title="Road" text="Proseduraalinen systeemi, jolla voi luoda erilaisia asfaltti-pintoja. Muokattavia parametreja ovat esimerkiksi asfaltin ikä ja kosteus. Myös mm. viivojen näkyvyys, väri, etäisyydet ja paksuudet ovat säädettävissä. Kuvassa 3 on node-graafi maalauksien mustavalkoisesta maskista. "></PortfolioZoom>
                <BackButton></BackButton>
                </div>
            </div>
        )
    }
    if (currentItem == "fabric") {
        return(
            <div>
                <div style={{maxWidth: '50rem'}} className="mx-auto">
                <BackButton></BackButton>
                <PortfolioZoom src={fabricAlbum} title="Fabric" text="Proseduraalinen systeemi, jolla voi generoida monia erilaisia kankaita. Albumissa muutamia esimerkkejä ja kuvia sotkuisesta node-graafista."></PortfolioZoom>
                <BackButton></BackButton>
                </div>
            </div>
        )
    }
    if (currentItem == "seedot") {
        return(
            <div>
                <div style={{maxWidth: '50rem'}} className="mx-auto">
                <BackButton></BackButton>
                <PortfolioZoom src={seedotAlbum} title="Seedot" text="Täysin proseduraalisti generoidut materiaalit"></PortfolioZoom>
                <BackButton></BackButton>
                </div>
            </div>
        )
    }
}

const ContactPage = (props) => {
    let lang = props.lang;
    return (
        <div>
            <Container fluid="sm">
                <Row className="my-5 mx-auto">
                    <Col sm={12} md={6} className="text-center mt-5" >
                        <MapCard></MapCard>
                        <h2 style={{color: "white"}}>{lang.map_description}</h2>
                    </Col>
                    <Col sm={12} md={6}>
                        <ContactCard lang={lang}></ContactCard>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const sortJson = (json, sortingMethod) => {

    if (sortingMethod == "dateAsc") {
        //sort by date
        for (let i = json.length - 1; i >= 0; i--){
            for (let j = 1; j <= i; j++){
                if (valueOfDate(json[j-1].date) > valueOfDate(json[j].date)){
                    let temp = json[j-1];
                    json[j-1] = json[j];
                    json[j] = temp;
                }
            }
        }
        return json
    }
    if (sortingMethod == "dateDesc") {
        //sort by date reversed
        for (let i = json.length - 1; i >= 0; i--){
            for (let j = 1; j <= i; j++){
                if (valueOfDate(json[j-1].date) < valueOfDate(json[j].date)){
                    let temp = json[j-1];
                    json[j-1] = json[j];
                    json[j] = temp;
                    
                }
            }
        }
        return json
    }
    if (sortingMethod == "alphAsc") {
        //sort by alphabet
        for (let i = json.length - 1; i >= 0; i--){
            for (let j = 1; j <= i; j++){
                if ((json[j-1].title) > (json[j].title)){
                    let temp = json[j-1];
                    json[j-1] = json[j];
                    json[j] = temp;
                    
                }
            }
        }
        return json
    }
    if (sortingMethod == "alphDesc") {
        //sort by alphabet reversed
        for (let i = json.length - 1; i >= 0; i--){
            for (let j = 1; j <= i; j++){
                if ((json[j-1].title) < (json[j].title)){
                    let temp = json[j-1];
                    json[j-1] = json[j];
                    json[j] = temp;
                    
                }
            }
        }
        return json
    }
    return json;
    
}

const valueOfDate = (date) => {
    let splitDate = date.split(".")
    let dd = splitDate[0]
    let mm = splitDate[1]
    let yyyy = splitDate[2]
    return new Date(yyyy, mm, dd)
}

export default SiteApp;
