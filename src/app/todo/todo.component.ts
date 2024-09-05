import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';import { FormsModule } from '@angular/forms';

interface Todo {
  text: string;
  completed: boolean;
  isEditing:boolean
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  newTodo: string = '';
  todos: Todo[] = [];

  // addTodo Method
  addTodo() {

    if (this.newTodo.trim() !== '') {
      this.todos.push({
        text: this.newTodo,
        completed: false,
        isEditing: false,
      });
      this.newTodo = '';
    }
    else{
      alert('Please add something')
    }
  }

  // delete NewTodo Method
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
  updateTodo(index: number) {
    this.todos[index].isEditing =false
  }

  editTodo(index:number){
    this.todos[index].isEditing = true
  }
}
