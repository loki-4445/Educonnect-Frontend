import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

async function handleSub(data) {
  console.log("Subscribed with email:", data);
  try{
    let res=await fetch('',{
      method:'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    });
    let info = await res.json();
    if (info.message === "User created") {
      navigate('/login');
    } else if (info.message === "User already exists") {
      console.log("User exists")
      SetUserErr("USER ALREADY EXISTS");
    } else {
      setErr(info.message);
    }
  } catch (err) {
    setErr(err.message);
  
  }
}

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      handleSub(email);
    } else {
      console.log("Please enter a valid email.");
    }
  };

  return (
    <section>
      <Container className="newsletter bg-primary w-75 p-5">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <div className="subscribe">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button className="btn" onClick={handleSubmit}>Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
