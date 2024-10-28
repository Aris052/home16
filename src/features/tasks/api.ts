import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IState, IUpdateAction } from './types'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
	const response = await axios.get('http://localhost:3000/tasks')
	return response.data
})

export const updateTaskAsync = createAsyncThunk('tasks/updateTaskAsync', async (update: IUpdateAction, { getState }) => {
	const state = getState() as IState
	const currentTask = state.tasks.find(task => task.id === update.id)
	const updatedTask = {
		...currentTask,
		status: update.status
	}
	const response = await axios.put(`http://localhost:3000/tasks/${update.id}`, updatedTask)
	return response.data // Return the updated task
}
)
