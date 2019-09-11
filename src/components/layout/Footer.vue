<template>
    <div class="columns">
        <div class="column is-one-third">
            <div class="box is-unselectable has-text-left has-margin-left-50 has-margin-right-50">
                <span class="underline is-block has-text-centered">API informations</span>
                <span class="is-block is-size-7">Token : {{ api.access_token }}</span>
                <span class="is-block is-size-7">Expiration : {{ api.expires_in }}</span>
                <span class="is-block is-size-7">Type : {{ api.token_type }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['api']
};
</script>

<style scoped>
.box span {
    overflow-wrap: break-word;
}
</style>
