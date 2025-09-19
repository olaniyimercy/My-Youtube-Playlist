fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyDRGsSDBGpgk13Pq05FokFpJVreY_L3MHA')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("video-container");
    container.innerHTML = "";
    data.items.forEach(item => {
      const myVideo = item.id;
      const title = item.snippet.title;
      const channelTitle = item.snippet.channelTitle;
      const publishedDate = item.snippet.publishedAt;
      const thumbnail = item.snippet.thumbnails.default.url;

      const myVideoList = document.createElement("div");
      myVideoList.setAttribute("class", "video-list");
      myVideoList.innerHTML = `
        <iframe src="https://www.youtube.com/embed/videoseries?list=${myVideo}" frameborder="0" allowfullscreen></iframe>
        
        <div class="wrapper">
        <img src="${thumbnail}" alt="${title} thumbnail">
        <section>
        <p>${channelTitle}</p>
        <p>${title}</p>
        <p>${publishedDate}</p>
        </section>
        
        </div>
        
      `;
      container.appendChild(myVideoList);
    });
  })
  .catch(error => console.error("Error fetching YouTube data:", error));
