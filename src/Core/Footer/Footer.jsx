import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section class="footer">
    <div class="footcontainer">
        <div class="footer-class">
            <p class="footer-grid">
                Copyrights © 2024, All Rights Reserved. Powered By BIICCSI
            </p>
            <ul class="social-ic-icons">
                <li class="facebook"><a href="#"><span></span></a></li>
                <li class="twitter"><a href="#"><span></span></a></li>
                <li class="gmail"><a href="#"><span></span></a></li>
                <li class="browser"><a href="#"><span></span></a></li>
            </ul>
            <div class="clearfix"></div>
        </div>
    </div>
    <a href="#" id="toTop"><span id="toTopHover"></span></a>
</section>
  )
}
