import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


// Function to get data from localStorage or from a remote server
function getData(): Promise<any> | string {
  var data = localStorage.getItem('mydata');
  if (data) {
    return data; // Return the data from localStorage (string)
  }
  // If no data in localStorage, fetch it from the server
  return fetch('http://127.0.0.1:8000/data.json')
    .then((res) => res.json())
    .catch((err) => console.error('Error fetching data:', err));
}

// Function to show data, either from localStorage or the server
function showData() {
  var data = getData(); // Call the getData function

  if (typeof data === 'string') {
    // If data is a string (from localStorage)
    console.log(`From localStorage: ${data}`);
  }

  // If the data is a Promise (fetch result), resolve and handle it
  if (data instanceof Promise) {
    data.then((res) => {
      console.log('Fetched data:', res);
    });
  }
}

// Define Laptop interface for type safety
interface Laptop {
  id: number;
  model: string;
  price: number;
}

// Function to fetch laptop data
async function getLaptopsData(): Promise<Laptop[]> {
  const response = await fetch('http://127.0.0.1:8000/data.json');
  return response.json();
}

// Function to display laptops
function showLaptops() {
  getLaptopsData().then((laptops) => {
    // Iterate over each laptop and log its details
    laptops.forEach((laptop) => {
      console.log(`Laptop ID: ${laptop.id}`);
      console.log(`Model: ${laptop.model}`);
      console.log(`Price: $${laptop.price}`);
      console.log('----------');
    });
  }).catch((err) => {
    console.error('Error fetching laptops:', err);
  });
}

// Call the showLaptops function to display the data
showLaptops();