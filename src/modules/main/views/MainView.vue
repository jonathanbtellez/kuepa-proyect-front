<template>
  <div>
    <h2 class="font-black text-3xl md:text-4xl text-center">Clase en vivo</h2>
    <Player />
    <Chat />
    <div class="w-11/12 m-auto">
      <div class="mt-2">
        <textarea
          v-bind="newMessage"
          id="about"
          name="about"
          rows="3"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
      <span v-if="isEmpty">El comentario no puede estar vacio</span>
      <button
        @click="sendMessage"
        class="mt-4 text-sm leading-6 bg-orange-800 rounded-lg px-6 py-2 font-bold hover:bg-orange-700 text-gray-200"
      >
        Enviar comentario
      </button>
    </div>
  </div>
</template>
<script setup>
import Player from '../components/Player.vue'
import Chat from '../components/Chat.vue'

import io from 'socket.io-client';

import { ref } from 'vue'

const isEmpty = ref(false)
const socket = io(import.meta.env.VITE_SOCKET_URL)
const messages = ref([])
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.length() == 0) {
    isEmpty.value = true
  }
  socket.emit('send-message', { text: newMessage.value, username:  })
  newMessage.value = ''
}


socket.on('message', (on-message-changes) => {
  messages.value.push(data)
})

</script>
