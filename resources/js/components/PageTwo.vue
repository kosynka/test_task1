<template>
    <p v-for="(animal, type, itr) in animals">
        <b>{{ itr+1 }} {{ type }}</b>
        <br>
        
        <b>Name:</b> {{ animal.name }}
        <br>
        <b>Price:</b> {{ animal.price }}
        <br><br>
    </p>
</template>

<script>
import axios from 'axios';

    export default{
        data: function() {
            return {
                names: ['Dogs', 'Cats', 'Birds'],
                animals: []
            }
        },

        mounted() {
            this.loadAnimals();
        },

        methods: {
            loadAnimals: function() {
                axios.get('/api/animals')
                    .then((response) => {
                        console.log(response),
                        this.animals = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
    };
</script>