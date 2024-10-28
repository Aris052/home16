import { useAppDispatch } from '../../app/hooks'
import { updateTaskAsync } from './api'
import { ITask } from './types'

interface TaskProps {
	task: ITask // Use the ITask type for the task prop
}
export const Task: React.FC<TaskProps> = ({ task }) => {
	const dispatch = useAppDispatch()


	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newStatus = e.target.value
		dispatch(updateTaskAsync({ id: task.id, status: newStatus })) // Use the async thunk
	}
	return <div >
		<p>{task.content}</p>
		<img
			src={
				task.status == "unstarted" ?
					"https://cdn1.iconfinder.com/data/icons/basic-ui-pixel-perfect-16px/16/pending_progress_awaiting_time_watch-512.png"
					: task.status == "onProcess" ?
						"https://cdn4.iconfinder.com/data/icons/ui-playground-outline/100/cycle-reload-arrows_copy-512.png"
						: "https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-15-512.png"
			} />
		<select value={task.status} onChange={handleChange}>
			<option value={"unstarted"}>unstarted</option>
			<option value={"onProcess"}>on process</option>
			<option value={"completed"}>completed</option>
		</select>
	</div>
}