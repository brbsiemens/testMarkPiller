import { useState } from 'react'

import { TabContent } from './tabsContent'
import './index.css'
import { items } from './tabs'
import { Link } from 'react-router-dom'

function App() {
	const [active, setActive] = useState(null)

	return (
		<div>
			<div className='tab'>
				{items.map((data, i) => (
					// eslint-disable-next-line react/jsx-key
					<Link to={`/${data.title}`} key={i}>
						<button
							onClick={e => {
								setActive(e.target.dataset.index)
							}}
							data-index={i}
							key={i}
						>
							{data.title}
						</button>
					</Link>
				))}
			</div>
			<TabContent {...items[active]} />
		</div>
	)
}

export default App
