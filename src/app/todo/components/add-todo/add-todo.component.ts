import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  public todoForm!: FormGroup;
  public priorityValues = [
    'Alta', 'Media', 'Baja'
  ]

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }

  public addTodo() {
    if(this.todoForm.valid) {
      const { description, priority } = this.todoForm.value;
      this.todoService.addTodo(description, priority);
    }
  }

}