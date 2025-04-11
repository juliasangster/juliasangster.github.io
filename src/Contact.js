import React from 'react';
import CircleImageText from './CircleImageText';
import Card from 'react-bootstrap/Card';

export default function Contact() {
  return (
    <div>
        <Card className="mb-4">
          <Card.Header style={{ backgroundColor: '#007200', color: 'white' }}>
            
          </Card.Header>
          <Card.Body style={{ textAlign: 'left' }}>
          <p><strong>GitHub</strong>: <a href="https://github.com/juliasangster" target="_blank">@juliasangster</a></p>
          <p><strong>Email</strong>: <a href="mailto:juliarsangster@gmail.com">juliarsangster@gmail.com</a></p>
          <p><strong>LinkedIn</strong>: <a href="www.linkedin.com/in/julia-sangster-838659174" target="_blank">Julia Sangster</a></p>
          <p><strong>Resume</strong>: <a href="resume.pdf" download="Julia_Sangster_Resume.pdf">Download my resume</a></p>
          </Card.Body>
        </Card>
    </div>
  );
}