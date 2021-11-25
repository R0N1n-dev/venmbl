<template>
  <div>
    <div class="container">
      <form class="form">
        <input v-model="userDetails.Name" type="text" placeholder="Name" />
        <span style="color: pink"> {{ userDetailErrors.Name }}</span>
        <input
          v-model="userDetails.Address"
          type="text"
          placeholder="e.g. City"
        />
        <span style="color: red"> {{ userDetailErrors.Address }}</span>
        <select name="Products" v-model="userDetails.Product">
          <option disabled value="">Please select one</option>
          <option value="Laptops">Laptops</option>
          <option value="Projectors">Projectors</option>
          <option value="TV">Televisions</option>
          <option value="Audio">Audio acessories</option>
          <option value="AC">Air conditioning</option>
          <option value="Storage">Storage devices and solutions</option>
        </select>
        <span style="color: yellow"> {{ userDetailErrors.Product }}</span>
      </form>
      <button @click="submitForm">Submit</button>

      <div class="social" align="center">
        <v-icon name="brands/facebook" scale="1.5" />
        <v-icon name="brands/twitter" scale="1.5" />
        <v-icon name="brands/google" scale="1.5" />
      </div>
    </div>
    <div class="item-display">
      <ul>
        <li v-for="item in items" :key="item.id">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetails: {
        Name: "",
        Address: "",
        Product: ""
      },
      userDetailErrors: {
        Name: undefined,
        Address: undefined,
        Product: undefined
      },
      items: []
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.userDetailErrors = this.validateDetails(this.userDetails);
      if (Object.keys(this.userDetailErrors).length) return;

      this.items.push(this.Product);
      this.userDetails.Name = "";
      this.userDetails.Address = "";
      this.userDetails.Product = "";
    },
    validateDetails(userDetails) {
      const errors = {};
      if (!userDetails.Name) errors.Name = "Please enter name";
      if (!userDetails.Address) errors.Address = "Please enter address";
      if (!userDetails.Product) errors.Product = "Please pick a product";
      return errors;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #273349;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(12, 16, 31, 0.4);
  padding: 100px;
  margin: auto;
  width: 400px;
  height: 400px;
}

.form {
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 4px;
  margin-bottom: 10px;
}

button {
  margin: 45px;
  border: none;
  border: 2px solid lightgreen;
  border-radius: 5px;
  height: 25px;
  font-size: 1em;
  background-color: green;
  color: white;
}

button:hover {
  border: 2px solid #345676;
  transform: scale(1.5);
  transition: 0.2s ease-in-out;
}

.social .fa-icon {
  color: white;
  margin: 10px 15px;
  cursor: pointer;
}

.social .fa-icon:hover {
  transform: scale(1.2);
  transition: 0.2s ease-in-out;
}
</style>
