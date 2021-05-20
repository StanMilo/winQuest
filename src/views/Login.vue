<template>
  <div class="about">
    <h1>This is a LOGIN page</h1>
        <h2>WinQuest</h2>
        <form @submit.prevent="checkAndSubmitForm" novalidate="true">
            <!-- <div class="form-group">
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
            <div v-if="error" class="alert alert-danger">{{error}}</div> -->
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Email</span>
                <input v-model="email" type="email" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="john@example.com">
              </label>
              <label class="block">
                <span class="text-gray-700">Password</span>
                <input v-model="password" type="password" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
              </label>
              <button class="rounded-md border border-gray-300" type="submit" :disabled="loading">Submit</button>
            </div>
        </form>

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </p>
  </div>
</template>

<script>
import { userService } from '../services';

export default {
    data () {
        return {
            email: null,
            password: null,
            errors: [],
            loading: false,
        }
    },
    created () {},
    methods: {
        checkAndSubmitForm: function (e) {
            this.errors = [];

            if (!this.email) {
                this.errors.push('Email required.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }

            if (!this.password) {
                this.errors.push('Password required.');
            }

            if (!this.errors.length) {
                this.loading = true;
                this.submitForm();
            }

            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        submitForm: async function() {
            try {
                const res = await userService.login(this.email, this.password)
                this.loading = false;
                console.log("RES: ", res)
            } catch(err) {
                this.loading = false;
                this.errors.push(err)
            }
        }
    }
};
</script>