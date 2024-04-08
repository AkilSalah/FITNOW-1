<template>
    <div class="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4"
     style="background-image: url(/images/—Pngtree—dark\ fitness\ room\ with\ training_4839864.jpg); background-repeat: no-repeat; background-size: cover;">
     <div class="max-w-md w-full mx-auto">
       <form class="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
         <div class="mb-10">
           <h3 class="text-3xl font-extrabold">Register</h3>
         </div>
         <div>
           <div class="relative flex items-center">
             <input name="name" v-model="userData.name" type="text" required
               class="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
               placeholder="Enter name" />
               <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" class="w-[18px] h-[18px] absolute right-2"
                 viewBox="0 0 448 512">
                 <path
                   d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
               </svg>
           </div>
         <div class="mt-8">
           <div class="relative flex items-center">
             <input name="email" v-model="userData.email" type="text" required
               class="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
               placeholder="Enter email" />
             <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" class="w-[18px] h-[18px] absolute right-2"
               viewBox="0 0 682.667 682.667">
               <defs>
                 <clipPath id="a" clipPathUnits="userSpaceOnUse">
                   <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                 </clipPath>
               </defs>
               <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                 <path fill="none" stroke-miterlimit="10" stroke-width="40"
                   d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                   data-original="#000000"></path>
                 <path
                   d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                   data-original="#000000"></path>
               </g>
             </svg>
           </div> 
         </div>
          
         </div>
         <div class="mt-8">
           <div class="relative flex items-center">
             <input name="password" v-model="userData.password" type="password" required
               class="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
               placeholder="Enter  password" />
             <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333"
               class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
               <path
                 d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                 data-original="#000000"></path>
             </svg>
           </div>
         </div>
         <div class="flex items-center justify-between gap-2 mt-6">
         </div>
         <div> 
           <button type="button" 
            @click="registerUser" class="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none">
              Inscrit
           </button>
           <p class="text-sm text-center mt-6">Already have an account 
            <router-link to="/login"  class="font-semibold curseur hover:underline cursor-pointer ml-1 whitespace-nowrap">Login here</router-link></p>
         </div>
        
       </form>
     </div>
   </div>
   </template>
   
   <script>
   import axios from 'axios';
   
   export default {
     data() {
       return {
         userData: {
           name: '',
           email: '',
           password: '',
         },
       };
     },
     methods: {
       registerUser() {
         axios.post('/api/register', this.userData)
           .then(res => {
             console.log(res.data);
             this.userData = {
               name: '',
               email: '',
               password: '',
             };
             this.$router.push('/login')
           }).catch(err => {
             console.error(err.response.data);
           });
       },
     },
   };
   </script>
   