function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
const Projects = ()=>{
    const pros = importAll(require.context('../images/projects'))
 
    const content = Object.entries(pros)
    .map(([key,value])=>
    {
      let link_name = key.split('.')[0].toLowerCase()
      if (link_name==='slack_mock')
      {link_name='slack-mock'} 
      const name= key.split('.')[0].replace('_',' ')
      return (
        <div key={name} className='project-card'>
            <h3 className='title'>{name}</h3>
            <img src={value} alt={name} className='project'>
            </img>
            <div className="links">
                    <div className="link"><a href={"https://github.com/Satoshi-Sh/"+link_name} target="_blank"  rel="noreferrer">View Code</a></div>
                    <div className="link"><a href={"https://satoshi-sh.github.io/"+link_name} target="_blank"  rel="noreferrer">Live Preview</a></div>
                </div>

        </div>
      )
    })

    return (<div className='projects'>
               <h1>Projects</h1>
               <div className='projects-div'>
               {content}
               </div>
           </div>)
}

export default Projects;