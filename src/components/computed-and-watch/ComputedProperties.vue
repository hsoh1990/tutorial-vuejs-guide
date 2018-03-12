<template>
<div>
  <span>원본 메시지:"{{message}}"</span>
  <p>뒤집히도록 계산된 메시지: "{{reversedMessage}}"</p>
  <p>현재시간 출력: "{{now}}"</p>
  <br/>
  <p>firstName : <input v-model="firstName"></p>
  <p>lastName : <input v-model="lastName"></p>
  <span>full name : "{{fullName}}"</span>
</div>
</template>

<script>
export default {
  name: 'computed-properties',
  data: function () {
    return {
      message: '안녕하세요',
      firstName: 'Foo',
      lastName: 'Boo'
    };
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    },
    now: function () {
      return Date.now();
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
};
</script>

<style scoped>
  span {
    font-weight: normal;
    font-size: medium;
  }

  p {
    font-size: small;
  }
</style>
