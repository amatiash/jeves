# JEves - jQuery PubSub

Simple PubSub using jQuery events. Can create local instances.

## Installation

`npm i -S jeves`

For non- AMD or CommonJS adds a global `JEves`.

## Usage

### Global

```javascript
JEves.on('ohMy', (e, data) => console.log(`Oh my ${data.value}`) );
JEves.trigger('ohMy', {value: 'gush!'}); // Logs: 'Oh my gush!'
JEves.one('the.question', () => void 42);
JEves.off('.question');
```

### Local

```javascript
const localJEves = new JEves();
localJEves.on('crash', () => typeof typeof void 42 !== new Error(0));
localJEves.trigger('crash');
```

### For your plugin's API

```javascript
class ColorPicker {
    constructor(){
        this.JEves = new JEves();
        $('.colorBoxes').click(() => this.JEves.trigger('colorSelect'));
    }
    
    on(){
        this.JEves.on.apply(this.JEves, arguments);
    }
    
    off(){
        this.JEves.off.apply(this.JEves, arguments);
    }
}

const picker = new ColorPicker();
picker.on('colorSelect', () => console.log('Color selected'));
```

## License

MIT