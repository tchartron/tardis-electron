<template>
    <div class="box" v-show="showTaskDetails">
        <div class="notification">
          <button class="delete" @click="hideDetails"></button>
          <p class="underline">Task Details :</p>
          <p><span class="bold underline">Id :</span> {{ taskDetails.id }}</p>
          <p><span class="bold underline">Company Id :</span> {{ taskDetails.company_id }}</p>
          <p><span class="bold underline">Title :</span> {{ taskDetails.title }}</p>
          <p><span class="bold underline">Description :</span> {{ taskDetails.description }}</p>
          <p><span class="bold underline">Completed :</span> {{ (taskDetails.completed) ? 'Yes' : 'No' }}</p>
          <p><span class="bold underline">Created :</span> {{ taskDetails.created_at }}</p>
          <p><span class="bold underline">Updated :</span> {{ taskDetails.updated_at }}</p>
        </div>
    </div>
</template>
