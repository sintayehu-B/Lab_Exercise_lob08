function person(fn,ln){
    this.fn = fn;
    this.ln = ln;

    this.prt = function(){
        console.log('hi', `${this.fn,this.ln}`);
    }
}
const p = new person("sina", "sern")
console.log(p);