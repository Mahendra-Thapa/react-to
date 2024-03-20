import React from 'react'
import Content from './pcontent'
import Sidebar from './psidebar'
const Homepage = () => {
    
    const mainContent ={
        title: 'Web-Site',
        details: 'A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically dedicated to a particular topic or purpose, such as news, education, commerce, entertainment, or social media. '
    };

    const sideBar =[
        'Home',
        'About',
        'Content',
    ]


  return (
    <div className=' grid grid-cols-4 '>
        <Sidebar side= {sideBar} />
        <Content main = {mainContent} />
    </div>
  )
}

export default Homepage