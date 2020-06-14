import React from 'react'
import style from './copyright.module.css'
export default ({ author }) => (
	<div className={style.copyright}>{author.copyright}</div>
)
