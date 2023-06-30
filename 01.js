import { Funa } from './funa.min.js';

const app = new Funa({
    data: {
        times: 0
    },
    
    on: {
        count() {
            app.data.times++;
        }
    },
});

app.render();