const student = {
    name: 'Kodom ali',
    mony: 3000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.name, 'is participating in an exam')
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

const reExam = student.improveExam('Algebra')
// console.log(reExam)
// student.exam();

const remaining = student.treatDey(900);
console.log(remaining)