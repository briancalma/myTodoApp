// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*\
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos = [];
  private archivedTodos = [];

  constructor() {
  }

  getAllTodos() {
    return this.todos;
  }

  getTodoItem(index) {
    return this.todos[index];
  }
  
  addTodo(item) {
    this.todos.push(item);
  }

  editTodo(index, val) {
    this.todos[index] = val; 
  }

  archivedTodo(index) {
    let item = this.todos[index];
    this.todos.splice(index,1);
    this.addArchivedItem(item);
  }

  getAllArchived() {
    return this.archivedTodos;
  }

  addArchivedItem(item) {
    this.archivedTodos.push(item);
  }

  
}
