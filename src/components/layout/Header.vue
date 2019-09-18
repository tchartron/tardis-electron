<template>
    <div class="columns is-mobile is-vcentered has-text-centered">
        <div class="column is-one-third">
            <div class="logo">
                <img alt="web-logo" src="@/assets/logo-web-white.png">
            </div>
        </div>
        <div class="column">
            <div class="box is-unselectable has-text-left has-margin-left-20 has-margin-right-20">
                <span class="underline">User informations</span>
                <span class="is-block is-size-7">id : {{ user.id }}</span>
                <span class="is-block is-size-7">name : {{ user.name }}</span>
                <span class="is-block is-size-7">email : {{ user.email }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['user']
};
</script>

<style scoped>
.logo > img {
    /*text-align: center;*/
    max-height: 70px;
}
</style>
