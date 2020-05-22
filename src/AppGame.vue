<template>
  <div>
    <div>{{current+1}}/{{dat.length}} correct: {{result.correct}}, wrong: {{result.wrong}}</div>

    <h2 v-html="dat[current].question" />

    <div v-if="selected">
      <div v-html="dat[current].answer" />
      <div @click="nextQuestion" class="sip_btn" >Дальше</div>
    </div>
    <div class="sip_variants_w">
      <div
        v-for="variant of dat[current].variants"
        :key="variant.id"
        @click="onVariant(variant.id, dat[current].correct)"
        class="sip_variant"
        v-html="variant.text"
      />
    </div>
    
  </div>
</template>

<script>
const dat = [
  {
    id: 1,
    question: 'Question 1',
    answer: 'Answer 1',
    variants: [
      { id: 1, text: 'var 1 1' },
      { id: 2, text: 'var 1 2' },
      { id: 3, text: 'var 1 3' },
      { id: 4, text: 'var 1 4' }
    ],
    correct: 1
  },{
    id: 2,
    question: 'Question 2',
    answer: 'Answer 2',
    variants: [
      { id: 1, text: 'var 2 1' },
      { id: 2, text: 'var 2 2' },
      { id: 3, text: 'var 2 3' },
      { id: 4, text: 'var 2 4' }
    ],
    correct: 2
  },{
    id: 3,
    question: 'Question 3',
    answer: 'Answer 3',
    variants: [
      { id: 1, text: 'var 3 1' },
      { id: 2, text: 'var 3 2' },
      { id: 3, text: 'var 3 3' },
      { id: 4, text: 'var 3 4' }
    ],
    correct: 3
  },

]
export default {
  name: 'AppGame',
  data() {
    return {
      dat,
      current: 0,
      selected: false,
      result: {
        correct: 0,
        wrong: 0
      }
    }
  },
  methods: {
    nextQuestion() {
      this.selected = false
      if(this.current + 1 === this.dat.length) {
        this.$emit('onFinish', this.result)
      }else{
        this.current++
      }
    },
    onVariant (val, correct) {
      if(this.selected) return
      if(val === correct) {
        this.result.correct++
      }else{
        this.result.wrong++
      }
      this.selected = true
    }
  }
}
</script>

<style lang="stylus">
.sip_variants_w
  display flex
  justify-content space-between
.sip_variant
  border 1px solid #333
  width 23%
  margin-bottom 5px
  padding 10px
  text-align center
  cursor pointer
</style>
