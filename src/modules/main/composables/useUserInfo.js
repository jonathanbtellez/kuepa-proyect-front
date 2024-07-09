import { userName } from '@/modules/auth/store/getters'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const useUserInfo = () => {
  const store = useStore()

  return {
    username: computed(() => store.getters['userName'])
  }
}

export default useUserInfo
