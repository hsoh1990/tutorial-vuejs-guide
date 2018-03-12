<template>
  <div>
    <span> yes/no 질문을 물어보세요</span>
    <input v-model="question">
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'watch',
  data: function () {
    return {
      question: '',
      answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    };
  },
  watch: {
    question: function (newQuestion) {
      this.answer = '입력을 기다리는 중...';
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)';
      } else {
        this.answer = '생각중 .... ';
        let vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = response.data.answer;
          })
          .catch(function (error) {
            vm.answer = '에러! API 요청에 오류가 있습니다. ' + error;
          });
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
