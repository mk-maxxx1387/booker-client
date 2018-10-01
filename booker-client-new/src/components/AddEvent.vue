<template>
    <div>
        <h2>Add new event</h2>     
        <b-form id="addEventForm" @submit="onSubmit">
            <b-row>
                <label for="user" class="col-3 col-form-label">1. Booked for:</label>
                <b-col-3>
                    <b-form-select class="form-control mb-5" name="user" v-model="form.user" :options="users" />
                    <b-form-invalid-feedback id="input1LiveFeedback">
                        This is a required field and must be at least 3 characters
                    </b-form-invalid-feedback>
                </b-col-3>
            </b-row>
            <b-row>
                <label for="year" class="col-3 col-form-label">2. I would like to book this meeting:</label>
                <b-col-3>
                    <input class="form-control mb-5" type="date" :min="today"  id="date-input" v-model="form.date">
                    <b-form-invalid-feedback id="input2LiveFeedback">
                        This is a required field and must be at least 3 characters
                    </b-form-invalid-feedback>
                </b-col-3>
            </b-row>
            <b-row>
                <label class="col-3 col-form-label">3. Specify what the time and end of the meeting.</label>
                <b-col-3>
                    <b-form-select class="form-control mb-5" id="hours-start" v-model="form.start_hours" :options="hours"/>
                </b-col-3>
                <b-col-3>
                    <b-form-select class="form-control mb-5" id="minutes-start" v-model="form.start_minutes" :options="minutes"/>
                </b-col-3>
                <b-col-3>
                    &nbsp;
                    &#95;
                    &nbsp;
                </b-col-3>
                <b-col-3>
                    <b-form-select class="form-control mb-5" id="hours-end" v-model="form.end_hours" :options="hours"/>
                </b-col-3>
                <b-col-3>
                    <b-form-select class="form-control mb-5" id="minutes-end" v-model="form.end_minutes" :options="minutes"/>
                </b-col-3>
            </b-row>
            <b-row>
                <label class="col-3 col-form-label" for="descript">4. Description</label>
                <b-col-5>
                    <textarea style="resize: none;" class="form-control rounded-0" id="descript" rows="5" v-model="form.description"></textarea>
                    <b-form-invalid-feedback id="input5LiveFeedback">
                        This is a required field and must be at least 3 characters
                    </b-form-invalid-feedback>
                </b-col-5>
            </b-row>
            <b-row>
                <b-col class="mt-5">
                    <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Add event</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, minLength } from "vuelidate/lib/validators"

export default {
    data(){
        return {
            form: {
            
            },
            users: [
                "test 1",
                "test 2",
                "test 3"
            ],
            minutes: [
                "00",
                "30"
            ]
        }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        user: {
          required
        },
        date: {
          required
        },
        start_time: {
          required
        },
        end_time: {
          required
        },
        description: {
          required,
          minLength: minLength(5) 
        }
      }
    },
    methods: {
        onSubmit(){
            console.log(this.form);
        }
    },
    computed: {
        today(){
            return new Date().toISOString().slice(0,10);
        },
        hours(){
            let hours = [];
            for(var i = 0; i < 24; i++){
                hours.push(i);
            }
            return hours;
        }
    }
}
</script>
