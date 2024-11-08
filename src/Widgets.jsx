import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import  FiberManualRecordIcon  from '@mui/icons-material/FiberManualRecord';
function Widgets() {

const newsArticle = (heading , subtitle ) => (
    <div className='widgets__article'> 
    <div className='widgets__articleLeft'>
<FiberManualRecordIcon/>
    </div>
    <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
    </div>
)

  return (
    <div className='widgets'>
    <div  className = "widgets__header"> 
    <h2> LinkedIn News </h2>
    <InfoIcon/> 
    </div>
{newsArticle("AI Revolution: How ChatGPT is Shaping the Future", "Top news - 12,500 readers")}
{newsArticle("New JavaScript Frameworks Emerging in 2024", "Tech news - 8,300 readers")}
{newsArticle("SpaceX Successfully Launches New Satellite", "Top news - 15,200 readers")}
{newsArticle("Stock Market Update: Tech Sector Surges", "Finance news - 9,700 readers")}
{newsArticle("Web Development Trends You Need to Know", "Developer news - 11,000 readers")}
{newsArticle("Breakthrough in Quantum Computing Announced", "Science news - 10,400 readers")}
</div>


  )
}

export default Widgets