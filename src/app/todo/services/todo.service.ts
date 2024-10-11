import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: any = [];

  constructor() {
    this.loadTodos();
  }

  public addTodo( description: string, priority: string ) {
    this.todos.push({
      id: Math.floor(Math.random() * 1) + Date.now(),
      description, 
      priority, 
      completed: false
    })
    this.saveTodos();
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  public loadTodos() {
    const todos = localStorage.getItem('todos')
    if(todos) {
      this.todos = JSON.parse(todos);    
    }
  }

  public deleteTodo(id: number) {
    this.todos = this.todos.filter((todo: any) => todo.id !== id);
    this.saveTodos()
  }

  public completedTodo(id: number) {
    const todo = this.todos.find((todo: any) => todo.id === id)
    if(todo) {
      todo.completed = !todo.completed;
      this.saveTodos()
    }
  }

}
