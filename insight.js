const script = document.createElement("script");

script.type = "module";
script.src = "https://static.cloudflareinsights.com/beacon.min.js";
script.dataset.cfBeacon = JSON.stringify({
    token: "e49f5eab30b24caa9730a3f71a6c7f01",
});

document.head.appendChild(script);