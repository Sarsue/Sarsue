import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Bio = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                I am a Product Engineer with a focus on bringing innovative ideas to market. My expertise spans design, product management, full-stack development, and DevOps. I help clients accelerate product development from concept to launch, specializing in frontend, backend, large language models (LLM), infrastructure, database optimization, and cloud deployments, allowing me to build scalable, AI-driven platforms.
            </p>
            <p>
                I hold a US Patent <a href="https://patents.google.com/patent/CA3081732C/en" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>for situational awareness over low-bandwidth satellite systems</a> developed during my time at Nortac Defence. As the lead engineer and architect at Contextere, I developed Madison, a next-generation platform for Contextere <a href="https://aiac.ca/members/contextere/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>focusing on innovative AI-driven solutions for industrial sectors</a>.
            </p>
            <p>
                Currently, I’m building <a href="https://www.syntextai.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>SynTextAI</a>, leveraging artificial intelligence to streamline document processing and insights. I am also exploring decentralized finance by running Bitcoin Lightning nodes to enable microtransactions and cross-border payments.
            </p>
            <p>
                I offer consulting services and training to help turn ideas into products with my <Link to="/course" style={{ color: 'blue', textDecoration: 'underline' }}>4-Week Program: Build, Launch, and Sell Your Product</Link>.
            </p>
        </div>
    );
};

export default Bio;
