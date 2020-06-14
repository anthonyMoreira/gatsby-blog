import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import Author from './author'
import style from './sidebar.module.css'
import Social from './social'
import Copyright from './copyright'
import {useAuthor} from '../hooks/use-author'

export default function Sidebar () {
	const author = useAuthor()
	return ( <div className={style.sidebar}>
			<Author author={author} />
			<Navigation />
			<Social author={author} />
			<Copyright author={author} />
		</div>
	)
}

