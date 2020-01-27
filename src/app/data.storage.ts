import { TodoListI } from './todo.interface';

export let todoList: TodoListI[] = [
    {
        title: 'something to complete...',
        description: 'ajdvbajbkldj',
        timeAdded: Date.now().toString()
    },
    {
        title: 'nothing to complete...',
        description: 'ajdeheherhergeltghedj',
        timeAdded: Date.now().toString()
    },
    {
        title: 'nothing to archive...',
        description: 'dsd',
        timeAdded: Date.now().toString()
    },

]