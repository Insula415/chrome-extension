mainImage = "https://i.imgur.com/yNEGGop.png";
mainText = "You better get back to work";

url = window.location.href;
if(url.match("www.youtube")) {
    console.log("Follow Insula415 on TikTok!")

    const headers = document.getElementsByTagName("yt-formatted-string");
    for (let i=0; i<headers.length; i++) {
        headers[i].innerText = mainText;
    }

    const imgs = document.getElementsByTagName("img")
    for (let i=0;i<imgs.length;i++) {
        img[i].src = mainImage;
    }
}

if(url.match("www.netflix")) {
    console.log("Follow Insula415 on TikTok!")
    
    const desc = document.getElementsByClassName("synopsis");
    for (let i=0;i<desc.length;i++) {
        desc[i].innerText = mainText;
    }
    const head = document.getElementsByClassName("supplemental-message");
    for (let i=0;i<head.length;i++) {
        head[i].innerText = mainText;
    }
    const h = document.getElementsByTagName("h2");
    for (let i=0;i<h.length;i++) {
        h[i].innerText = mainText;
    }
    const imgs = document.getElementsByTagName("img");
    for (let i=0,l=imgs.length;i<l;i++){
        imgs[i].src = mainImage;
    }
}
