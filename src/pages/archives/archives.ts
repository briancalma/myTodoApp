import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-archives',
  templateUrl: 'archives.html',
})
export class ArchivesPage {

  public archivedList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _todoProvider: TodoProvider) {
    this.getAllArchivedTodo();
  }

  ionViewDidLoad() {

  }

  getAllArchivedTodo() {
    this.archivedList = this._todoProvider.getAllArchived();
  }
  

}
