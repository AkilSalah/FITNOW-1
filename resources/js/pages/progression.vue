<template>
   
   <navbar />
  <div class="relative bg-gradient-to-r mt-1 from-purple-900 to-black-800 py-16 font-[sans-serif]">
      <div class="absolute inset-0">
        <img src="https://cdn.shopify.com/s/files/1/0297/0366/7845/files/full_planche_trois_doigts_1024x1024.png?v=1612756362" alt="Background Image" class="w-full h-full object-cover opacity-50" />
      </div>
      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to Our Premium Service</h1>
        <p class="text-lg md:text-xl mb-8">Experience excellence like never before with our exclusive products and services.</p>
        <router-link to="/home">
            <button type="button" class="bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Ajouter une Progression</button>
        </router-link>
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
                    {{ progression.poids }} Kg
                </td>
                <td class="px-6 py-4">
                    {{progression.Hauteur}} Cm
                </td>
                <td class="px-6 py-4">
                    {{ progression.Poitrine }} Cm
                </td>
                <td class="px-6 py-4">
                    {{ progression.Mollet }} Cm
                </td>
                <td class="px-6 py-4">
                    {{ progression.Bras }} Cm
                </td>
                <td class="px-6 py-4">
                    {{ progression.PoidsLeve }} Kg
                </td>
                <td class="px-6 py-4">
                    {{ progression.TempsDeCourse }} Min
                </td>
                <td class="px-6 py-4">
                    <span v-if="progression.status === 'NonTerminé'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                {{ progression.status }}
                            </span>
                            <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {{ progression.status }}
                            </span>
                </td>
                <td class="flex items-center px-6 py-4">
                <button  @click="updateModal(progression)" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                <!-- Main modal -->
                <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div id="header" class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update Progression
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                        <div v-if="showModal ">
                            <form class="mt-16 font-[sans-serif] m-6 max-w-4xl mx-auto">
                            <div class="grid sm:grid-cols-2 gap-10">
                                <div class="relative flex items-center">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">poids</label>
                                <input v-model="editedProgression.poids" type="number" placeholder="Enter poids"
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                                <div class="relative flex items-center">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Poitrine</label>
                                <input v-model="editedProgression.Poitrine" type="number" placeholder="Enter Poitrine"
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                                <div class="relative flex items-center">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Mollet</label>
                                <input v-model="editedProgression.Mollet" type="number" placeholder="Enter mollet."
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                                <div class="relative flex items-center">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Bras</label>
                                <input v-model="editedProgression.Bras" type="number" placeholder="Enter Bras"
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                                <div class="relative flex items-center">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Hauteur</label>
                                <input v-model="editedProgression.Hauteur" type="number" placeholder="Enter Hauteur"
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                                <div class="relative flex items-center">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">PoidsLeve</label>
                                <input v-model="editedProgression.PoidsLeve" type="number" placeholder="Enter poids"
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                                <div class="relative flex items-center sm:col-span-2">
                                <label class="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">TempsDeCourse</label>
                                <input v-model="editedProgression.TempsDeCourse" type="number" placeholder="Enter TempsDeCourse"
                                        class="px-4 mx-2 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                                </div>
                            </div>
                            <button @click="updatedProgression" type="button"
                                    class="mx-auto m-4 mb-2 block px-6 py-2.5 text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600">
                                Submit
                            </button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div> 
                <button @click="deleteProgression(progression.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                 <div v-if="progression.status !== 'terminé'" > 
                 <button @click="complete(progression)" class="font-medium text-green-600 dark:text-red-500 hover:underline ms-3">Complete</button> 
                 </div>
                 <div v-else>
                  <p class="ms-3">deja terminé</p>
                 </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios';
const token = localStorage.getItem('token');
import navbar from '../components/Navbar.vue';
export default {
  components :{
    navbar,
  },
  data() {
    return {
      progressionData: [],
      progression: {
        id : '',
        poids: '',
        Poitrine: '',
        Mollet: '',
        Bras: '',
        Hauteur: '',
        PoidsLeve: '',
        TempsDeCourse: ''
      },
      editedProgression: {
        id: '',
        poids: '',
        Poitrine: '',
        Mollet: '',
        Bras: '',
        Hauteur: '',
        PoidsLeve: '',
        TempsDeCourse: ''
      },
      showModal: false
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
    },

    updateModal(progression) {
      this.editedProgression = {
        id: progression.id,
        poids: progression.poids,
        Hauteur: progression.Hauteur,
        Bras: progression.Bras,
        Mollet: progression.Mollet,
        Poitrine: progression.Poitrine,
        PoidsLeve: progression.PoidsLeve,
        TempsDeCourse: progression.TempsDeCourse
      };
      this.showModal = true;
    },

    updatedProgression() {
      axios.patch(`/api/Progression/${this.editedProgression.id}`, this.editedProgression, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        this.showModal = false;
        document.getElementById('header').classList.add('hidden');
        this.getProgression();
      })
      .catch(err => {
        console.error(err);
        alert("Failed to update progression.");
      });
    },

    complete(progression) {
  axios.patch(`/api/Progression/${progression.id}/completed`, progression, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    console.log(res.data);
    this.getProgression();
  }).catch(err => {
    console.error(err);
    alert("Failed to complete progression.");
  });
}


   
  },
  created() {
    this.getProgression(); 
  },
}
</script>
