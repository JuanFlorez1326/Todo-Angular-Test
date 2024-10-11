import { Component, SimpleChanges } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todos: any = this.todoService.todos;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) this.todos = this.todoService.todos
  }

  public deleteTodo(id: string) {
    this.todoService.deleteTodo(Number(id))  
  }

  public checkTask(id: string) {
    this.todoService.completedTodo(Number(id))  
  }

}
