import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  return (
    <>
      <header className="roof-header">
        <div className="roof-topbar">
          <div className="container roof-topbar-inner">
            <div className="roof-top-left">
              <span className="roof-live-dot"></span>
              <span>24/7 Emergency Roofing Support</span>
            </div>

            <div className="roof-top-right">
              <a href="tel:01618745201">+44 7976 286 141</a>
              <Link to="/contact">Free Site Visit</Link>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg roof-navbar">
          <div className="container roof-nav-box">
            <Link className="navbar-brand roof-brand" to="/">
              <div className="roof-logo-frame">
                <img src="/Images/logo.png" alt="Peak Roofing" />
              </div>

              <div className="roof-brand-text">
                <h2>
                  Kings <span>Heath</span>
                </h2>
                <small>Birmingham Roofing Experts</small>
              </div>
            </Link>

            <button
              className="navbar-toggler roof-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav mx-auto roof-nav-links">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/our-work">
                    Our Work
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="roof-nav-actions">
                <div className="roof-call-card">
                  <span>Direct Line</span>
                  <strong>+447976286141</strong>
                </div>

                <Link to="/contact" className="roof-quote-btn">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-header{
  width:100%;
  position:relative;
  z-index:999;
  background:
    radial-gradient(circle at top left,rgba(242,192,120,.18),transparent 28%),
    linear-gradient(135deg,#1f2933 0%,#111827 55%,#7c2d12 100%);
  font-family:'Outfit',sans-serif;
  overflow:hidden;
}

.roof-topbar{
  padding:11px 0;
  border-bottom:1px solid rgba(255,255,255,.1);
}

.roof-topbar-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
}

.roof-top-left,
.roof-top-right{
  display:flex;
  align-items:center;
  gap:14px;
}

.roof-top-left{
  color:#fff7ed;
  font-size:13px;
  font-weight:800;
}

.roof-live-dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#f2c078;
  box-shadow:0 0 0 7px rgba(242,192,120,.18);
  animation:roofPulse 1.6s infinite;
}

.roof-top-right a{
  text-decoration:none;
  color:#fff7ed;
  font-size:13px;
  font-weight:900;
  transition:.3s ease;
}

.roof-top-right a:last-child{
  padding:9px 18px;
  border-radius:999px;
  color:#fff;
  background:linear-gradient(135deg,#b45309,#e76f51);
  box-shadow:0 12px 28px rgba(180,83,9,.28);
}

.roof-top-right a:hover{
  color:#f2c078;
}

.roof-top-right a:last-child:hover{
  color:#fff;
  transform:translateY(-2px);
}

.roof-navbar{
  padding:17px 0;
}

.roof-nav-box{
  padding:14px 20px;
  border-radius:28px;
  background:rgba(255,250,243,.1);
  border:1px solid rgba(255,255,255,.16);
  backdrop-filter:blur(20px);
  box-shadow:0 25px 70px rgba(0,0,0,.28);
}

.roof-brand{
  display:flex;
  align-items:center;
  gap:14px;
  text-decoration:none;
}

.roof-logo-frame{
  width:76px;
  height:76px;
  border-radius:23px;
  background:#fffaf3;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid rgba(242,192,120,.35);
  box-shadow:0 14px 28px rgba(0,0,0,.22);
}

.roof-logo-frame img{
  height:60px;
  width:auto;
  object-fit:contain;
  display:block;
}

.roof-brand-text h2{
  margin:0;
  font-family:'Playfair Display',serif;
  font-size:28px;
  font-weight:900;
  color:#fff7ed;
  line-height:1;
}

.roof-brand-text h2 span{
  color:#f2c078;
}

.roof-brand-text small{
  display:block;
  margin-top:7px;
  color:#fdebd3;
  font-size:10px;
  font-weight:800;
  letter-spacing:2px;
  text-transform:uppercase;
}

.roof-nav-links{
  gap:25px;
}

.roof-nav-links .nav-link{
  color:#fff7ed !important;
  font-size:14px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  position:relative;
  padding:10px 0 !important;
  transition:.3s ease;
}

.roof-nav-links .nav-link::after{
  content:"";
  position:absolute;
  left:50%;
  bottom:0;
  width:0;
  height:3px;
  transform:translateX(-50%);
  border-radius:20px;
  background:linear-gradient(90deg,#f2c078,#e76f51);
  transition:.3s ease;
}

.roof-nav-links .nav-link:hover,
.roof-nav-links .nav-link.active{
  color:#f2c078 !important;
}

.roof-nav-links .nav-link:hover::after,
.roof-nav-links .nav-link.active::after{
  width:100%;
}

.roof-nav-actions{
  display:flex;
  align-items:center;
  gap:16px;
}

.roof-call-card{
  padding:11px 16px;
  border-radius:18px;
  text-align:right;
  background:rgba(255,250,243,.1);
  border:1px solid rgba(255,255,255,.14);
}

.roof-call-card span{
  display:block;
  color:#fdebd3;
  font-size:10px;
  font-weight:900;
  letter-spacing:1px;
  text-transform:uppercase;
}

.roof-call-card strong{
  color:#fff7ed;
  font-size:15px;
  font-weight:900;
}

.roof-quote-btn{
  text-decoration:none;
  padding:14px 22px;
  border-radius:16px;
  color:#fff;
  font-size:13px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  background:linear-gradient(135deg,#b45309,#e76f51);
  box-shadow:0 16px 34px rgba(180,83,9,.32);
  transition:.35s ease;
}

.roof-quote-btn:hover{
  color:#fff;
  transform:translateY(-3px);
}

.roof-toggler{
  background:#fffaf3 !important;
  border:none !important;
  border-radius:14px !important;
  padding:8px 11px !important;
  box-shadow:none !important;
}

@keyframes roofPulse{
  0%{
    box-shadow:0 0 0 0 rgba(242,192,120,.6);
  }
  70%{
    box-shadow:0 0 0 12px rgba(242,192,120,0);
  }
  100%{
    box-shadow:0 0 0 0 rgba(242,192,120,0);
  }
}

@media(max-width:991px){
  .roof-nav-links{
    gap:10px;
    padding-top:22px;
  }

  .roof-nav-actions{
    margin-top:22px;
    flex-direction:column;
    align-items:flex-start;
  }

  .roof-call-card,
  .roof-quote-btn{
    width:100%;
    text-align:left;
  }

  .roof-quote-btn{
    text-align:center;
  }
}

@media(max-width:575px){
  .roof-topbar-inner{
    flex-direction:column;
    align-items:flex-start;
  }

  .roof-top-right{
    width:100%;
    justify-content:space-between;
  }

  .roof-logo-frame{
    width:58px;
    height:58px;
    border-radius:18px;
  }

  .roof-logo-frame img{
    height:45px;
  }

  .roof-brand-text h2{
    font-size:20px;
  }

  .roof-brand-text small{
    font-size:8px;
    letter-spacing:1px;
  }
}
      `}</style>
    </>
  );
}