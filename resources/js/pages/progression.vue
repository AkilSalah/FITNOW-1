<template>
    <header class='shadow-md py-2 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]'>
    <div class='flex flex-wrap items-center justify-between gap-5 relative'>
      <a href="javascript:void(0)"><img src="/images/vecteezy_fitness-sport-gym-logo-design_11162122-Photoroom.png-Photoroom.png" alt="logo" class='w-16' />
      </a>
      <div class='flex lg:order-1 max-sm:ml-auto'>
        <button @click=""
          class='px-4 py-3 text-sm rounded-full font-bold text-red border-2 border-red bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#117bff]'>Logout</button>
       
      </div>
    </div>
  </header>
  <div class="relative bg-gradient-to-r mt-1 from-purple-900 to-black-800 py-16 font-[sans-serif]">
      <div class="absolute inset-0">
        <img src="https://cdn.shopify.com/s/files/1/0297/0366/7845/files/full_planche_trois_doigts_1024x1024.png?v=1612756362" alt="Background Image" class="w-full h-full object-cover opacity-50" />
      </div>
      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to Our Premium Service</h1>
        <p class="text-lg md:text-xl mb-8">Experience excellence like never before with our exclusive products and services.</p>
        <button type="button" class="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
      </div>
    </div>

    <div class=" mt-4 text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">Mes Progressions</h2>
    </div>
    
    <div class=" mt-16 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Poids
                </th>
                <th scope="col" class="px-6 py-3">
                    Hauteur
                </th>
                <th scope="col" class="px-6 py-3">
                    Poitrine
                </th>
                <th scope="col" class="px-6 py-3">
                    Mollet
                </th>
                <th scope="col" class="px-6 py-3">
                    Bras
                </th>
                <th scope="col" class="px-6 py-3">
                    PoidsLeve
                </th>
                <th scope="col" class="px-6 py-3">
                    TempsDeCourse
                </th>
                <th scope="col" class="px-6 py-3">
                    status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="progression in progressionData" :key="progression.id"

                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ progression.id }}
                </th>
                <td class="px-6 py-4">
                    {{ progression.poids }}
                </td>
                <td class="px-6 py-4">
                    {{progression.Hauteur}}
                </td>
                <td class="px-6 py-4">
                    {{ progression.Poitrine }}
                </td>
                <td class="px-6 py-4">
                    {{ progression.Mollet }}
                </td>
                <td class="px-6 py-4">
                    {{ progression.Bras }}
                </td>
                <td class="px-6 py-4">
                    {{ progression.PoidsLeve }}
                </td>
                <td class="px-6 py-4">
                    {{ progression.TempsDeCourse }}
                </td>
                <td class="px-6 py-4">
                    {{ progression.status }}
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <button @click="deleteProgression(progression.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button> 
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script >
import axios from 'axios';
const token = localStorage.getItem('token');
export default {
  data() {
    return {
      progressionData: [],
      progression: {
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
    getProgression() {
      if (!token) {
        console.error("Not authenticated");
        return;
      }
      axios.get('/api/Progression', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(({data}) => {
        this.progressionData = data.data.progressions; 
      })
      .catch(error => {
        console.error('Error while fetching progressions:', error);
      });
    },

    deleteProgression(id) {
      if (confirm("Are you sure you want to delete this progression?")) {
        axios.delete(`/api/Progression/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          this.getProgression(); 
        })
        .catch(err => {
          console.error(err);
          alert("Failed to delete progression.");
        });
      }
    }
  },
  created() {
    this.getProgression(); 
  },
}
</script>
