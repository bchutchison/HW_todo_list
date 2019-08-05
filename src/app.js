import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Task1", priority: "High"},
        {name: "Task2", priority: "Low"},
        {name: "Task3", priority: "Low"}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function (e) {
        e.preventDefault();
        this.tasks.push({
          name: this.newTask,
          priority: this.newPriority
        });
        this.newTask = "";
      }
    }
  });
});
