import React from 'react'
import style from './author.module.css'
import Img from 'gatsby-image'

export default ({ author }) => (
	<div>
		<Img fixed={author.image.fixed} className={style.photo}/>
		<h2 className={style.title}>{author.name}</h2>
		<p className={style.subtitle} >{author.sidebarBio}</p>
	</div>
)
