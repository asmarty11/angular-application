import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodo-app';
  
  todos = [ 
    /*{
      label: 'Bring Milk',
      done:false,
      priority:3
    },
    {
      label: 'Pay mobile bill',
      done: false,
      priority:2
    },
    {
      label: 'Bring Milk',
      done: true,
      priority:5
    }*/
  ];

  delete(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }

  add(newTodoLabel) { 
    var newTodo = {
      label: newTodoLabel,
      priority:1,
      done: false
    };
    this.todos.push(newTodo);

  }

  undone(todo) {
    todo.done = !todo.done;
  }
  done(todo) {
    todo.undone = !todo.undone;
  }
}

