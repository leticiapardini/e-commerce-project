import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Criadores do projeto:</h3>
      <div className="gridTemplate">
        <div className="names">
          <p>Letícia Pardini </p>
          <div className="icon">
            <GithubOutlined /> <a href="https://github.com/leticiapardini"> GitHub</a>
          </div>
        </div>
        <div className="names">
          <p>Murilo Costa</p>
          <div className="icon">
            <GithubOutlined /> <a href="https://github.com/murillocosta"> GitHub</a>
          </div>
        </div>
        <div className="names">
          <p> Ruan Carlos</p>
          <div className="icon">
            <GithubOutlined /> <a href="https://github.com/rucp"> GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
