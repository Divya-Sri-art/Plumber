import React from 'react'
import styles from './Services.module.css'

const Services = () => {
  return (
    <>
        <div className={styles["form-control"]}>
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
        </div>
        
        <div className={styles.menu}>
          <div>
          <a href="/servicepage"> <img src="./assests/image_2.jpg" alt=" " width={380}/></a>
            <h2>Faucket & leak repairs</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <form action="/servicepage">
            <button>View service</button>
            </form>
          </div>
          <div>
          <a href="/servicepage"><img src="./assests/image_3.jpg" alt=" " width={380}/></a>
            <h2>Remodeling service</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <form action="/servicepage">
         <button type="submit">View service</button>
      </form>
          </div>
          <div>
          <a href="/servicepage"><img src="./assests/image_4.jpg" alt=" " width={380}/></a>
            <h2>Drain cleaning & repairs</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <form action="/servicepage">
         <button type="submit">View service</button>
      </form>
          </div>
       
       
          <div>
          <a href="/servicepage"><img src="./assests/image_11.jpg" alt=" " width={380}/></a>
            <h2>Sewer repair & cleaning</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}>dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <form action="/servicepage">
         <button type="submit">View service</button>
      </form>
          </div>
          <div>
          <a href="/servicepage"><img src="./assests/image_12.jpg" alt=" " width={380} /></a>
            <h2>Water line repair</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <form action="/servicepage">
         <button type="submit">View service</button>
      </form>
          </div>
          <div>
          <a href="/servicepage"><img src="./assests/image_13.jpg" alt=" " width={380}/></a>
            <h2>Gas line services</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <form action="/servicepage">
         <button type="submit">View service</button>
      </form>
          </div>
        </div >
        <div className={styles.container}>
            <div>
                <img src="./assests/services_1.jpeg" alt=" " />
            </div>
            <div className={styles.error}>
                <h1>Having a problem?<span className={styles.alt}>We'll fixed it today!</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat<span className={styles.alt1}> imperdiet quis at pellentesque nunc commodo nunc purus adipiscing</span></p>
                <form action="/contact">
                <button to='/contact' >Get a quote</button>
                </form>
            </div> 
        </div>
      
      </>
  )
}

export default Services