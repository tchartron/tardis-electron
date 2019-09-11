<template>
    <div class="field is-horizontal">
        <div class="field-label">
            <label class="label">Group : </label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth is-medium">
                        <select name="groups" @change="findTasks()" v-model="selectedGroup">
                            <option value="0">Please pick a group</option>
                            <option v-for="group in groups" :value="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
