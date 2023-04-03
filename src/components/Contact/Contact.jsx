import React from 'react'
import styles from './Contact.module.css'
import { TfiLocationPin } from 'react-icons/tfi'
import { FiMail , FiPhone} from 'react-icons/fi'
import Faq from "react-faq-component";
const Contact = () => {

    const data = {
        title: "Frequently Asked Questions",
        contact: "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.",
        rows: [
            {
                title: "How many years of experience does plumbing has?",
                content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit id venenatis oretium risus euismod dictum egestas orci netus feugiat ut egestas ut. `,
            },
            {
                
                title: "Do you have case studies of past successful projects?",
                content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit id venenatis oretium risus euismod dictum egestas orci netus feugiat ut egestas ut. `,
            },
            {
                
                title: "How can I get a consultation and quote for my project?",
                content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit id venenatis oretium risus euismod dictum egestas orci netus feugiat ut egestas ut. `,
            },
            {
               
                title: "How big is your team of plumbers?",
                content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit id venenatis oretium risus euismod dictum egestas orci netus feugiat ut egestas ut. `,
            },
            {
               
                title: "Does Plumbing has a project minimum?",
                content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit id venenatis oretium risus euismod dictum egestas orci netus feugiat ut egestas ut. `,
            },
            {
               
                title: "Do you have any certification?",
                content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit id venenatis oretium risus euismod dictum egestas orci netus feugiat ut egestas ut. `,
            },
        ],
    };
    
    const faqstyles = {
        // bgColor: 'white',
        titleTextColor: "#182944",
        rowTitleColor: "#182944",
        rowContentColor: 'black',
        rowContentTextSize: '15px',
        rowTitleTextSize: '22px',
        transitionDuration: '0.3s',
        titleTextColor:  "#182944",
        
       // bgColor: "#151E3D",
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
       

    };
    


    
  return (
    
   
<div>
    <div className={styles["form-control"]}>
  
        <div>
            <form className={styles.swap}>
            <h3>Contact details</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisc <span className={styles.alt}>elit tortor eu egestas morbi sem vulputate.</span></p>
            <div className={styles.container_2}>
                <div className={styles.btn}>
                <TfiLocationPin />
                </div>
                <div className={styles.text}>
                <h4>Visit our office</h4>
                <p>149W 70th St, 9000<span className={styles.alt_1}>Los Angeles, CA</span> </p>

                </div>
            </div>
            <div className={styles.container_2}>
                <div  className={styles.btn}>
                < FiMail />
                </div>
                <div className={styles.text}>
                <h4>Mail:</h4>
                <p>info@plumbing.com</p>
                </div>
            </div >
            <div className={styles.container_2}>
                <div  className={styles.btn}>
                < FiPhone />
                </div>
                <div className={styles.text}>
                <h4>Phone:</h4>
                <p>(234) 231 - 2123</p>
                </div>
            </div>
            </form>
        </div>
        
        <div className={styles.align}>
        <div className={styles.container}>
        <h4>CONTACT US</h4>
        <h1>Get in touch today</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing <span className={styles.page}> tincidunt interdum tellus du. </span></p>
        <div className={styles.container_1}>
        <div>
            <h4>Name</h4>
            <input type="text" name="text" placeholder="John Carter" />
        </div>
        <div>
            <h4>Email</h4>
            <input type="mail" name="mail" placeholder="example@email.com" />
        </div>
        </div>
        <div className={styles.menu}>
        <form>
            <h4>phone</h4>
            <input type="text"  name="text" placeholder="(123) 456-789" />
        </form>
        <form>
            <h4>Subject</h4>
            <input type="text"  name="text" placeholder="ex.Services" />
        </form>
        </div>
        <form className={styles.menu_1}>
            <h4>Leave us a message</h4>
            <input type="text" name="text" placeholder="Please type your message here..."  />
        </form>
        <button className={styles["sendmessage-btn"]}>Send message</button>
    </div>
        </div>
        </div>
         <div className={styles.faq}>
    <Faq
                data={data}
                styles={faqstyles}
                config={config}
            />
            </div>
</div>
   
    
    
  )
}

export default Contact