import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h4>PLUMBERS</h4>
          <h1>Best plumbing & repair solutions with quality work</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
          <form action="/contact">
          <button className={styles.btn} to='/contact'>Get a quote</button>
          </form>
          <form action="/services">
         <button  className={styles.btn1} type="submit">Browse all services</button>
      </form>
        </div>
        <div>
          <img src="./assests/image_10.png" alt=" "  />
        </div>
      </div>
    
      <div className={styles.container1}  style={{background: "#151E3D"}}>
        <div>
          <img src="./assests/image.jpg" alt=" " />
        </div>
        <div>
              <h3>OUR EXPERIENCE</h3>
              <h1>We focus on customer satisfaction and quality</h1>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semperole dalaracc lacus vel facilisis volutpat est velitolm.</p>
            <div  className={styles.text1}>
              <div>
                <h1>25<span  style={{color: "orange"}}>+</span></h1>
                <h3> Year Experience</h3>
              </div>
              <div>
                <h1>500<span  style={{color: "#0D70E6"}}>+</span></h1>
                <h3> Happy clients</h3>
              </div>
              <div>
                <h1>20<span  style={{color: "orange"}}>+</span></h1>
                <h3>Qualified experts</h3>
              </div>
            </div>
            <form action="/contact">
              <button  className={styles.btn} to='/contact' >Get a quote</button>
              </form>
        </div>
      </div>
      <div>
        <div className={styles["form-control"]}>
          <h3>OUR SERVICES</h3>
          <h1>A wide range of services</h1>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
        </div>
        <div className={styles.menu}>
          <div>
            <img src="./assests/image_2.jpg" alt=" " width={380}/>
            <h2>Faucket & leak repairs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <h4>View service</h4>
          </div>
          <div>
            <img src="./assests/image_3.jpg" alt=" " width={380}/>
            <h2>Remodeling service</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <h4>View service</h4>
          </div>
          <div>
            <img src="./assests/image_4.jpg" alt=" " width={380}/>
            <h2>Drain cleaning & repairs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <h4>View service</h4>
          </div>
          <div>
            <img src="./assests/image_11.jpg" alt=" " width={380}/>
            <h2>Sewer repair & cleaning</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <h4>View service</h4>
          </div>
          <div>
            <img src="./assests/image_12.jpg" alt=" " width={380} />
            <h2>Water line repair</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <h4>View service</h4>
          </div>
          <div>
            <img src="./assests/image_13.jpg" alt=" " width={380}/>
            <h2>Gas line services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <h4>View service</h4>
          </div>
        </div>
      
      </div>
      <div className={styles.menu1}>
        <div className={styles["home-page"]}>
          <h4>OUR WORK</h4>
          <h1>Check how we can help you at home</h1>
          <p>Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus</p>
          <form action="/contact">
          <button to='/contact' >Get a quote</button>
          </form>
          </div>
          <div>
          <a href="https://youtu.be/Ojiv9Smi4XE"><img src="./assests/image_5.jpg" alt=" " width={700}/></a>
          </div>
        
      </div>
      <div className={styles["text-text"]}>
        <h3>TESTIMONIALS</h3>
        <h1>What our clients say</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
        <form action="/services">
         <button type="submit">Browse all services</button>
      </form>
      </div>
      <div>
        <div className={styles["page"]}>
          <h3>BLOG</h3>
          <h1>Check our lastest articles</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus</p>
        </div>
        <div className={styles["images"]}>
          <div>
            <img src="./assests/image_7.jpg" alt=" " width={410} />
            <h1>How to clean grease out of sink drains</h1>
            <h4>Dec 13, 2022</h4>
          </div>
          <div>
            <img src="./assests/image_8.jpg" alt=" " width={410} />
            <h1>When you should replace plumbing pipes?</h1>
            <h4>Dec 13, 2022</h4>
          </div>
          <div>
            <img src="./assests/image_9.jpg" alt=" " width={410} />
            <h1>Why you should replace your water heater</h1>
            <h4>Dec 13, 2022</h4>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default Home