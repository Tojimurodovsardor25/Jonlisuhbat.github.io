const socket = io()
const NewMessageField = document.querySelector('.data-group')


socket.on('message', (data) => {
    console.log(data);

    NewMessageField.innerHTML = `
    <div class="group-content">
      <div class="message">
       <avatar-im class="avatar-info">
        <user-online class="user-online"></user-online>
         <div class="avatar-img">
          <img src="/images/veeterzy-sMQiL_2v4vs-unsplash.jpg" alt="png"></img>
         </div>
        </avatar-im>
        <div class="context-group">
          <div class="avatar-name">
           <span class="name">Sardor1</span>
          </div>
         <div class="avatar-text">
          <p>${data}</p>
            <data-time class="data-time">11:03</data-time>
         </div>
        </div>
      </div>
    </div>
    `
})