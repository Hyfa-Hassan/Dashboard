import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContactInfo = () => {
  return (
    <div>
      <Header />
      <h1>Welcome Admin</h1>
      <div style={{width:"auto"}}>
        <table style={{ width: 500, border: "1px solid black" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ContactInfo;
