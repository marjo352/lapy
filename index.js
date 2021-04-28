console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

client.on('message', function (topic, message) {
document.getElementById('t-body').innerHTML = `<tr><td>${topic}</td><td>${message}</td></tr>`
})

var pub_topic = document.getElementById('pub-topic');
var sub_topic = document.getElementById('sub-topic');
var btn_button = document.getElementById('btn-pub');
var pub_payload = document.getElementById('pub-payload')
var btn_subscribe = document.getElementById('btn-sub')

btn_button.addEventListener('click', () => {
if(pub_topic.value == sub_topic.value){
  client.publish(pub_topic.value , pub_payload.value)
}else{

}
})

btn_subscribe.addEventListener('click', () => {
  if(pub_topic.value == sub_topic.value){
    client.subscribe(sub_topic.value)
  }else{
  
  }
})