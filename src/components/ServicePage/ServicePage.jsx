import React from 'react'
import styles from './ServicePage.module.css'

const ServicePage = () => {
  return (
    <>
        
        <div className={styles.menu}>
            <h1>Faucet & leak repairs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing  elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.</p>
            <form action="/contact">
            <button>Get a quote</button>
            </form>
         </ div>
         <div className={styles.image}>
        <img src="./assests/image_2.jpg" alt="" />
        </div>
            <div className={styles.container}>
            <div className={styles["form-control"]}>
                <h1>About the service</h1>
                <p>At risus viverra adipiscing at in tellus integer feugiat. Nisl pretium fusce id velit ut tortor. Sagittis orci a scelerisque purus semper eget. At lectus urna duis convallis. Porta nibh venenatis cras sed felis eget. Neque laoreet <span className={styles.alt}>Amet orci euismod in mi elit aliquam. Sit sollicitudin posuere arcu sem facilisis eget sit enim. Ut blandit laoreet bibendum adipiscing libero neque dui. Varius non augue lectus consequat sit at feugiat bibendum. Et id at lobortis tristique. Mi tellus egestas ac a duis.</span></p>
                <h2>What is included?</h2>
                <p>Nisi quis eleifend quam adipiscing vitae. Aliquet bibendum enim facilisis gravida neque. Velit euismod in pellentesque massa placerat.</p>
                <p > &#x2022; Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac auctor.</p>
                <p> &#x2022; Adipiscing elit ut aliquam purus sit amet. Viverra suspendisse potenti.</p>
                <p> &#x2022; Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</p>
                <p> &#x2022; Adipiscing elit ut aliquam purus sit amet. Viverra suspendisse potenti.</p>
                <p>At risus viverra adipiscing at in tellus integer feugiat. Nisl pretium fusce id velit ut tortor. Sagittis orci a scelerisque purus semper eget. At lectus urna duis convallis. Porta nibh venenatis cras sed felis eget. Neque laoreet</p>
            </div>
           
                <div >
                    <form  className={styles.swap}>
                    <h4>Contact details</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisc elit tortor eu.</p>
                    <h3>Name</h3>
                    <form>
                    <input type="text" name="name" placeholder="John Carter" />
                    </form>
                    <h3>Email</h3>
                    <form>
                    <input type="email" name="email" placeholder="example@email.com" />
                    </form>
                    <h3>Phone</h3>
                    <form>
                    <input type="text" name="numbers" placeholder="(123) 456-789" />
                    </form>
                    <form action="/contact">
                    <button>Get a quote</button>
                    </form>
                    </form>
                </div>
                </div>
            
       <div className={styles.container_1}>
        <div className={styles.page_1}>
        <div >
        <h1>Related services</h1>
        </div>
        <div>
        <form action="/services">
         <button type="submit">Browse all services</button>
      </form>
       
        </div>
        </div>
            <div className={styles.menu1}>
            <div>
                <form style={{backgroundColor: "white" , borderRadius: "1rem"}}>
            <a href="/servicepage"><img src="./assests/image_3.jpg" alt=" " width={380}/></a>
            <h2>Remodeling service</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <button>View service</button>
            </form>
          </div>
          <div>
          <form style={{backgroundColor: "white" , borderRadius: "1rem"}}>
          <a href="/servicepage"><img src="./assests/image_4.jpg" alt=" " width={380}/></a>
            <h2>Drain cleaning & repairs</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}> dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <button>View service</button>
            </form>
          </div>
       
       
          <div>
          <form style={{backgroundColor: "white" , borderRadius: "1rem"}}>
          <a href="/servicepage"><img src="./assests/image_11.jpg" alt=" " width={380}/></a>
            <h2>Sewer repair & cleaning</h2>
            <p>Tur adipiscing elit ametectela dalaracc lorem ipsum<span className={styles.page}>dolor sit ametectelacus vel facilisis semper volutpat</span></p>
            <button>View service</button>
            </form>
          </div>
            </div>
        
       </div>

    </>
  )
}

export default ServicePage