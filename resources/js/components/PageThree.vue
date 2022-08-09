<template>
  <div class="container">
    <h2 class="text-center mt-5">Todo App</h2>

    <div class="d-flex m-5">
      <input v-model="task" type="text" class="form-control !important" placeholder="Введите задание">
      <button @click="submitTask" class="btn btn-warning rounded-0">Применить</button>
    </div>

    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Задание</th>
          <th scope="col">Статус</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <th>
            <span :class="{'finished-task': task.status === 'finished'}">
              {{ task.name }}
            </span>
          </th>
          <td style="width: 120px;">
            <span @click="changeStatus(index)" class="pointer"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-warning': task.status === 'in-progress',
                'text-success': task.status === 'finished',
              }"
            >
              {{ task.status }}
            </span>
          </td>
          <td style="width: 120px;">
            <button @click="editTask(index)" class="btn btn-primary">Edit</button>
          </td>
          <td style="width: 120px;">
            <button @click="deleteTask(index)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        task: '',
        editedTask: null,
        statuses: ['to-do', 'in-progress', 'finished'],
        tasks: [
          {
            name: 'some to-do task',
            status: 'to-do'
          },
          {
            name: 'some task thats in progress',
            status: 'in-progress'
          },
          {
            name: 'finished task',
            status: 'finished'
          }
        ]
      }
    },

    methods: {
      submitTask() {
        if (this.task.length === 0) return;

        if (this.editedTask === null) {
          this.tasks.push({
            name: this.task,
            status: 'to-do'
          });
        } else {
          this.tasks[this.editedTask].name = this.task;
          this.editedTask = null;
        }
        

        this.task = '';
      },

      deleteTask(index) {
        this.tasks.splice(index, 1);
      },

      editTask(index) {
        this.task = this.tasks[index].name;
        this.editedTask = index;
      },

      changeStatus(index) {
        let newIndex = this.statuses.indexOf(this.tasks[index].status);

        if (++newIndex > 2) {
          newIndex = 0;
        }

        this.tasks[index].status = this.statuses[newIndex];
      }
    },
  };
</script>

<style>
  .pointer {
    cursor: pointer;
  }

  .finished-task {
    text-decoration: line-through;
  }
</style>