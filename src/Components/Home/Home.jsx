import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <section class="header">
    <div class="container">
        <div class="header-matter">
            <h2>WELCOME TO <span>ICCSI</span></h2>
            <h3>International Conference on Computer <br />Science Innovations</h3>
            <div class="headabo">
                <p>
                    A global platform for researchers, academicians, and industry experts to explore 
                    advancements in AI, Machine Learning, Cybersecurity, IoT, Blockchain, Cloud Computing, 
                    and Data Science, driving digital transformation and innovation.
                </p>
            </div>
            {/* <!-- Register Button --> */}
            <div class="register">
                <a class="headregister" asp-action="New_paper_submission" asp-controller="Authors_Desk">Register</a>
            </div>
            <a href="#about" class="scroll">
                <img src="/img/down.png" class="scroll-icon" alt="Scroll Down" />
            </a>
        </div>
    </div>
</section>
  )
}
