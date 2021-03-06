import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "../components/StyledComponents/Link";
import DevTooltipPayPal from "../components/DevTooltipPayPal";
import "./projekt.css";
import MyPDF2 from "../pdfs/8ag_banki_utalas.pdf";
import Alert from "react-bootstrap/Alert";
import img from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import Accordion from "react-bootstrap/Accordion";
import ButtonInputStyle from "../components/StyledComponents/ButtonInputStyle";
import styled from "styled-components";

const inputClick3 = (e) => {
  e.target.value
    ? ReactDOM.render(
        <React.Fragment>
          <ButtonInputStyle type="submit" value="Küldés"></ButtonInputStyle>
          <input
            type="checkbox"
            id="gdpr"
            name="gdpr"
            value="true"
            required
          ></input>
          <label for="gdpr">
            Megismertem és elfogadom az{" "}
            <Link href="/adatvedelem"> Adatvédelmi tájékoztatót</Link>,
            hozzájárulok személyes adataim kezeléséhez
          </label>
          <p>
            Ha az üzeneted rendben megérkezett hozzánk, rendszerünk automata
            visszaigazolást küld részedre. Ha nem találod a visszaigazolást nézd
            meg a spam/kéretlen mappádban is.
          </p>
          <br />
        </React.Fragment>,
        document.getElementById("lol3")
      )
    : ReactDOM.render("", document.getElementById("lol3"));
};

const Projekt = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Projekt támogatás - Nyolcág"
        img={img}
        description="Projekt finanszírozási lehetőségek"
      />
      <Mainimage />
      <Container className="maincontainer">
        <h1>Projekt támogatás</h1>
        <Row>
          <Col className="firstline">
            <a>
              Ha valamelyik <Link href="/projektjeink">projektünket</Link>{" "}
              szeretnéd támogatni az alábbi finanszírozási lehetőségek közűl
              válaszhatsz.
            </a>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="justify">
            <Alert variant="primary">
              Amennyiben szeretnéd, hogy a támogatás (adomány) beérkezését
              követően a nevedet és a támogatás összegét, vagy csak a nevedet az
              Alapítvány honlapján nyilvánosságra hozzuk, ehhez hozzájárulásod
              az
              <Link href="/adatvedelem"> Adatvédelmi Tájékoztató </Link>II.
              pontjában foglaltak szerint adhatod meg.
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="taxnumber">
              <Card.Header as="h3">Banki átutalás</Card.Header>
              <Card.Body>
                <Card.Text>Budapest Bank (forint alapú bankszámla)</Card.Text>
                <Card.Title as="h1">10103104-54928200-01004009</Card.Title>
                <Card.Text>
                  Kedvezményezett neve: Nyolcágú jóga alapítvány
                  <hr /> Kérjük, hogy a közleménybe írjátok be a támogatni
                  kívánt <Link href="/projektjeink">projekt</Link> nevét. Vagy
                  ha az általános működésünket szeretnéd támogatni írd be a
                  közleménybe: “általános”. A közlemény nélkül beérkező
                  összegeket alapítványunk alaptevékenységére fordítjuk. Példa:
                  ha a <Link href="/projektjeink">ONE SIMPLE THING</Link>{" "}
                  projektet szeretné támogatni, a közleménybe ezt írd: “one
                  simple thing”.
                </Card.Text>
                <Button
                  variant="primary"
                  href={MyPDF2}
                  download="8ag_szamlaszam.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adatok letöltése .pdf-be
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                <b>Köszönjük :-)</b>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Accordion>
              <Card className="taxnumber">
                <Card.Header as="h3">Postai befizetés</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Szeretsz postára járni? Postai befizetéssel is tudsz minket
                    támogatni, amihez “sárga csekket” küldünk. Add meg a
                    postacímedet, és már megy is a csekk. Az adományozásra
                    vonatkozóan érdemes tudni, hogy készpénzzel történő
                    csekkbefizetés kapcsán 2018. január 1-től változtak a
                    szabályok. Az esetlegesen elkért személyes adatokat
                    kizárólag a posta kezeli! Ezen a{" "}
                    <Link
                      href="https://www.posta.hu/csekkbefizetes_keszpenzzel_valtozo_szabalyok_2018"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linken
                    </Link>{" "}
                    tájékozódhatsz erről. <br />
                    <br />
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Csekk igénylés
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <PaddingP>
                        <Row>
                          <Col>
                            <h1>Postai csekk igénylése</h1>
                          </Col>
                        </Row>
                        <form
                          name="post-form"
                          method="POST"
                          data-netlify="true"
                        >
                          <input
                            type="hidden"
                            name="form-name"
                            value="post-form"
                          />
                          <Row>
                            <Col>
                              {" "}
                              <input
                                type="text"
                                placeholder="Ide írd a családneved*"
                                name="csaladnev"
                                className="InputMassage"
                                onChange={inputClick3}
                                required
                              />
                            </Col>
                            <Col>
                              {" "}
                              <input
                                type="text"
                                placeholder="Ide írd a keresztneved*"
                                name="keresztnev"
                                className="InputMassage"
                                onChange={inputClick3}
                                required
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              {" "}
                              <input
                                type="text"
                                placeholder="Pontos cím, emelet ajtó ha van*"
                                name="utca"
                                className="InputMassage"
                                onChange={inputClick3}
                                required
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              {" "}
                              <input
                                type="text"
                                placeholder="Irányítószám*"
                                name="iranyito"
                                pattern="[0-9]{4}"
                                maxLength="4"
                                className="InputMassage"
                                onChange={inputClick3}
                                required
                              />
                            </Col>
                            <Col>
                              {" "}
                              <input
                                type="text"
                                placeholder="Város*"
                                name="varos"
                                className="InputMassage"
                                onChange={inputClick3}
                                required
                              />
                            </Col>
                          </Row>

                          <textarea
                            name="message"
                            className="InputMassage"
                            placeholder="Kézbesítési információ. Kitöltése nem kötelező!"
                            onChange={inputClick3}
                          ></textarea>
                          <Row>
                            <Col id="lol3"></Col>
                          </Row>
                        </form>
                      </PaddingP>
                    </Accordion.Collapse>
                  </Card.Text>

                  {/* <DevTooltipPosta /> */}
                </Card.Body>
                <Card.Footer className="text-muted">
                  <b>Köszönjük :-)</b>
                </Card.Footer>
              </Card>
            </Accordion>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card className="taxnumber">
              <Card.Header as="h3">PayPal</Card.Header>
              <Card.Body>
                <Card.Text>
                  Van PayPal számlád? Adakozz gondtalanul! A{" "}
                  <Link
                    href="https://www.paypal.com/hu/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PayPal
                  </Link>{" "}
                  pénzügyi adataid nem osztjuk meg a címzettel. Egyszerű,
                  biztonságos, nyomkövethető és gyors. Ez a funkció jelenleg
                  fejlesztés alatt van, hamarosan használható lesz.
                </Card.Text>
                <DevTooltipPayPal />
              </Card.Body>
              <Card.Footer className="text-muted">
                <b>Köszönjük :-)</b>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

// Styled components

const PaddingP = styled.p`
  text-align: justify;
  margin-top: 30px;
`;

// const A = styled.a`
//   padding-bottom: 5px;
// `;

export default Projekt;

// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Link from "../components/StyledComponents/Link";
// import DevTooltipPayPal from "../components/DevTooltipPayPal";
// import "./projekt.css";
// import MyPDF2 from "../pdfs/8ag_banki_utalas.pdf";
// import Alert from "react-bootstrap/Alert";
// import img from "../pics/landing_img_small.jpg";
// import MetaTags from "../components/MetaTags";
// import Mainimage from "../components/Image";
// import Accordion from "react-bootstrap/Accordion";
// import ButtonInputStyle from "../components/StyledComponents/ButtonInputStyle";
// import styled from "styled-components";

// const Projekt = () => {
//   return (
//     <React.Fragment>
//       <MetaTags
//         title="Projekt támogatás - Nyolcág"
//         img={img}
//         description="Projekt finanszírozási lehetőségek"
//       />
//       <Mainimage />
//       <Container className="maincontainer">
//         <h1>Projekt támogatás</h1>
//         <Row>
//           <Col className="firstline">
//             <a>
//               Ha valamelyik <Link href="/projektjeink">projektünket</Link>{" "}
//               szeretnéd támogatni az alábbi finanszírozási lehetőségek közűl
//               válaszhatsz.
//             </a>
//           </Col>
//         </Row>
//         <Row className="justify-content-md-center">
//           <Col className="justify">
//             <Alert variant="primary">
//               Amennyiben szeretnéd, hogy a támogatás (adomány) beérkezését
//               követően a nevedet és a támogatás összegét, vagy csak a nevedet az
//               Alapítvány honlapján nyilvánosságra hozzuk, ehhez hozzájárulásod
//               az
//               <Link href="/adatvedelem"> Adatvédelmi Tájékoztató </Link>II.
//               pontjában foglaltak szerint adhatod meg.
//             </Alert>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Card className="taxnumber">
//               <Card.Header as="h3">Banki átutalás</Card.Header>
//               <Card.Body>
//                 <Card.Text>Budapest Bank (forint alapú bankszámla)</Card.Text>
//                 <Card.Title as="h1">10103104-54928200-01004009</Card.Title>
//                 <Card.Text>
//                   Kedvezményezett neve: Nyolcágú jóga alapítvány
//                   <hr /> Kérjük, hogy a közleménybe írjátok be a támogatni
//                   kívánt <Link href="/projektjeink">projekt</Link> nevét. Vagy
//                   ha az általános működésünket szeretnéd támogatni írd be a
//                   közleménybe: “általános”. A közlemény nélkül beérkező
//                   összegeket alapítványunk alaptevékenységére fordítjuk. Példa:
//                   ha a <Link href="/projektjeink">ONE SIMPLE THING</Link>{" "}
//                   projektet szeretné támogatni, a közleménybe ezt írd: “one
//                   simple thing”.
//                 </Card.Text>
//                 <Button
//                   variant="primary"
//                   href={MyPDF2}
//                   download="8ag_szamlaszam.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Adatok letöltése .pdf-be
//                 </Button>
//               </Card.Body>
//               <Card.Footer className="text-muted">
//                 <b>Köszönjük :-)</b>
//               </Card.Footer>
//             </Card>
//           </Col>
//         </Row>
//         <br />
//         <Row>
//           <Col>
//             <Accordion>
//               <Card className="taxnumber">
//                 <Card.Header as="h3">Postai befizetés</Card.Header>
//                 <Card.Body>
//                   <Card.Text>
//                     Szeretsz postára járni? Postai befizetéssel is tudsz minket
//                     támogatni, amihez “sárga csekket” küldünk. Add meg a
//                     postacímedet, és már megy is a csekk. Az adományozásra
//                     vonatkozóan érdemes tudni, hogy készpénzzel történő
//                     csekkbefizetés kapcsán 2018. január 1-től változtak a
//                     szabályok. Az esetlegesen elkért személyes adatokat
//                     kizárólag a posta kezeli! Ezen a{" "}
//                     <Link
//                       href="https://www.posta.hu/csekkbefizetes_keszpenzzel_valtozo_szabalyok_2018"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       linken
//                     </Link>{" "}
//                     tájékozódhatsz erről. <br />
//                     <br />
//                     <Accordion.Toggle
//                       as={Button}
//                       variant="primary"
//                       eventKey="0"
//                     >
//                       Csekk igénylés
//                     </Accordion.Toggle>
//                     <Accordion.Collapse eventKey="0">
//                       <PaddingP>
//                         <Row>
//                           <Col>
//                             <h1>Postai csekk igénylése</h1>
//                           </Col>
//                         </Row>
//                         <form
//                           name="post-form"
//                           method="POST"
//                           data-netlify="true"
//                         >
//                           <input
//                             type="hidden"
//                             name="form-name"
//                             value="post-form"
//                           />
//                           <Row>
//                             <Col>
//                               {" "}
//                               <input
//                                 type="text"
//                                 placeholder="Ide írd a család neved*"
//                                 name="csaladnev"
//                                 className="InputMassage"
//                                 required
//                               />
//                             </Col>
//                             <Col>
//                               {" "}
//                               <input
//                                 type="text"
//                                 placeholder="Ide írd a keresztneved*"
//                                 name="keresztnév"
//                                 className="InputMassage"
//                                 required
//                               />
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               {" "}
//                               <input
//                                 type="text"
//                                 placeholder="Pontos cím, emelet ajtó ha van*"
//                                 name="utca"
//                                 className="InputMassage"
//                                 required
//                               />
//                             </Col>
//                           </Row>
//                           <Row>
//                             <Col>
//                               {" "}
//                               <input
//                                 type="text"
//                                 placeholder="Irányítószám*"
//                                 name="iranyito"
//                                 pattern="[0-9]{4}"
//                                 className="InputMassage"
//                                 required
//                               />
//                             </Col>
//                             <Col>
//                               {" "}
//                               <input
//                                 type="text"
//                                 placeholder="Város*"
//                                 name="varos"
//                                 className="InputMassage"
//                                 required
//                               />
//                             </Col>
//                           </Row>

//                           <textarea
//                             name="message"
//                             className="InputMassage"
//                             placeholder="Kézbesítési információ. Kitöltése nem kötelező!"
//                           ></textarea>
//                           <ButtonInputStyle
//                             type="submit"
//                             value="Küldés"
//                           ></ButtonInputStyle>
//                         </form>
//                       </PaddingP>
//                     </Accordion.Collapse>
//                   </Card.Text>

//                   {/* <DevTooltipPosta /> */}
//                 </Card.Body>
//                 <Card.Footer className="text-muted">
//                   <b>Köszönjük :-)</b>
//                 </Card.Footer>
//               </Card>
//             </Accordion>
//           </Col>
//         </Row>
//         <br />
//         <Row>
//           <Col>
//             <Card className="taxnumber">
//               <Card.Header as="h3">PayPal</Card.Header>
//               <Card.Body>
//                 <Card.Text>
//                   Van PayPal számlád? Adakozz gondtalanul! A{" "}
//                   <Link
//                     href="https://www.paypal.com/hu/home"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     PayPal
//                   </Link>{" "}
//                   pénzügyi adataid nem osztjuk meg a címzettel. Egyszerű,
//                   biztonságos, nyomkövethető és gyors. Ez a funkció jelenleg
//                   fejlesztés alatt van, hamarosan használható lesz.
//                 </Card.Text>
//                 <DevTooltipPayPal />
//               </Card.Body>
//               <Card.Footer className="text-muted">
//                 <b>Köszönjük :-)</b>
//               </Card.Footer>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </React.Fragment>
//   );
// };

// // Styled components

// const PaddingP = styled.p`
//   text-align: justify;
//   margin-top: 30px;
// `;

// // const A = styled.a`
// //   padding-bottom: 5px;
// // `;

// export default Projekt;
