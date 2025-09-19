fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyDRGsSDBGpgk13Pq05FokFpJVreY_L3MHA')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("video-container");
    container.innerHTML = "";

    data.items.forEach(item => {
      const myVideo = item.id;
      const title = item.snippet.title;
      const videoList = document.createElement("div");
      videoList.setAttribute("class", "video-list");
      videoList.innerHTML = `
        <h3>${title}</h3>
        <iframe src="https://www.youtube.com/embed/videoseries?list=${myVideo}" frameborder="0" allowfullscreen></iframe>
      `;
      container.appendChild(videoList);
    });
  })
  .catch(error => console.error("Error fetching YouTube data:", error));