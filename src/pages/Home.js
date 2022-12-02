function importAll(r) {
   let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
   return images
  }

const Home = ()=>{
   const langs = importAll(require.context('../images/languages', false, /\.(png|jpe?g|svg|webp)$/));
   const fronts = importAll(require.context('../images/frontend', false, /\.(png|jpe?g|svg|webp)$/));
   const backs = importAll(require.context('../images/backend', false, /\.(png|jpe?g|svg|webp)$/));
   const tools = importAll(require.context('../images/tools', false, /\.(png|jpe?g|svg|webp)$/));
   function createContent(obj){
      const content = Object.entries(obj)
      .map(([key,value]) =>
      {
      const name = key.split('.')[0]
      return(
      <div key={name} className='icon-card'>
      <img src={value} alt={name} className='lang'>
      </img>
      <p>{name}</p>
      </div>
      )
      })
      return content
   } 
   const language = createContent(langs)
   const frontend = createContent(fronts)
   const backend = createContent(backs)
   const tool = createContent(tools)
   
    return (
    <div className="home">
       <h1>Satoshi S.</h1>
       <div className='desc-div'>
       <img className='medium' src="images/logo.jpg" alt='logo'></img>  
       
       <div class="circular-sb">
       An aspiring <span className='role'> Web Developper </span> and <span className='role'> Data Analyst </span> with an Econimics Degree.
<div class="circle1"></div>
<div class="circle2"></div>
</div>

       </div>
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
       <h3>Programing Languages</h3>
       <div key='1' className='langs-div'>  
          {language}
       </div>
       <h3>Front End</h3>
       <div key='2' className='langs-div'>  
          {frontend}
       </div>
       <h3>Back End</h3>
       <div key='3' className='langs-div'>  
          {backend}
       </div>
       <h3>Development Tools</h3>
       <div key='4' className='langs-div'>  
          {tool}
       </div>
    </div>
    )
}

export default Home;