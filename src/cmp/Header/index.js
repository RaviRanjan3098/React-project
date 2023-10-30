import React from "react";


function Header() {
    return (
      <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img  class="navbar-brand"  src="img/logo.png" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="#">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Web Development</a></li>
            <li><a class="dropdown-item" href="#">App Development</a></li>
            <li><a class="dropdown-item" href="#">Web Desiging</a></li>
            <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
            <li><a class="dropdown-item" href="#">branding Company</a></li>
            <li><a class="dropdown-item" href="#">It Outsoursing</a></li>
            
            
            </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Internship</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
     
      </>
    );
  }
  
  export default Header;