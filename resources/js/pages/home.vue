<template>
<navbar />

  <div class="relative bg-gradient-to-r mb-auto from-purple-900 to-black-800 py-16 font-[sans-serif]">
      <div class="absolute inset-0">
        <img src="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/08/The-4-Squat-Progressions.jpg" alt="Background Image" class="w-full h-full object-cover opacity-50" />
      </div>
      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to Our Premium Service</h1>
        <p class="text-lg md:text-xl mb-8">Experience excellence like never before with our exclusive products and services.</p>
        <router-link to="/progression">
           <button type="button" class="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Voir mes Progression</button>
        </router-link>
      </div>
    </div>

    <div class=" mt-4 text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">Ajouter une Progression</h2>
    </div>
    <form class=" mt-16 font-[sans-serif] m-6 max-w-4xl mx-auto">
      <div class="grid sm:grid-cols-2 gap-10">
        <div class="relative flex items-center">
          <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">poids
            </label>
          <input v-model="progressionData.poids" type="number" placeholder="Enter poids"
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>
        <div class="relative flex items-center">
          <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Poitrine
            </label>
          <input v-model="progressionData.Poitrine" type="number" placeholder="Enter Poitrine"
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
        <div class="relative flex items-center">
          <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Mollet
            </label>
          <input v-model="progressionData.Mollet" type="number" placeholder="Enter mollet."
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
        <div class="relative flex items-center">
          <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Bras</label>
          <input v-model="progressionData.Bras" type="number" placeholder="Enter Bras"
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
         
        </div>
        <div class="relative flex items-center">
          <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Hauteur
            </label>
          <input v-model="progressionData.Hauteur" type="number" placeholder="Enter Hauteur"
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
        <div class="relative flex items-center">
          <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">PoidsLeve
            </label>
          <input v-model="progressionData.PoidsLeve" type="number" placeholder="Enter poids"
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
        <div class="relative flex items-center sm:col-span-2">
          <label
            class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">TempsDeCourse</label>
          <input v-model="progressionData.TempsDeCourse" type="number"  placeholder="Enter TempsDeCourse"
            class="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
          
        </div>
      </div>
      <button type="button"
      @click="addProgression"
        class="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
    </form>
  </template>

<script>
import axios from 'axios';
import navbar from '../components/Navbar.vue';
export default {
  components : {
    navbar,
  },
  data() {
    return {
      progressionData: {
        poids: '',
        Poitrine: '',
        Mollet: '',
        Bras: '',
        Hauteur: '',
        PoidsLeve: '',
        TempsDeCourse: ''
      },
    };
  },
  methods: {
    addProgression() {
      const token = localStorage.getItem('token'); 
      axios.post('/api/Progression', this.progressionData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          alert('success , progressopn bien ajouter' );
          console.log(res.data);
          this.progressionData = {
            poids: '',
            Poitrine: '',
            Mollet: '',
            Bras: '',
            Hauteur: '',
            PoidsLeve: '',
            TempsDeCourse: '',
        }
        }).catch(err => {
          console.error(err.response.data);
        });
    },

    // logout() {
    //     const token = localStorage.getItem('token');
    //     axios.get('.api/logout',null,{
    //         headers :{
    //             'authorization' : `bearer ${token}`
    //         }
    //     })
    //     .then(response => {
    //         localStorage.removeItem('token');
    //         this.$router.push('/login');
    //     })
    //     .catch(err => {
    //         console.error(err.response.data);
    //     });
    // }
  },
}
</script>