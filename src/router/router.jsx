import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/DummyList',
				element: <App />,
			},
			{
				path: '/DummyTable',
				element: <div>123</div>,
			},
			{
				path: '/DummyChart',
				element: <App />,
			},
		],
	},
])

export { router }
