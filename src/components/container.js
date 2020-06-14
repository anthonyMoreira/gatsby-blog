import React from 'react'

export default ({ children }) => (
	<div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '20% 80%' }}>{children}</div>
)
