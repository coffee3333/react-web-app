import React from "react";
import Alert from 'react-bootstrap/Alert';




export default function HelloText(){
    return(
        <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Thank you for visiting my web page, this web service made only for practicing my skills
        </p>
        <hr />
        <p className="mb-0">
          In this server i use Golang for BackEnd, React for FrontEnd
          <br/>
          <a href="https://github.com/coffee3333">Here</a> u can check my git
        </p>
      </Alert>

    );
}