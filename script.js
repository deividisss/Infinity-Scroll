//Unsplash API
const count = 10;
const apiKey = "gkXQzvLHE6aInvSTVJ0dvbNNmhZvMnSM0mCj21CaSjg";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
