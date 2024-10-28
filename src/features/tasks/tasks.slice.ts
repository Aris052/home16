import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchTasks, updateTaskAsync } from './api'
import { IState, IStatus, ITask, IUpdateAction } from './types'

const initialState: IState = {
	tasks: [
	]
}


export const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		updateTask: (state: IState, action: PayloadAction<IUpdateAction>) => {
			const task = state.tasks.find(task => task.id == action.payload.id)
			if (task) {
				task.status = action.payload.status as IStatus
			}
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.tasks = action.payload
			})
			.addCase(updateTaskAsync.fulfilled, (state, action: PayloadAction<ITask>) => {
				const index = state.tasks.findIndex(task => task.id === action.payload.id)
				state.tasks[index] = action.payload
			})
	}
})

export const reducer = taskSlice.reducer
export const { updateTask } = taskSlice.actions
export { fetchTasks }
