const kodomAli = {
    name: 'Kodom ali',
    mony: 3000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam'
    },
    improveExam: function(subject){
        this.exam();
        return`${this.name} is takeing improvement Exam an ${subject}`
    },
    treatDey : function(amount){
        this.mony = this.mony - amount;
        return this.mony;
    }
}

const result = kodomAli.exam();

// console.log(result)

const alim = {
    name: 'kacha baddam',
    mony: 8000
}

const result2 = kodomAli.exam.call(alim);
// console.log(result2)

const baddamMony = kodomAli.treatDey.call(alim, 2000);
// console.log(baddamMony);

const baddamMony2 = kodomAli.treatDey.apply(alim, [1000])
// console.log(baddamMony2)

const baddamALi = kodomAli.treatDey.bind(alim);
const remaining = baddamALi(3000);
console.log(remaining)






