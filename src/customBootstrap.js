import { useState } from "react"
import { Card, Row, Col, Container, Stack, Button, Alert, Image} from "react-bootstrap"
import Form from 'react-bootstrap/Form'

//flag icons
import flagFI from './content/flag_fi.svg'
import flagEN from './content/flag_en.svg'

const flagStyle = {
    border: "2px solid black", 
    borderRadius: "4px",
    width: "30px"
  }

const TextCard = (props) => {
    return (
        <Card border="light" className="my-5">
            <Card.Body>
                <div data-nosnippet>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

const BlogCard = (props) => {
    let lang = props.lang;

    let flagImg = <></>;
    if (props.flag == "fi") {
        flagImg = <img src={flagFI} style={flagStyle}></img>
    }
    if (props.flag == "en") {
        flagImg = <img src={flagEN} style={flagStyle}></img>
    }
    if (props.flag == "both") {
        flagImg = <><img src={flagFI} style={flagStyle}></img> <b>/</b> <img src={flagEN} style={flagStyle}></img></>
    }
    let tagList = props.tags;
    let tagText = "🏷️ "
    for (let i = 0; i < tagList.length; i++) {
        let tag = tagList[i]
        tagText += lang[tag] + ", "
    }
    tagText = tagText.substring(0, tagText.length - 2)
    return (
        <Card border="light" className="mb-5">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <div className="mb-2" style={{whiteSpace: "nowrap", fontStyle: "normal"}}>
                        <span style={{whiteSpace: "nowrap", fontStyle: "normal"}}>
                            {flagImg}
                        </span>
                        <span className="mx-2" style={{whiteSpace: "nowrap", fontStyle: "normal"}}>{tagText}</span>
                        <span style={{fontStyle: "normal", float: 'right', whiteSpace: "nowrap"}}>
                            🕒 {props.date}
                        </span>
                    </div>
                    <div style={{backgroundImage: "linear-gradient(to top, rgba(150,150,150,1) 0%, rgba(0,0,0,1) 75%)", backgroundClip: "text", webkitBackgroundClip: 'text', color: 'transparent'}}>
                    {props.text}
                    </div>
                    <div style={{textAlign: 'right', paddingTop: '5px'}}>{props.more}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const ImageCard = (props) => {
    if (props.title == null && props.text == null) {
        return (
            <Card border="light" className="mt-3">
                <Card.Img variant="top" src={props.src} />
            </Card>
        )
    }
    if (props.title == null) {
        return (
            <Card border="light" className="mt-3">
                <Card.Img variant="top" src={props.src}/>
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    if (props.text == null) {
        return (
            <Card border="light" className="mt-3">
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
    return (
        <Card border="light" className="mt-3">
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const VideoCard = (props) => {
    return(
        <Card border="light" className="mt-3">
            <div className="responsive-iframe-container">
                <iframe className="responsive-iframe" style={{border: "1px solid #EEE", 'borderRadius': "5px"}} src={"https://www.youtube-nocookie.com/embed/" + props.src + "?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&fs=0&color=white"} frameBorder="0"></iframe>
            </div>
        </Card>
    )
}

const MapCard = (props) => {
    return(
        <div style={{position: 'relative', overflow: 'hidden', marginLeft: '5%', marginRight: '5%', paddingTop: '90%', overflow: 'hidden', webkitMaskImage: '-webkit-radial-gradient(white, black)'}}>
            <iframe className="responsive-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=9.338378906250002%2C58.11271444125315%2C46.03271484375001%2C66.97307272234055&amp;layer=mapnik&amp;marker=62.87518837993309%2C27.685546875" style={{border: '5px solid white', borderRadius: '10%', overflow: 'hidden', padding: '5px'}}></iframe>
        </div>
    )
}

const ContactCard = (props) => {
    let lang = props.lang;
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    let error = lang.contact_form_error;

    let splitError = error.split(". ");


    const updateEmail = (str) => {
        setEmail(str);
        checkValidity();
    }

    const updateMsg = (str) => {
        setMsg(str);
        checkValidity();
    }

    const checkValidity = () => {
        let emailValid = false;
        let msgValid = false;
        let emailSplit = email.split('@');
        if (emailSplit.length == 2) {
            let endSplit =  emailSplit[1].split('.');
            if (endSplit.length == 2) {
                if (endSplit[1].length > 0 && endSplit[0].length > 0) {
                    emailValid = true;
                } 
            }
        }

        if (msg.length > 4) {
            msgValid = true;
        }

        if (!emailValid && !msgValid) {
            return(error)
        }
        if (!emailValid && msgValid) {
            return(splitError[0] + ".")
        }
        if (emailValid && !msgValid) {
            return(splitError[1])
        }
        if (emailValid && msgValid) {
            return("success")
        }
    }

    const clearForm = () => {
        setEmail("");
        setMsg("");
        checkValidity();
    }

    return (
        <Card border="light" className="my-5">
            <Card.Body className="px-5">
                <Card.Title className="text-center">{lang.contact_form_title}</Card.Title>
                <Card.Text className="text-center">
                    {lang.contact_form_explanation_1} <a href="https://www.netlify.com/products/forms/">{lang.contact_form_explanation_2}</a>
                </Card.Text>
                <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                    <input type='text' name="Email" className="form-control" size="40" placeholder={lang.contact_form_email} value={email} required onChange={(e) => updateEmail(e.target.value)}></input>
                    <small id="emailHelp" class="form-text text-muted">{lang.contact_form_disclaimer}</small> <br/><br/>
                    <textarea name="Message" className="form-control" placeholder={lang.contact_form_msg} rows={10} required cols={'100%'} value={msg} onChange={(e) => updateMsg(e.target.value)} on></textarea>
                    <br/><br/>
                    <Stack direction="horizontal" gap={3}>
                        {
                        checkValidity() == "success"?
                        <Button type="submit" variant="secondary">{lang.contact_form_send}</Button>:
                        <Button variant="secondary" disabled>{lang.contact_form_send}</Button>
                        }
                        <Button variant="danger" onClick={() => clearForm()}>{lang.contact_form_clear}</Button>
                    </Stack> <br/>
                    {
                        checkValidity() == "success"?
                        <Alert variant="success">{lang.contact_form_success}</Alert>:
                        <Alert variant="danger">{checkValidity()}</Alert>
                    }
                </form>
            </Card.Body>
        </Card>
    )
}

const PortfolioZoom = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const increaseIndex = () => {
        if (imageIndex < props.src.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }

    const decreaseIndex = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(props.src.length - 1)
        }
    }

    return(
    <div>
        <Container fluid="md">
            <Row className="mb-1 mx-auto">
                <Col sm={12} className="text-center">
                    <div><ImageCard src={props.src[imageIndex]}></ImageCard></div>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {props.title + " (Kuva " + (imageIndex + 1) + ")"}
                            </Card.Title>
                            <Stack direction="horizontal">
                                <Button variant="secondary" onClick={() => decreaseIndex()}>Edellinen kuva</Button>
                                <Button variant="secondary" className="ms-auto" onClick={() => increaseIndex()}>Seuraava kuva</Button>
                            </Stack>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export {TextCard, BlogCard, ImageCard, VideoCard, ContactCard, MapCard, PortfolioZoom}
