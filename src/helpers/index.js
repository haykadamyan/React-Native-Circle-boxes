export const Config = {
    randomBetween: (min, max) => Math.floor(Math.random() * (max-min+1) + min),
    randomColor: () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }    
}