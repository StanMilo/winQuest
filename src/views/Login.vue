<template>
  <div class="about">
    <h1>This is a LOGIN page</h1>
        <h2>WinQuest</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="loading">sign in</button>
            </div>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    created () {},
    methods: {
        handleSubmit (e) {}
    }
};
</script>