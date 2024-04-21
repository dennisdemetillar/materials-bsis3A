const turnOnLight = () => {
    document.getElementById('myImage').src = 'pic_bulbon.gif';
}

const turnOffLight = () => {
    document.getElementById('myImage').src = 'pic_bulboff.gif';
}

document.getElementById('turnOnBtn').addEventListener('click', turnOnLight);
document.getElementById('turnOffBtn').addEventListener('click', turnOffLight);
