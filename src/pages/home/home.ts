import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { ArchivesPage } from '../archives/archives';
import { TodoProvider } from '../../providers/todo/todo';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];

  public isReOrderEnabled = false;

  constructor(public navCtrl: NavController, private _todoProvider: TodoProvider, public alertCtrl: AlertController) {
    this.getAllTodos();
  }

  // ionViewDidLoad() {
  //   this.getAllTodos();
  // }

  goToArchives(){
    this.navCtrl.push(ArchivesPage);
  }

  getAllTodos() {
    this.todos = this._todoProvider.getAllTodos();
  }

  showTodoForm() {  
    const alertForm = this.alertCtrl.create({
      title:"Add New Task",
      message: "Provide the name/description of your new task",
      inputs: [{
        name:'todoInput',
        placeholder: '* Enter New Task'
      }],
      buttons: [
        {text: 'Cancel'}, 
        {
          text: 'Save', 
          handler: data => { 
            // console.log(todoInput);
            this.addTodo(data.todoInput);
          } 
        }
      ]
    });
    
    alertForm.present();
  }
  
  addTodo(item) {
    // this.todos.push(item);
    this._todoProvider.addTodo(item);
  }

  archiveItem(index){
    this._todoProvider.archivedTodo(index);
  }

  showEditForm(index) {
    let task = this.todos[index];

    const editForm = this.alertCtrl.create({
      title: 'Edit Task',
      message: 'Edit your task message',
      inputs: [ {name: 'taskInput', placeholder: '* Edit task', value: task} ],
      buttons: [
        {text: 'Cancel'},
        {
          text: 'Save', 
          handler: data => { this.updateTask(data.taskInput,index); }
        }
      ]
    });

    editForm.present();
  }

  updateTask(item,index) {
    // console.log(item + " " + index);
    this._todoProvider.editTodo(index, item);
  }

  todListReorder($event) {
    reorderArray(this.todos,$event);
  }

  toggleReorderEnabled() {
    this.isReOrderEnabled = !this.isReOrderEnabled;
  }
}
