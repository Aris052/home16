import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Task } from './task'
import { fetchTasks } from './tasks.slice'

export const TaskList = () => {
	const tasks = useAppSelector(state => state.tasks)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchTasks())
	}, [])
	return <>
		<h3>Task List</h3>
		<div id='tasks'>
			{
				tasks.map(task =>
					<div key={task.id}>
						<Task task={task} />
					</div>
				)
			}
		</div>
	</>
}