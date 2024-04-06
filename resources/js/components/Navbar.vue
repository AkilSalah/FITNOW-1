<template>
     <header class='shadow-md py-2 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]'>
    <div class='flex flex-wrap items-center justify-between gap-5 relative'>
      <a href="javascript:void(0)"><img src="/images/vecteezy_fitness-sport-gym-logo-design_11162122-Photoroom.png-Photoroom.png" alt="logo" class='w-16' />
      </a>
      <div class='flex lg:order-1 max-sm:ml-auto'>
        <button @click="logout"
          class='px-4 py-3 text-sm rounded-full font-bold text-red border-2 border-red bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#117bff]'>Logout</button>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
export default {
    
    methods :{
        logout() {
        const token = localStorage.getItem('token');
        axios.get('.api/logout',null,{
            headers :{
                'authorization' : `bearer ${token}`
            }
        })
        .then(response => {
            localStorage.removeItem('token');
            this.$router.push('/login');
        })
        .catch(err => {
            console.error(err.response.data);
        });
    }
    }

}

</script>