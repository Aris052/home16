export interface IState {
	tasks: ITask[]
}

export interface ITask {
	id: number | string
	content: string
	status: IStatus
}

export enum IStatus {
	Unstarted = "unstarted",
	OnProcess = "onProcess",
	Completed = "completed"
}

export interface IUpdateAction {
	id: number | string
	status: IStatus | string
}