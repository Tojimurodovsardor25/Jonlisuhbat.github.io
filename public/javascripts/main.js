const socket = io()
const NewMessageField = document.querySelector('.data-group')
const inputForm = document.querySelector('.fixed-info .form-actions')
const input = document.querySelector('.form-actions input')
console.log(inputForm, input);


socket.on('message', (data) => {
  console.log(data);
  OutputMessages(data)
})

const { username, mobilnumber, userbiografia, password1, password2, email } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
})

socket.emit('joinRoom', ({ username, mobilnumber, userbiografia, password1, password2, email }))

console.log(user, 'User new');

socket.on('joined', (msg) => {
  console.log(msg);
  OutputMessages(msg)
})
socket.on('chiqish', (msg) => {
  console.log(msg);
  OutputMessages(msg)
})


inputForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let NewMessages = input.value

  socket.emit('message', NewMessages)

  input.value = ''
})

const OutputMessages = (data) => {
  const div = document.createElement('div')

  div.innerHTML = `
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
         <span class="name">${user.username}</span>
        </div>
       <div class="avatar-text">
        <span>${data.text}</span>
          <data-time class="data-time">${data.time}</data-time>
       </div>
      </div>
    </div>
  </div>
  `
  NewMessageField.appendChild(div)
}

/*
 <div class="Welcom">
  <div class="s-h-info"><span>Suhbat rasmiy sahifasiga hush kelibsiz</span></div>
  <span class="s-n-info">Biz bilan birga bo'lganingiz uchun tashakkur</span>
  <span class="s-n-info">Jonli vaqtda muloqot qiling...</span>
  <span class="s-n-info">Guruh yarating...</span>
  <span class="s-n-info">Suhbat bilan birga yoningizgda...</span>
</div>
*/