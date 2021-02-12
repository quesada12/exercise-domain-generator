var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domain = ['com','en'];

for (const a of pronoun) {
    for (const b of adj) {
        for (const c of noun) {
            for (const d of domain) {
                console.log(a+b+c+'.'+d)
            }
        }
    }
}