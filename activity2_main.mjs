import readline from 'readline';
import {Student} from './activity2_student.mjs';

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});


rl.question('Please enter your name:', (answer1) => {
    rl.question('PLease enter your Matric number:', (answer2) =>{
        rl.question('PLease enter your major:', (answer3) =>{
            
            let student = new Student(answer1,answer2,answer3);
            console.log(student.display());
            rl.close();
        });
        
    });
    
} );