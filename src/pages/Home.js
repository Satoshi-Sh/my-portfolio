const Home = ()=>{
    return (
    <div className="home">
       <h1>Satoshi S.</h1>
       <p>An aspiring web developper and data analyst.</p>
       <div className='work-div'>
          <h2>My Works</h2>
          <div className='works'>
             <div className='img-desc'>
                <a href="https://github.com/Satoshi-Sh/" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='github logo' src='images/github.png'></img>
                </a>
                <p>Github Profile</p>
             </div>
             <div className='img-desc'>
                <a href="https://www.kaggle.com/satoshiss" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='kaggle logo' src='images/kaggle.png'></img>
                </a>
                <p>Kaggle Profile</p>
             </div>
             <div className='img-desc'>
                <a href="https://www.linkedin.com/in/satoshi-89bb58a8/" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='Linkedin logo' src='images/linkedin.png'></img>
                </a>
                <p>Linkedin Profile</p>
             </div>
             <div className='img-desc'>
                <a href="https://satoshi40.pythonanywhere.com/" target='_blank' rel="noreferrer">
                    <img className='work-logo' alt='Cat logo' src='images/cat.png'></img>
                </a>
                <p>Django Portofolio</p>
             </div>
          </div>
       </div> 
       <h2>Skills</h2>
       
    </div>
    )
}

export default Home;