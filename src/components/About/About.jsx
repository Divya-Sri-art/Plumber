import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <>
        <div className={styles.container}>
            <h3>ABOUT US</h3>
            <h1>Over 25+ Years Experience<span style={{display: "block"}}> In Plumbing Service</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <span style={{display: "block"}}>phasellus mollis sit aliquam sit nullam neque ultrices.</span></p>
            <form action="/contact">
            <button to='/contact' >Get a quote</button>
            </form>
            <img src="./assests/about.jpg" alt=" " />
        </div>
        <div className={styles.container_1}>
            <div className={styles.text}>
                <h3>OUR VALUES</h3>
                <h1>The values that drive us</h1>
            </div>
            <div className={styles["form-control"]}>
                <div>
                    <img src="./assests/about_2.webp" alt =" " width={100}/>
                    <h3>Trust</h3>
                    <p>In potenti lorem id luctus <span style={{display: "block" }}>maecenas sed id faucibus ac.</span> </p>
                </div>
                <div>
                    <img src="./assests/about_1.webp" alt =" " width={100} style={{borderRadius: "3rem" }}/>
                    <h3>Integrity</h3>
                    <p>Sagittis aliquam diam viverra <span style={{display: "block" }}>xsed. Nunc pulvinar elit.</span></p>
                </div>
                <div>
                    <img src="./assests/about_10.png" alt =" " width={100} />
                    <h3>Security</h3>
                    <p>Egestas pulvinar arcu at<span style={{display: "block"}}> elementum velit eu amet.</span></p>
                </div>
                <div>
                    <img src="./assests/about_4.png" alt =" " width={100} />
                    <h3>Commitment</h3>
                    <p>Diam volutpat fusce sagittis <span style={{display: "block"}}>molestie ante odio est gravida.</span></p>
                </div>
            </div>
        </div>
        <div className={styles.container_3}>
            <div className={styles.menu}>
                <div className={styles.image}>
                    <img src="./assests/about_5.jpg" alt=" " width={550}/>
                </div>
                <div className={styles.text_1}>
                    <h4>OUR MISSION</h4>
                    <h1>Offer reliable services for most plumbing systems</h1>
                    <p>Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus</p>
                    <h3>Auctor elit sed vulputate mi euismod elcom</h3>
                    <h3>Tellus orci ac auctor augue mauris augue</h3>
                    <h3>Feugiat scelerisque varius morbi enim nuncolor</h3>
                    <form action="/contact">
                    <button to='/contact' >Get a quote</button>
                    </form>
                </div>
            </div>
            <div className={styles.menu1}>
                <div className={styles.text_2}>
                    <h4>OUR GOALS</h4>
                    <h1>Provide exceptional plumbing services that exceed our customers expectations</h1>
                    <p>Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis:</p>
                    <form action="/contact">
                    <button to='/contact' >Get a quote</button>
                    </form>
                </div>
                <div className={styles.images1}>
                    <img src="./assests/about_6.jpeg" alt=" " width={550} />
                </div>
            </div>
        </div>
        <div>
            <div className={styles.menu_2}>
                <h4>OUR EXPERTS</h4>
                <h1>Who is behind the Plumbing team</h1>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
            </div>
            <div className={styles.menu_3}>
                <div>
                    <img src="./assests/about_7.jpg" alt=" " />
                    <h2>Sam Houston</h2>
                    <h3>Chief repair</h3>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm</p>
                </div>
                <div>
                    <img src="./assests/about_8.jpg" alt=" " />
                    <h2>Matt Cannon</h2>
                    <h3>Installation and repairs</h3>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm</p>
                </div>
                <div>
                    <img src="./assests/about_9.jpg" alt=" " />
                    <h2>John Carter</h2>
                    <h3>Technical evaluator</h3>
                    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About