<template>
  <div class="calc">
    <button class="val">{{ val || 0 }}</button>
    <button class="btn , clr" @click="clear">C</button>
    <button class="btn , sign" @click="divide">/</button>
    <button class="btn" @click="append('7')">7</button>
    <button class="btn" @click="append('8')">8</button>
    <button class="btn" @click="append('9')">9</button>

    <button class="btn , sign" @click="multiply">X</button>
    <button class="btn" @click="append('4')">4</button>
    <button class="btn" @click="append('5')">5</button>
    <button class="btn" @click="append('6')">6</button>
    <button class="btn , sign" @click="minus">-</button>
    
    <button class="btn" @click="append('1')">1</button>
    <button class="btn" @click="append('2')">2</button>
    <button class="btn" @click="append('3')">3</button>
    <button class="btn , sign" @click="plus">+</button>
    
    <button class="btn" @click="append('0')">0</button>
    <button class="btn" @click="dot()">.</button>
    <button class="btn, equal , sign" @click="equalTo">=</button>

    <footer class="footer">©PratikSonawane</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preVal: '',
      val: '',
      operator: null,
      isClicked: false,
    };
  },

  methods: {
    clear() {
      this.val = '';
    },

    append(num) {
      if (this.isClicked) {
        this.val = '';
        this.isClicked = false;
      }
      this.val = `${this.val}${num}`;
    },

    dot() {
      if (this.val.indexOf('.') === -1) {
        this.append('.');
      }
    },

    plus() {
      this.operator = (a, b) => a + b;
      this.preVal = this.val;
      this.isClicked = true;
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.preVal = this.val;

      this.isClicked = true;
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.preVal = this.val;

      this.isClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.preVal = this.val;

      this.isClicked = true;
    },

    equalTo() {
      this.val = `${this.operator(
        parseFloat(this.preVal),
        parseFloat(this.val)
      )}`;
      this.preVal = null;
    },
  },
};
</script>

<style>
* {
  background-color: lightblue;
}
.calc {
  width: 350px;
  margin: auto;
  margin-top: 180px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.val {
  grid-column: 1/5;
  background-color: mediumaquamarine;
  border-radius: 7px;
}

.clr {
  grid-column: 1/4;
  background-color: red;
}

.equal {
  grid-column: 3/5;
  border-radius: 7px;
}

.sign {
  background-color: darkgoldenrod;
}

.footer {
  font-size: 10px;
}

.btn {
  border-radius: 7px;
}
</style>
