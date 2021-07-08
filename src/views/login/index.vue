<template>
  <div class="login-container">
    登录
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {

  },
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  created  () {
    this.onLogin()
  },
  mounted () {

  },
  methods: {
    async onLogin () {
      try {
        const res = await login(this.user)
        console.log('登录成功', res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('登录失败', err)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
