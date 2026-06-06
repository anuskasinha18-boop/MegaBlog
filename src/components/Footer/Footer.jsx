import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'

function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="footer-content">
            <div className="footer-section">
                <div style={{marginBottom: '1rem'}}>
                    <Logo width="100px" />
                </div>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>
                    &copy; Copyright 2023. All Rights Reserved.
                </p>
            </div>
            <div className="footer-section">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-list">
                    <li><Link className="footer-link" to="/">Features</Link></li>
                    <li><Link className="footer-link" to="/">Pricing</Link></li>
                    <li><Link className="footer-link" to="/">Affiliate Program</Link></li>
                    <li><Link className="footer-link" to="/">Press Kit</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-title">Support</h3>
                <ul className="footer-list">
                    <li><Link className="footer-link" to="/">Account</Link></li>
                    <li><Link className="footer-link" to="/">Help</Link></li>
                    <li><Link className="footer-link" to="/">Contact Us</Link></li>
                    <li><Link className="footer-link" to="/">Customer Support</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-title">Legals</h3>
                <ul className="footer-list">
                    <li><Link className="footer-link" to="/">Terms &amp; Conditions</Link></li>
                    <li><Link className="footer-link" to="/">Privacy Policy</Link></li>
                    <li><Link className="footer-link" to="/">Licensing</Link></li>
                </ul>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer