'use strict';

const AmagiLoader = {
    __loader: null,
    show: function () {

        if (this.__loader == null) {
            var divContainer = document.createElement('div');
            divContainer.style.position = 'fixed';
            divContainer.style.left = '0';
            divContainer.style.top = '0';
            divContainer.style.width = '100%';
            divContainer.style.height = '100%';
            divContainer.style.zIndex = '9998';
            divContainer.style.backgroundColor = '#F6F5F1';
            divContainer.style.transition = 'all 0.2s ease-in-out';
            
            var div = document.createElement('h1');
            div.textContent = 'Code_Verse';
            div.style.position = 'absolute';
            div.style.left = '40%';
            div.style.top = '50%';
            div.style.zIndex = '9999';
            div.style.fontSize = '2rem';
            div.style.color = 'black';
            div.style.fontWeight = 'bold'
            divContainer.style.transition = 'all 0.2s ease-in-out';
            divContainer.appendChild(div);
            this.__loader = divContainer
            document.body.appendChild(this.__loader);
        }
        this.__loader.style.height = "100%";
    },
    hide: function () {
        if (this.__loader != null) {
            this.__loader.style.height = "0%";
            this.__loader.style.opacity = "0";
        }
    }
}

AmagiLoader.show();
setTimeout(() => {
    AmagiLoader.hide();
}, 3000);