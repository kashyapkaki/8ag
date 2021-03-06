import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Mainimage from "../components/Image";
import MetaTags from "../components/MetaTags";
import Posts from "../blogposts/Posts";
import "./blog.css";
import seoImage from "../pics/landing_img_small.jpg";
import Parser from "html-react-parser";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const ViewBlog = (props) => {
  // const [loading, setLoading] = useState(true);
  //const [filteredPost, setFilteredPost] = useState(null);
  let history = useHistory();
  //const postTitle = props.match.params.title.toLowerCase().trim();
  console.log(props.location.state.post);
  const filteredPost = props.location.state.post
    ? props.location.state.post
    : null;
  //setFilteredPost(props.location.state.post ? props.location.state.post : null);
  let desc = filteredPost && Parser(filteredPost.content);

  return (
    <React.Fragment>
      <Mainimage />
      {filteredPost && (
        <React.Fragment>
          {/* <MetaTags
              title={filteredPost.title}
              img={filteredPost.image}
              description={desc}
            /> */}

          <Helmet>
            <title>{filteredPost.title}</title>
            <meta property="og:title" content={filteredPost.title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={filteredPost.image} />
            <meta property="og:url" content={window.location.origin} />
            <meta property="og:type" content="object" />
            <meta property="fb:app_id" content="1076431962839514" />
          </Helmet>
          <Container className="blogwidth" id="mobil">
            <Row>
              <Col>
                <h1>{filteredPost.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Közzétéve: <strong>{filteredPost.date}</strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={filteredPost.image} rounded fluid />
              </Col>
            </Row>
            <Row>
              <Col>
                <PaddingP>{desc}</PaddingP>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" onClick={() => history.push("/blog")}>
                  Vissza a BLOG menübe
                </Button>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

//Styled Components
const PaddingP = styled.p`
  text-align: justify;
`;

export default ViewBlog;
