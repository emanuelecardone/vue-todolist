Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            thingsToDo: [
                {
                    toDo: 'Fare la spesa',
                    done: true
                },
                {
                    toDo: 'Fare gli esercizi',
                    done: false
                },
                {
                    toDo: 'Comprare dei vestiti',
                    done: false
                },
                {
                    toDo: 'Fare sport',
                    done: true
                },
                {
                    toDo: 'Pagare le bollette',
                    done: false
                }
            ],
            inputValue: ''
        },
        methods: {
            removeItem: function(thisTodoIndex){
                this.thingsToDo.splice(thisTodoIndex,1);
                console.log(this.thingsToDo);
            },
            addItem: function(){
                this.inputValue = this.inputValue.trim();
                this.thingsToDo.push(
                    {
                        toDo: this.inputValue,
                        done: false
                    }
                );
            },
            reverseItem: function(thisTodoElement){
                thisTodoElement.done = !thisTodoElement.done
            }
        },
    }
);