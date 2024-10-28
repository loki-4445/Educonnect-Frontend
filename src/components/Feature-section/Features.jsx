import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Access curated notes and video lessons designed to help you grasp concepts faster and more efficiently. Learn at your own pace with resources tailored for exam preparation.",
    icon: "ri-draft-line",
  },
  
  {
    title: "All-Time Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions or difficulties you may face while using the platform.",
    icon: "ri-discuss-line",
  },
  
  {
    title: "Certification",
    desc: "Earn certificates upon course completion, showcasing your knowledge and skills to boost your academic and career prospects.",
    icon: "ri-contacts-book-line",
  }
  
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </  Row>
      </Container>
    </section>
  );
};

export default Features;
