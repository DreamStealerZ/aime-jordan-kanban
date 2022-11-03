import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Column } from './column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cdr: ChangeDetectorRef) {
    this.id = 1;
  }
  id!: number;
  nom: string = '';
  intitule: string = '';
  task: string = '';
  backLogTask: string = '';
  toDoTask: string = '';
  inProgressTask: string = '';
  doneTask: string = '';
  columns: Column[] = [];

  addBackLogTask() {
    this.backlog.push(this.task);
  }
  removeBackLogTask(index: number) {
    if (index !== -1) {
      this.backlog.splice(index, 1);
      this.cdr.detectChanges();
    }
  }

  addToDoTask() {
    this.todo.push(this.toDoTask);
  }
  removeToDoTask(index: number) {
    if (index !== -1) {
      this.todo.splice(index, 1);
      this.cdr.detectChanges();
    }
  }

  addInProgressTask() {
    this.inprogress.push(this.inProgressTask);
  }
  removeInProgressTask(index: number) {
    if (index !== -1) {
      this.inprogress.splice(index, 1);
      this.cdr.detectChanges();
    }
  }

  addDoneTask() {
    this.done.push(this.doneTask);
  }
  removeDoneTask(index: number) {
    if (index !== -1) {
      this.done.splice(index, 1);
      this.cdr.detectChanges();
    }
  }

  addColumn() {
    var column = document.createElement('div');
    var h2 = document.createElement('H2');
    h2.innerHTML = 'Description';
    column.classList.add('container');
    column.classList.add('backlog');
    column.classList.add('backlog-glow');
    column.classList.add('rounded');

    column.appendChild(h2);

    document.getElementById('div1')?.appendChild(column);
  }

  title = 'aime-jordan-td-angular';

  backlog = [
    'Comment the code',
    'Increase loading speed',
    'Add new marketing article',
    'Add new communication article',
  ];

  todo = ['Add new social article'];

  inprogress = ['Creat a new design blog'];

  done = ['Create landing page', 'Create navbar', 'Create footer'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
