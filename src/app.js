import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: ["Hello World", "Buy shopping", "Clean bathroom"],
      newTask: ""
    },
    methods: {
      saveNewTask: function (e) {
        e.preventDefault();
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});
